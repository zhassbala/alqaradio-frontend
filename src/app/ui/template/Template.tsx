import type { Metadata } from "next";
import { Params } from "@/types";
import { Inter } from "next/font/google";

import Header from "@/app/ui/template/Header";

import "@/assets/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALQA Radio",
  description: "ALQA RADIOSY-ның сайты",
  icons: {
    icon: "/static/icon.svg",
  },
  keywords: [
    "Alqa radiosy",
    "Alqa radio",
    "alqaradio.kz",
    "Алка радио",
    "Алка радиосы",
    "Alqa",
    "Алка",
    "Алқа",
    "Алқа радиосы",
    "Алқа радио",
    "Алқа",
    "Алқарадио",
    "Алқарадиокз",
    "Радио",
    "ALQA",
    "ALQARadio",
    "ALQAradiokz",
  ],
  openGraph: {
    url: process.env.PUBLIC_URL,
    type: "website",
    images: "/static/icon.png",
    description: "ALQA RADIOSY-ның сайты",
    siteName: "ALQA Radio",
  },
};

export default function Template({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} bg-gray-light`}>
        <Header locale={params.lang}></Header>
        <main className="flex min-h-screen flex-col justify-start md:p-24 max-w-[1600px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
