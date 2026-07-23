"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <button
      onClick={scrollTop}
      className="fixed bottom-6 left-6 z-50 bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="بازگشت به بالا"
    >
      <ChevronUp size={24} />
    </button>
  );
}