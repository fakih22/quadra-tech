import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Quadratech - Solusi Teknologi Enterprise",
  description: "Partner teknologi terpercaya untuk transformasi digital. Kami merancang dan mengembangkan solusi enterprise yang skalabel dan aman untuk mempercepat pertumbuhan bisnis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.className} antialiased text-black bg-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
