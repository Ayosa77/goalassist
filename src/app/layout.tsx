import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoalAssist – Assistance premium football",
  description: "Installation, optimisation et aide premium pour profiter du football sans complications.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Script PayPal — Chargé une seule fois */}
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&components=buttons,hosted-fields&currency=EUR`}
          async
        ></script>
      </head>

      <body className="bg-slate-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
