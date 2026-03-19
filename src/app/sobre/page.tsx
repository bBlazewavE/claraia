import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre a ClaraIA",
  description:
    "Conheça a ClaraIA: consultoria brasileira especializada em Inteligência Artificial, fundada por engenheiros com mais de 8 anos de experiência em software e cloud.",
  openGraph: {
    title: "Sobre — ClaraIA",
    description: "Nossa história, missão e por que o Brasil precisa de consultoria local em IA.",
  },
};

const values = [
  { icon: "🔍", title: "Transparência", desc: "Explicamos cada decisão técnica em linguagem que você entende. Sem jargões desnecessários." },
  { icon: "🤝", title: "Parceria", desc: "Não somos fornecedores — somos parceiros. Seu sucesso é o nosso sucesso." },
  { icon: "🎯", title: "Pragmatismo", desc: "Tecnologia tem que resolver problemas reais. Se não gera resultado, não recomendamos." },
  { icon: "🔒", title: "Segurança", desc: "Seus dados são sagrados. Implementamos com as melhores práticas de segurança e privacidade." },
];

export default function Sobre() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Sobre a ClaraIA</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Inteligência artificial acessível, prática e feita para o Brasil.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-6">Nossa História</h2>
                <p className="text-gray-600 text-lg mb-4">
                  A ClaraIA nasceu de uma frustração: por que as melhores soluções de IA do mundo
                  pareciam inacessíveis para empresas brasileiras? Por que a maioria das consultorias
                  vendia tecnologia genérica sem entender a realidade local?
                </p>
                <p className="text-gray-600 text-lg mb-4">
                  Fundada por um engenheiro de software com mais de 8 anos de experiência em Python,
                  infraestrutura cloud e tecnologia de streaming de vídeo em larga escala, a ClaraIA
                  surgiu com um propósito claro: tornar a inteligência artificial acessível, prática e
                  relevante para empresas de todos os tamanhos no Brasil.
                </p>
                <p className="text-gray-600 text-lg">
                  Nosso nome diz tudo: <strong>Clara + IA</strong>. Acreditamos que inteligência artificial
                  não precisa ser um mistério. Ela precisa ser clara — nos objetivos, na implementação e
                  nos resultados.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-blue-50 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-8xl block mb-4">🚀</span>
                  <p className="text-primary-900 font-semibold text-lg">
                    Transformando o mercado brasileiro com IA desde Minas Gerais
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Nossa Missão</h2>
              <p className="text-xl text-gray-600">
                Democratizar o acesso à inteligência artificial para empresas brasileiras,
                entregando soluções que geram impacto real no negócio — com transparência,
                qualidade e respeito pelo contexto local.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-xl p-8 shadow-sm text-center h-full">
                  <span className="text-4xl mb-4 block">{v.icon}</span>
                  <h3 className="font-bold text-primary-900 mb-2 text-lg">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brazil needs local */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-primary-900 mb-6 text-center">
              Por Que o Brasil Precisa de Consultoria Local em IA?
            </h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                O Brasil é um dos mercados que mais cresce em adoção de tecnologia no mundo. Mas quando
                se trata de IA, a maioria das soluções disponíveis vem de fora — projetadas para a
                realidade americana ou europeia, com preços em dólar e suporte em inglês.
              </p>
              <p>
                Empresas brasileiras enfrentam desafios únicos: regulamentações como a LGPD, integração
                com sistemas de pagamento locais (PIX, boleto), comunicação via WhatsApp como canal
                principal, e a necessidade de entender o português brasileiro — com todas as suas gírias,
                regionalismos e nuances culturais.
              </p>
              <p>
                A ClaraIA entende tudo isso porque vive tudo isso. Estamos em Minas Gerais, atendemos
                em português, cobramos em real e construímos soluções que funcionam para o mercado
                brasileiro. Simples assim.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-accent to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-6">Vamos Conversar?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Queremos conhecer sua empresa e mostrar como a IA pode fazer a diferença no seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Entrar em Contato
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
