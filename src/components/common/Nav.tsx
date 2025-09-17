"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navItems = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Blogs", href: "/blogs" },
  { label: "Phòng trọ", href: "/phong-tro" },
  { label: "Homestay", href: "/homestay" },
  { label: "Chính sách", href: "/chinh-sach" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative">
      {/* Desktop menu */}
      <ul className="hidden md:flex flex-row gap-8 border-t border-b py-2 w-full justify-center bg-white">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="py-1 text-gray-700 font-bold uppercase cursor-pointer transition-color underline-animate"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile hamburger */}
      <div className="md:hidden flex justify-end">
        <button
          className="p-2 focus:outline-none transition-transform"
          onClick={() => setOpen(true)}
          aria-label="Mở menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        {/* Sidebar slide-in/out */}
        <div
          className={`absolute left-0 top-0 h-full w-64 bg-white shadow-lg flex flex-col border-r transform transition-transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="self-start ms-auto m-3 transition-transform"
            onClick={() => setOpen(false)}
            aria-label="Đóng menu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-3 px-6 py-6 border-t border-b">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-2 py-2 text-gray-800 font-medium text-base text-lg cursor-pointer transition-color underline-animate"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
