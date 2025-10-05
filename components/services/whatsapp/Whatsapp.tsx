"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex justify-end items-end
                 sm:bottom-8 sm:right-8
                 xs:bottom-4 xs:right-4
                 max-h-[350px] sm:max-h-[300px] xs:max-h-[250px]"
    >
      <FloatingWhatsApp
        phoneNumber="+916309893721"
        accountName="XAYLICIOUSS"
        avatar="/company/icon.png"
        statusMessage="Typically replies within 1hr"
        chatMessage="Hello there! 🤝 How can we help?"
        placeholder="Type a message.."
        darkMode={false} // leave false, Tailwind will handle dark mode
        allowClickAway={true}
        allowEsc={false}
        notification={true}
        notificationDelay={2}
        notificationSound={true}
        notificationLoop={0}
        className="custom-whatsapp-chatbox
                   bg-white text-black dark:bg-gray-900 dark:text-white
                   rounded-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.18)]
                   overflow-hidden"
      />
    </div>
  );
};

export default Whatsapp;
