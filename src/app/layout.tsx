import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strides & Stories | Saroornagar Run Club",
  description:
    "Weekend social runs, coffee and meaningful conversations in Saroornagar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}