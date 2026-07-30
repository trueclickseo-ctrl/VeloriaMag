import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components/SharedComponents";

export const metadata: Metadata = {
  title: "VeloriaMag | Premium Topical Magazine Portal",
  description: "A premium magazine focusing on semantic search, health information, beauty regimens, biographies, and theology interpretations.",
  metadataBase: new URL("https://veloriamag.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-gray-50/50 font-sans text-gray-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
