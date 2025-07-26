import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ESG|Frame - 400 Agentes IA ESG | Compliance a Vantagem Competitiva em 30 Dias",
  description:
    "A primeira plataforma global com 400 agentes IA ESG especializados. Transforme compliance em vantagem competitiva em 30 dias. ROI 650-8000% primeiro ano.",
  keywords:
    "ESG, compliance, IA, agentes artificiais, sustentabilidade, AaaS, Agent as a Service, consultoria digital, GRI, SASB, TCFD",
  authors: [{ name: "ESG|Frame by F2W LLC" }],
  creator: "ESG|Frame",
  publisher: "F2W LLC",
  metadataBase: new URL("https://www.esgframe.com"),
  alternates: {
    canonical: "https://www.esgframe.com",
  },
  icons: {
    icon: [
      {
        url: "/images/esg-frame-symbol.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/esg-frame-symbol.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/esg-frame-symbol.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "ESG|Frame - 400 Agentes IA ESG | Compliance a Vantagem Competitiva",
    description:
      "Primeira arquitetura AaaS com 400 consultores digitais ESG 24/7. Transforme compliance em ROI de 650-8000% no primeiro ano.",
    url: "https://www.esgframe.com",
    siteName: "ESG|Frame",
    images: [
      {
        url: "/images/esg-frame-logo-full.png",
        width: 1200,
        height: 630,
        alt: "ESG|Frame - 400 Agentes IA ESG Especializados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ESG|Frame - 400 Agentes IA ESG | Compliance a Vantagem Competitiva",
    description: "Primeira arquitetura AaaS com 400 consultores digitais ESG 24/7. ROI 650-8000% primeiro ano.",
    images: ["/images/esg-frame-logo-full.png"],
    creator: "@EsgFrame",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0D4F3C" />
      </head>
      <body>{children}</body>
    </html>
  )
}
