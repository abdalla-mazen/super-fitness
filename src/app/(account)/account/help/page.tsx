import { LifeBuoy, Mail, MessageCircle, Book, HelpCircle, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HelpPage() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t("faq-q1"),
      answer: t("faq-a1"),
    },
    {
      question: t("faq-q2"),
      answer: t("faq-a2"),
    },
    {
      question: t("faq-q3"),
      answer: t("faq-a3"),
    },
    {
      question: t("faq-q4"),
      answer: t("faq-a4"),
    },
    {
      question: t("faq-q5"),
      answer: t("faq-a5"),
    },
    {
      question: t("faq-q6"),
      answer: t("faq-a6"),
    },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-[url(/assets/toWEBP/auth-layout-bg.webp)]" />

      <div className="relative z-10 flex flex-col min-h-screen backdrop-blur-xl bg-white/55 dark:bg-[#24242499]">
        <div className="container mx-auto px-4 py-10 max-w-4xl w-full">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
              <LifeBuoy className="lg:w-20 lg:h-20 w-14 h-14 text-main" />
            </div>
            <h1 className="font-Baloo text-4xl md:text-6xl font-extrabold mb-4 capitalize">
              {t("help-comp")}
            </h1>
            <p className="text-lg opacity-80">{t("help-content")}</p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6 text-center">
              <Mail className="w-10 h-10 text-main mx-auto mb-3" />
              <h3 className="font-Baloo text-xl font-bold mb-2 capitalize">{t("email-support")}</h3>
              <p className="text-sm">{t("email-support-content")}</p>
            </div>

            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6 text-center">
              <MessageCircle className="w-10 h-10 text-main mx-auto mb-3" />
              <h3 className="font-Baloo text-xl font-bold mb-2 capitalize">{t("live-chat")}</h3>
              <p className="text-sm">{t("live-chat-content")}</p>
            </div>

            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6 text-center">
              <Phone className="w-10 h-10 text-main mx-auto mb-3" />
              <h3 className="font-Baloo text-xl font-bold mb-2 capitalize">{t("phone-support")}</h3>
              <p className="text-sm">{t("phone-support-content")}</p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-main" />
              <h2 className="font-Baloo text-3xl font-bold capitalize">{t("faq")}</h2>
            </div>

            <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <Book className="w-8 h-8 text-main" />
              <h2 className="font-Baloo text-3xl font-bold capitalize">{t("resources")}</h2>
            </div>

            <div className="space-y-4">
              <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
                <h3 className="font-Baloo text-xl font-bold mb-2 capitalize">
                  {t("getting-started")}
                </h3>
                <p className="text-base leading-relaxed">{t("getting-started-content")}</p>
              </div>

              <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
                <h3 className="font-Baloo text-xl font-bold mb-2 capitalize">{t("user-guide")}</h3>
                <p className="text-base leading-relaxed">{t("user-guide-content")}</p>
              </div>

              <div className="bg-white/70 dark:bg-[#D3D3D333]/50 border border-dark dark:border-white rounded-3xl p-6">
                <h3 className="font-Baloo text-xl font-bold mb-2 capitalize">
                  {t("video-tutorials")}
                </h3>
                <p className="text-base leading-relaxed">{t("video-tutorials-content")}</p>
              </div>
            </div>
          </div>

          {/* Additional Support */}
          <div className="bg-main/10 border border-dark dark:border-white rounded-3xl p-6 text-center">
            <h2 className="font-Baloo text-2xl font-bold mb-3 capitalize">
              {t("still-need-help")}
            </h2>
            <p className="text-base leading-relaxed mb-4">{t("still-need-help-content")}</p>
            <a
              href="mailto:support@example.com"
              className="inline-block bg-main text-white font-Baloo font-semibold px-8 py-3 rounded-3xl hover:opacity-90 transition-opacity capitalize"
            >
              {t("contact-support")}
            </a>
          </div>

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/account"
              className="capitalize inline-block font-Baloo font-semibold text-lg hover:text-main transition-colors"
            >
              {t("back-to")}{" "}
              <span className="capitalize ms-2 bg-main px-3 py-1 rounded-full font-bold">
                {t("account")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
