import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'FNZ Marketing | Premium Custom Websites for Local Businesses',
  description: 'FNZ Marketing crafts high-end, custom websites for local businesses, blending modern luxury with digital agency polish to elevate your online presence and achieve your business goals.',
  keywords: ["FNZ Marketing, custom websites, local businesses, digital agency, premium web design, SEO, website development, online presence, marketing agency, web design"],
  openGraph: {
    "title": "FNZ Marketing | Premium Custom Websites for Local Businesses",
    "description": "FNZ Marketing crafts high-end, custom websites for local businesses, blending modern luxury with digital agency polish to elevate your online presence and achieve your business goals.",
    "url": "https://www.fnzmarketing.com",
    "siteName": "FNZ Marketing",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/cyber-intelligence-secure-operations-center-with-usa-flag-big-screen_482257-105777.jpg",
        "alt": "Sleek desktop and tablet showcasing a premium website design"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "FNZ Marketing | Premium Custom Websites for Local Businesses",
    "description": "FNZ Marketing crafts high-end, custom websites for local businesses, blending modern luxury with digital agency polish to elevate your online presence and achieve your business goals.",
    "images": [
      "http://img.b2bpic.net/free-photo/cyber-intelligence-secure-operations-center-with-usa-flag-big-screen_482257-105777.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
