"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const showAnim = gsap
        .from(headerRef.current, {
          yPercent: -100,
          paused: true,
          duration: 0.2,
        })
        .progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const totalItems = 3;

  return (
    <header
      ref={headerRef}
      className="main-tool-bar fixed left-0 right-0 top-0 z-50 w-full bg-transparent backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-white/30 text-xs tracking-widest">
            XS
          </div>
          <span className="font-serif text-sm tracking-[0.2em]">
            XAYLICIOUSS
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm tracking-wide md:flex">
          <Link className="opacity-90 hover:opacity-100" href="/">
            Home
          </Link>
          <Link className="opacity-90 hover:opacity-100" href="#techniques">
            Desserts
          </Link>
          <Link className="opacity-90 hover:opacity-100" href="/about">
            About Us
          </Link>
          <Link className="opacity-90 hover:opacity-100" href="/gifts">
            Gifts
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <button
            // onClick={handleDrawerOpen}
            aria-label="Cart"
            className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 sm:h-10 sm:w-10"
          >
            <AiOutlineShoppingCart className="text-lg text-white" />

            {/* Cart Count Badge */}
            {totalItems  && (
              <span
            className="absolute -top-0 -right-0 flex items-center justify-center h-4 w-4
                rounded-full bg-red-600 text-xs font-bold text-white"
          >
            {totalItems}
          </span>
            )}
          </button>

          <button
            aria-label="Account"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus:ring-2 focus:ring-white/40 sm:h-10 sm:w-10"
          >
            <CgProfile className="text-lg text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
