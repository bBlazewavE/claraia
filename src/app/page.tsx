import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    icon: "🧠",
    title: "Integração de Inteligência Artificial",
    desc: "Incorporamos IA nos seus sistemas existentes para automatizar decisões, análises e operações do dia a dia.",
  },
  {
    icon: "💬",
    title: "Desenvolvimento de Chatbots Inteligentes",
    desc: "Chatbots que realmente entendem seus clientes e resolvem problemas — não apenas respondem com scripts prontos.",
  },
  {
    icon: "🔗",
    title: "Integração MCP (Model Context Protocol)",
    desc: "Conectamos modelos de IA ao contexto real da sua empresa usando o protocolo MCP, para respostas mais precisas.",
  },
  {
    icon: "🏗️",
    title: "Consultoria em Arquitetura de Software",
    desc: "Projetamos a infraestrutura certa para escalar sua empresa com segurança e performance.",
  },
  {
    icon: "⚡",
    title: "Automação de Processos com IA",
    desc: "Eliminamos tarefas repetitivas e liberamos sua equipe para o que realmente importa.",
  },
];

const differentiators = [
  {
    icon: "🎯",
    title: "Expertise Real",
    desc: "Mais de 8 anos de experiência em engenharia de software, cloud e IA aplicada a negócios reais.",
  },
  {
    icon: "🇧🇷",
    title: "Presença Local",
    desc: "Entendemos o mercado brasileiro, os desafios regulatórios e a cultura de negócios do país.",
  },
  {
    icon: "📈",
    title: "Foco em Resultados",
    desc: "Não vendemos tecnologia pela tecnologia. Cada projeto é desenhado para gerar ROI mensurável.",
  },
];

const testimonials = [
  {
    quote: "A ClaraIA transformou nosso atendimento ao cliente. O chatbot que desenvolveram reduziu nosso tempo de resposta em 70%.",
    name: "Marina Silva",
    role: "Diretora de Operações, TechBR",
  },
  {
    quote: "Finalmente encontramos uma consultoria que fala a nossa língua — tanto no português quanto na tecnologia.",
    name: "Carlos Oliveira",
    role: "CEO, Inova Logística",
  },
  {
    quote: "A integração de IA nos nossos processos internos economizou mais de 200 horas por mês da nossa equipe.",
    name: "Ana Beatriz Costa",
    role: "CTO, FinanceiroPlus",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTJ2LTZoMnptMC0xMHY2aC0ydi02aDJ6bTAtMTB2Nmgt MnYtNmgyek0yNiAzNHY2aC0ydi02aDJ6bTAtMTB2NmgtMnYtNmgyek0yNiAxNHY2aC0ydi02aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Inteligência Artificial{" "}
              <span className="text-accent">Clara</span> para o Seu Negócio
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl">
              Ajudamos empresas brasileiras a integrar IA de forma estratégica —
              com chatbots inteligentes, automação de processos e consultoria
              especializada que gera resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 text-center"
              >
                Fale Conosco
              </Link>
              <Link
                href="/servicos"
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
                O Que Fazemos
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Soluções de Inteligência Artificial pensadas para a realidade das empresas brasileiras.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full">
                  <span className="text-4xl mb-4 block">{s.icon}</span>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why ClaraIA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-900 mb-4">
                Por Que a ClaraIA?
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <AnimateOnScroll key={i}>
                <div className="text-center p-8">
                  <span className="text-5xl mb-4 block">{d.icon}</span>
                  <h3 className="text-xl font-bold text-primary-900 mb-3">{d.title}</h3>
                  <p className="text-gray-600">{d.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
              O Que Nossos Clientes Dizem
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  <p className="text-gray-200 mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto Para Transformar Seu Negócio com IA?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Agende uma conversa gratuita e descubra como a inteligência artificial pode
              impulsionar sua empresa.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Agendar Conversa Gratuita
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
