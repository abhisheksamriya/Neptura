"use client";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 right-3 z-[9999] animate-bounce">
      <div className="flex flex-col gap-2 justify-center items-center mr-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9394060136"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 transition-colors text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Call Button */}
        <a
          href="tel:9394060136"
          className="bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          <FaPhone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default StickyButtons;
