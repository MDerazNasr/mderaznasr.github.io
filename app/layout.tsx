import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mderaznasr.github.io"),
  title: "Mohamed Deraz Nasr — ML Researcher & Systems Engineer",
  description:
    "Mohamed Deraz Nasr builds learning systems across world models, embodied AI, simulation, 3D reconstruction, and efficient inference.",
  keywords: [
    "Mohamed Deraz Nasr",
    "machine learning researcher",
    "world models",
    "embodied AI",
    "ML systems",
    "efficient inference",
  ],
  authors: [{ name: "Mohamed Deraz Nasr" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Mohamed Deraz Nasr — ML Researcher & Systems Engineer",
    description:
      "Research in world models, embodied AI, 3D systems, and efficient model inference.",
    url: "/",
    siteName: "Mohamed Deraz Nasr",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1677,
        height: 938,
        alt: "Mohamed Deraz Nasr — ML Researcher and Systems Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Deraz Nasr — ML Researcher & Systems Engineer",
    description:
      "Research in world models, embodied AI, 3D systems, and efficient model inference.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#121416" },
  ],
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
