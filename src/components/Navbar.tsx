"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full py-3 px-6 bg-transparent flex items-center justify-between z-50 fixed top-0 left-0 backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/icon.svg"
          alt="GoalAssist"
          width={38}
          height={38}
          className="drop-shadow-lg"
        />
        <span className="text-white font-semibold text-lg tracking-tight">
          GoalAssist
        </span>
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/tarifs" className="text-gray-200 hover:text-white transition text-sm">
          Tarifs
        </Link>
        <Link href="/contact" className="text-gray-200 hover:text-white transition text-sm">
          Contact
        </Link>
      </div>
    </nav>
  );
}
