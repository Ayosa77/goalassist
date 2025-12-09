import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "GoalAssist – Assistance premium football",
    template: "%s | GoalAssist",
  },
  description:
    "Installation, optimisation et aide premium pour profiter du football sans complications.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "football",
    "assistance foot",
    "goalassist",
    "service football premium",
  ],
  openGraph: {
    title: "GoalAssist – Assistance premium football",
    description:
      "Service premium d’installation, optimisation et aide pour profiter du football sans complications.",
    url: "https://goalassist.fr",
    siteName: "GoalAssist",
    type: "website",
    images: [
      {
        url: "/favicon.svg",
        width: 512,
        height: 512,
        alt: "GoalAssist Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "GoalAssist – Assistance premium football",
    description:
      "Installation, optimisation et aide premium pour profiter du football sans complications.",
    images: ["/favicon.svg"],
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
        {/* Script PayPal chargé une seule fois (optimisé) */}
        <script
          src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&components=buttons,hosted-fields&currency=EUR`}
          data-sdk-integration-source="nextjs"
          async
        ></script>

        {/* Meta supplémentaires */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="GoalAssist" />
      </head>

      <body className="bg-slate-950 text-gray-100 antialiased">
        {children}
      </body>
    </html>
  );
}
