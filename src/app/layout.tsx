import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strides & Stories",
  description: "Stories, journeys, and experiences.",
  metadataBase: new URL("https://strides-and-stories.vercel.app"),

  openGraph: {
    title: "Strides & Stories",
    description: "Stories, journeys, and experiences.",
    url: "https://strides-and-stories.vercel.app",
    siteName: "Strides & Stories",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Strides & Stories",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Strides & Stories",
    description: "Stories, journeys, and experiences.",
    images: ["/og-image.png"],
  },
};