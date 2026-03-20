import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaOrg from "@/components/SchemaOrg";

export const metadata: Metadata = {
  title: {
    default: "ClaraIA — Consultoria em Inteligência Artificial | Brasil",
    template: "%s | ClaraIA",
  },
  description:
    "Consultoria especializada em Inteligência Artificial para empresas brasileiras. Integração de IA, chatbots inteligentes, MCP, automação de processos e arquitetura de software.",
  keywords: [
    "consultoria inteligência artificial brasil",
    "consultoria IA",
    "integração IA empresas",
    "chatbot inteligente",
    "automação IA",
    "MCP model context protocol",
  ],
  metadataBase: new URL("https://claraialoja.com.br"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://claraialoja.com.br",
    siteName: "ClaraIA",
    title: "ClaraIA — Consultoria em Inteligência Artificial",
    description:
      "Transformamos empresas brasileiras com soluções de IA sob medida. Chatbots, automação, integração e consultoria.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://claraialoja.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <SchemaOrg />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
