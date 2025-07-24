import type { Metadata } from "next";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/main.css";
import "../../public/assets/css/landings.css";
import "../../public/assets/css/rules.css";
import "../../public/assets/css/normalize.css";

export const metadata: Metadata = {
  title: "Reda - Web Developer Portfolio",
  description: "Portfolio of Merahi Mohammed Reda, Full Stack Web Developer.",
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
