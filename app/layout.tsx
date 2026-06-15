import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CMesh | Open AI compute cluster",
  description:
    "CMesh is an open-source, decentralized-ready compute cluster for sharing machines and running AI workloads.",
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
