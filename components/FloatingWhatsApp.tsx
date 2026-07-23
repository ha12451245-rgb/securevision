import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/989121234567"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl transition duration-300 hover:scale-110"
    >
      <MessageCircle size={28} />

      <span className="hidden md:block font-bold">
        واتساپ
      </span>
    </a>
  );
}