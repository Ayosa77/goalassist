import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="
        w-full py-3 px-6
        bg-transparent
        flex items-center justify-between
        z-50
      "
    >
      {/* LOGO + TEXTE COLLÉS */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer">

        <Image
          src="/icon.svg"
          alt="GoalAssist Logo"
          width={60}  // tu peux monter à 70/80 si tu veux
          height={60}
          className="opacity-95 hover:opacity-100 transition"
        />

        <span className="text-white text-2xl font-semibold tracking-tight">
          GoalAssist
        </span>

      </Link>

      <div className="flex items-center gap-8 text-gray-300 text-lg">
        <Link href="/tarifs" className="hover:text-white transition">
          Tarifs
        </Link>
        <Link href="/contact" className="hover:text-white transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
