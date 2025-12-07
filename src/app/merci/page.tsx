import Link from "next/link";
import Image from "next/image";

export default function MerciPage() {
  return (
    <div className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-gray-100 px-6 text-center">
      <Image
        src="/icon.svg"
        alt="GoalAssist logo"
        width={90}
        height={90}
        className="mb-6 opacity-90"
      />

      <h1 className="text-4xl font-bold mb-4">Message envoyé ✔</h1>

      <p className="text-gray-300 max-w-md mb-8">
        Merci pour votre message !  
        Nous revenons vers vous dans l’heure.
      </p>

      <Link
        href="/"
        className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-xl shadow-lg transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
