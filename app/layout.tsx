import type { Metadata } from "next";
import LocacFont from "next/font/local";
import "./globals.css";

const inter = LocacFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = LocacFont({
  src: "./fonts/SpaceGroteskVF.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description:
    "A commnity-driven platform for asking and anwering programming questions. Get help, share knowledge with developers from around the world. Explore a wide range of topics, from web development to data science, and connect with like-minded individuals.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        <h1 className="text-4xl">Welcome to course</h1>
        {children}
      </body>
    </html>
  );
}
