import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Harun The Barber | Premium Grooming in Limburg',
  description: 'More than just a haircut. Experience premium barbering, precision fades, and expert beard grooming in Limburg. No appointment needed, walk-ins welcome.',
  openGraph: {
    "title": "Harun The Barber | Luxury Grooming",
    "description": "The premium grooming destination in Limburg. Walk-in today for your signature look.",
    "siteName": "Harun The Barber",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Harun The Barber",
    "description": "Premium grooming destination."
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
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
        <body className={`${publicSans.variable} antialiased`}>
          
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
