import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Serviços de Consultoria em IA",
  description:
    "Conheça nossos serviços: integração de IA, chatbots inteligentes, MCP (Model Context Protocol), consultoria em arquitetura de software e automação de processos.",
  openGraph: {
    title: "Serviços — ClaraIA",
    description: "Soluções completas de Inteligência Artificial para empresas brasileiras.",
  },
};

const services = [
  {
    id: "integracao-ia",
    icon: "🧠",
    title: "Integração de Inteligência Artificial",
    description: [
      "Sua empresa já tem sistemas funcionando — ERPs, CRMs, plataformas de e-commerce, dashboards. O problema é que eles não se conversam de forma inteligente. É aí que entramos. Integramos modelos de IA diretamente nos seus sistemas existentes, sem precisar jogar tudo fora e começar do zero.",
      "Na prática, isso significa que seu sistema de vendas pode prever demanda automaticamente, seu atendimento pode categorizar e priorizar tickets sem intervenção humana, e seus relatórios podem gerar insights que antes levavam horas para um analista produzir.",
      "Trabalhamos com as principais plataformas de IA do mercado — OpenAI, Anthropic, Google — e escolhemos a melhor solução para cada caso. Nada de vender martelo pra quem precisa de chave de fenda.",
    ],
    benefits: [
      "Redução de até 60% no tempo de análise de dados",
      "Integração sem interrupção dos sistemas atuais",
      "ROI mensurável em até 90 dias",
      "Suporte contínuo pós-implementação",
    ],
  },
  {
    id: "chatbots",
    icon: "💬",
    title: "Desenvolvimento de Chatbots Inteligentes",
    description: [
      "Esqueça aqueles chatbots que só sabem dizer \"não entendi, por favor reformule sua pergunta\". Desenvolvemos chatbots que realmente compreendem o contexto da conversa, acessam dados relevantes em tempo real e resolvem problemas dos seus clientes de verdade.",
      "Nossos chatbots são construídos com modelos de linguagem de última geração e treinados com dados específicos do seu negócio. Eles atendem pelo WhatsApp, pelo site, por aplicativo — onde seu cliente estiver. E quando o assunto exige um humano, a transição é suave e contextualizada.",
      "O resultado? Atendimento 24/7 que não deixa ninguém esperando, redução drástica nos custos de suporte e clientes mais satisfeitos. Tudo isso sem aquela sensação de estar falando com um robô.",
    ],
    benefits: [
      "Atendimento 24 horas, 7 dias por semana",
      "Redução de até 70% no volume de tickets do suporte",
      "Integração com WhatsApp, site e aplicativos",
      "Escalação inteligente para atendentes humanos",
      "Relatórios detalhados de interações e satisfação",
    ],
  },
  {
    id: "mcp",
    icon: "🔗",
    title: "Integração MCP (Model Context Protocol)",
    description: [
      "O MCP — Model Context Protocol — é um padrão aberto que permite que modelos de IA se conectem diretamente às ferramentas e dados da sua empresa. Pense nele como uma \"tomada universal\" para inteligência artificial: em vez de cada IA precisar de uma integração personalizada, o MCP cria um canal padronizado de comunicação.",
      "Na prática, isso significa que um modelo de IA pode acessar seu banco de dados, consultar APIs internas, executar ações no seu CRM ou ler documentos do Google Drive — tudo de forma segura e controlada. É como dar ao assistente de IA um crachá de acesso limitado à sua empresa.",
      "Somos pioneiros na implementação de MCP no Brasil. Ajudamos sua empresa a definir quais dados e ferramentas a IA pode acessar, configuramos os servidores MCP e garantimos que tudo funcione com segurança e performance. O resultado é uma IA que conhece seu negócio de verdade, não apenas responde perguntas genéricas.",
    ],
    benefits: [
      "IA com acesso real aos dados do seu negócio",
      "Protocolo padronizado e aberto (sem vendor lock-in)",
      "Controle granular de permissões e acessos",
      "Compatível com os principais modelos de IA do mercado",
      "Implementação segura com auditoria completa",
    ],
  },
  {
    id: "arquitetura",
    icon: "🏗️",
    title: "Consultoria em Arquitetura de Software",
    description: [
      "Antes de implementar qualquer solução de IA, sua infraestrutura precisa estar preparada. De nada adianta ter o melhor modelo de linguagem do mundo se ele roda num servidor que cai toda sexta-feira ou se seus dados estão espalhados em planilhas que ninguém encontra.",
      "Nossa consultoria em arquitetura de software avalia sua infraestrutura atual, identifica gargalos e desenha a solução ideal para o seu momento. Trabalhamos com arquiteturas em nuvem (AWS, GCP, Azure), microsserviços, pipelines de dados e tudo que sua empresa precisa para escalar com confiança.",
      "Não importa se você está começando do zero ou precisa modernizar um sistema legado. Nosso time tem experiência em projetos de streaming de vídeo em larga escala, infraestrutura cloud de alta disponibilidade e sistemas distribuídos — o tipo de desafio que exige engenharia séria, não gambiarras.",
    ],
    benefits: [
      "Análise completa da infraestrutura atual",
      "Projeto de arquitetura escalável e resiliente",
      "Migração para nuvem com downtime mínimo",
      "Documentação técnica detalhada",
      "Acompanhamento na implementação",
    ],
  },
  {
    id: "automacao",
    icon: "⚡",
    title: "Automação de Processos com IA",
    description: [
      "Quantas horas por semana sua equipe gasta com tarefas repetitivas? Copiar dados de um sistema para outro, gerar relatórios manuais, classificar e-mails, validar documentos... São horas que poderiam ser investidas em trabalho estratégico e criativo.",
      "Usamos IA para automatizar esses processos de ponta a ponta. Não estamos falando de macros simples ou scripts básicos — são automações inteligentes que aprendem com os padrões do seu negócio e se adaptam a exceções sem precisar de intervenção humana.",
      "Desde o processamento automático de notas fiscais até a análise de contratos, passando pela geração de relatórios gerenciais e triagem de leads — identificamos os processos que mais consomem tempo na sua operação e transformamos horas em minutos.",
    ],
    benefits: [
      "Economia de até 200+ horas por mês em tarefas operacionais",
      "Redução de erros humanos em processos críticos",
      "Automações que aprendem e melhoram com o tempo",
      "Integração com ferramentas que sua equipe já usa",
      "Dashboard de monitoramento em tempo real",
    ],
  },
];

export default function Servicos() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Soluções de IA sob medida para cada etapa da transformação digital do seu negócio.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimateOnScroll>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{s.icon}</span>
                    <h2 className="text-3xl font-bold text-primary-900">{s.title}</h2>
                  </div>
                  {s.description.map((p, j) => (
                    <p key={j} className="text-gray-600 mb-4 text-lg leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <div>
                  <div className="bg-primary-50 rounded-xl p-8 sticky top-24">
                    <h3 className="font-bold text-primary-900 mb-4 text-lg">Benefícios</h3>
                    <ul className="space-y-3">
                      {s.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700">
                          <span className="text-accent mt-1">✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contato"
                      className="block mt-6 bg-accent hover:bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>
      ))}
    </>
  );
}
