"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const images = [
    { id: 1, image: "/home/items-flying.png" },
    { id: 2, image: "/home/wit-choclate.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
      y: 20,
    },
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      y: -20,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={images[activeIndex].id}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }} // floating effect
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-full w-full"
          >
            <Image
              src={images[activeIndex].image}
              alt="Hero Background"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Text at Top */}
      <div className="relative z-10 flex flex-col items-center pb-10 ">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white text-sm tracking-[0.4em] uppercase mb-2"
        >
          Sugar Rush
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-4xl md:text-7xl font-serif tracking-widest text-center"
        >
          BAKED TO BLISS
        </motion.h1>
      </div>
    </section>
  );
}
