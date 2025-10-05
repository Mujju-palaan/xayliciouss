"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const formatSegment = (segment: string): string =>
  segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) return null; // hide breadcrumb on home page

  const items = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { label: formatSegment(segment), href };
  });

  return (
    <nav aria-label="Breadcrumb ">
      <ol className="pl-8 flex items-center whitespace-nowrap gap-x-2">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="flex items-center text-sm text-gray-500 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500"
          >
            <svg
              className="shrink-0 me-2 size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
          <svg
            className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500"
                  >
                    {item.label}
                  </Link>
                  <svg
                    className="shrink-0 mx-2 size-4 text-gray-400 dark:text-neutral-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </>
              ) : (
                <span className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
