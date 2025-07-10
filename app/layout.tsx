import type React from "react";
import localFont from "next/font/local";
import "./globals.css";

const iaWriterMono = localFont({
  src: [
    {
      path: "../fonts/iAWriterMonoS-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/iAWriterMonoS-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/iAWriterMonoS-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Yves Ineichen",
  description: "Personal CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={iaWriterMono.className}>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
