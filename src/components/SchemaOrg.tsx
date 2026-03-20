export default function SchemaOrg() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ClaraIA",
    description: "Consultoria em Inteligência Artificial e tecnologia para empresas brasileiras. Integração de IA, chatbots inteligentes, MCP e automação de processos.",
    url: "https://claraialoja.com.br",
    telephone: "+5537984149509",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Brasil",
      addressCountry: "BR",
    },
    areaServed: "BR",
    priceRange: "$$",
    sameAs: [
      "https://linkedin.com/company/claraia-br",
      "https://instagram.com/claraia",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
