import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const pop = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodio",
  description: "lorem4000 dolor sit amet, consectet ut",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pop.className}>{children}</body>
    </html>
  );
}
