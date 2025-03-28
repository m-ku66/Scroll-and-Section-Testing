// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

export const metadata: Metadata = {
  title: "Scroll Test",
  description: "Testing scroll animations and section transitions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add a normal style tag to hide the cursor instead of styled-jsx */}
        <style>
          {`
            * {
              cursor: none !important;
            }
          `}
        </style>
      </head>
      <body className="h-screen">
        {/* Add custom cursor at the root level */}
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
