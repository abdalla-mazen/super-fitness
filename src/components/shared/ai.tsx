import  { useState } from "react";


type Message = {
  role: "user" | "assistant";
  content: string;
};


type ChatHistory = {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
};

export default function AiChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const [, setChatHistories] = useState<ChatHistory[]>([]);
  const [currentChatId, setCurrentChatId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (chatId: string, text: string) => {
    if (isLoading) return;

    setIsLoading(true);

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);

    try {
      const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta-llama/llama-3.2-3b-instruct:free",
            messages: updatedMessages,
          }),
        }
      );

      if (response.status === 429) {
        throw new Error("Too many requests, please wait a few seconds");
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || "API request failed");
      }

      const assistantMessage: Message = {
        role: "assistant",
        content:
          data.choices?.[0]?.message?.content ||
          "Sorry, I couldn't respond.",
      };

      const finalMessages = [...updatedMessages, assistantMessage];
      setMessages(finalMessages);

    
      setChatHistories((prev) =>
        prev.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: finalMessages, updatedAt: Date.now() }
            : chat
        )
      );
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "Something went wrong",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // دالة handleSend
  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    let chatId = currentChatId;

    if (!chatId) {
      const newChat: ChatHistory = {
        id: Date.now().toString(),
        title: "New Chat",
        messages: [],
        createdAt: Date.now(),
        updatedAt: Date.now(),
      };

      setChatHistories((prev) => [newChat, ...prev]);
      setCurrentChatId(newChat.id);

      chatId = newChat.id;
    }

    const messageText = input.trim();
    setInput("");

    await sendMessage(chatId, messageText);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4 border rounded-xl shadow-lg">
      <div className="mb-4 h-96 overflow-y-auto border p-2 rounded">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`my-2 p-2 rounded ${
              msg.role === "user"
                ? "bg-blue-200 text-right"
                : "bg-gray-200 text-left"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {isLoading && (
          <div className="text-gray-500 italic">Assistant is typing...</div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !isLoading) {
              e.preventDefault();
              handleSend();
            }
          }}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white p-2 rounded disabled:bg-blue-300"
          disabled={isLoading}
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}