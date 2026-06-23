import type { Metadata } from "next";
import "./globals.css";

import I18nProvider from "@/components/I18nProvider";

export const metadata: Metadata = {
  title: "VIVOST FEMIDA | Адвокатское бюро",
  description:
    "Профессиональная юридическая помощь. Гражданское, уголовное, международное и коммерческое право.",

  keywords: [
    "адвокат",
    "юрист",
    "Ташкент",
    "адвокатское бюро",
    "международное право",
  ],

  openGraph: {
    title: "VIVOST FEMIDA",
    description:
      "Профессиональная юридическая защита ваших интересов",

    images: ["/ogimg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
        </body>
    </html>
  );
}

