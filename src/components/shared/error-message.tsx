import { XCircle } from "lucide-react";
import { FormMessage } from "../ui/form";

export default function ErrorMessage({ message }: { message: string | undefined }) {
  if (!message) return null;

  return (
    <FormMessage className="relative my-4 bg-main text-white py-2 border rounded-4xl w-full font-normal text-sm text-center">
      <p className="-top-2 left-1/2 absolute bg-main rounded-full -translate-x-1/2 transform">
        <XCircle className="w-4 h-4" />
      </p>
      {message}
    </FormMessage>
  );
}
