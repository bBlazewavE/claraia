"use client";

import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const plans = [
  {
    name: "Starter",
    price: "R$ 497",
    period: "/mês",
    description: "Para pequenas empresas que querem começar com IA",
    highlight: false,
    features: [
      "Chatbot WhatsApp inteligente",
      "Até 500 conversas/mês",
      "Respostas automáticas 24/7",
      "1 fluxo de atendimento",
      "Painel de métricas básico",
      "Suporte por e-mail",
      "Setup incluso",
    ],
    notIncluded: [
      "Integração com CRM/ERP",
      "Múltiplos fluxos",
      "IA on-premise",
    ],
    cta: "Começar Agora",
    ctaLink: "https://wa.me/5537984149509?text=Olá! Tenho interesse no plano Starter.",
  },
  {
    name: "Profissional",
    price: "R$ 1.497",
    period: "/mês",
    description: "Para empresas que precisam de automação completa",
    highlight: true,
    badge: "Mais Popular",
    features: [
      "Tudo do plano Starter",
      "Conversas ilimitadas",
      "Múltiplos fluxos de atendimento",
      "Integração com agenda/CRM",
      "Chatbot treinado nos seus dados",
      "Painel de métricas avançado",
      "Qualificação automática de leads",
      "Suporte prioritário (WhatsApp)",
      "Relatórios mensais",
    ],
    notIncluded: [
      "IA on-premise",
    ],
    cta: "Falar com Consultor",
    ctaLink: "https://wa.me/5537984149509?text=Olá! Tenho interesse no plano Profissional.",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    period: "",
    description: "Para empresas que exigem privacidade total de dados",
    highlight: false,
    badge: "Máxima Segurança",
    features: [
      "Tudo do plano Profissional",
      "IA instalada na sua infraestrutura",
      "Seus dados nunca saem da empresa",
      "Conformidade total com LGPD",
      "Modelos de IA dedicados",
      "Integrações customizadas ilimitadas",
      "Treinamento da equipe incluso",
      "SLA com garantia de uptime",
      "Gerente de conta dedicado",
      "Suporte 24/7",
    ],
    notIncluded: [],
    cta: "Solicitar Proposta",
    ctaLink: "https://wa.me/5537984149509?text=Olá! Tenho interesse no plano Enterprise com IA on-premise.",
  },
];

const faqs = [
  {
    q: "Quanto tempo leva para implementar?",
    a: "O plano Starter fica pronto em até 5 dias úteis. O Profissional em 10-15 dias. O Enterprise depende da complexidade e infraestrutura.",
  },
  {
    q: "Preciso ter conhecimento técnico?",
    a: "Não. Nós cuidamos de toda a parte técnica. Você só precisa nos dizer como quer que o atendimento funcione.",
  },
  {
    q: "O que significa 'IA on-premise'?",
    a: "Significa que instalamos a inteligência artificial diretamente nos servidores da sua empresa. Seus dados nunca passam por servidores externos — tudo roda internamente, com total privacidade.",
  },
  {
    q: "Posso trocar de plano depois?",
    a: "Sim! Você pode fazer upgrade ou downgrade a qualquer momento. A mudança entra em vigor no próximo ciclo de cobrança.",
  },
  {
    q: "Como funciona o chatbot no WhatsApp?",
    a: "Integramos um assistente inteligente ao seu WhatsApp Business. Ele responde automaticamente, entende linguagem natural e sabe quando transferir para um humano.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Nos planos Starter e Profissional, usamos provedores de IA com certificações de segurança. No plano Enterprise, a IA roda 100% na sua infraestrutura.",
  },
];

export default function Planos() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha o plano ideal para automatizar seu atendimento com inteligência artificial.
            Todos incluem setup e configuração.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={i}>
                <div
                  className={`relative rounded-2xl p-8 flex flex-col h-full ${
                    plan.highlight
                      ? "bg-white border-2 border-accent shadow-xl shadow-accent/10 scale-[1.02]"
                      : "bg-white border border-gray-200 shadow-sm"
                  }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold ${
                      plan.highlight
                        ? "bg-accent text-white"
                        : "bg-primary-900 text-white"
                    }`}>
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-500 text-sm">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <span className="text-4xl font-extrabold text-primary-900">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f, j) => (
                      <li key={`no-${j}`} className="flex items-start gap-3 opacity-40">
                        <span className="text-gray-400 mt-0.5 flex-shrink-0">✗</span>
                        <span className="text-gray-500 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3.5 rounded-xl font-semibold transition-all ${
                      plan.highlight
                        ? "bg-accent hover:bg-blue-600 text-white hover:shadow-lg hover:shadow-accent/25"
                        : "bg-gray-100 hover:bg-gray-200 text-primary-900"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span>🔒</span> Conformidade LGPD
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span> Setup em até 5 dias
            </div>
            <div className="flex items-center gap-2">
              <span>🔄</span> Cancele quando quiser
            </div>
            <div className="flex items-center gap-2">
              <span>🇧🇷</span> Suporte em português
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise highlight */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-10 md:p-14 text-white">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    🔐 IA On-Premise: Seus Dados Nunca Saem da Empresa
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Para empresas que lidam com dados sensíveis — saúde, jurídico, financeiro — oferecemos 
                    instalação de modelos de IA diretamente na sua infraestrutura. Zero dados enviados para 
                    servidores externos. Privacidade total.
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm mb-6">
                    <li>✓ Modelos de IA rodando nos seus servidores</li>
                    <li>✓ 100% compatível com LGPD e regulamentações de dados</li>
                    <li>✓ Performance dedicada, sem limites de uso</li>
                    <li>✓ Ideal para clínicas, escritórios de advocacia e financeiras</li>
                  </ul>
                  <a
                    href="https://wa.me/5537984149509?text=Olá! Gostaria de saber mais sobre IA on-premise."
                    className="inline-block bg-white text-primary-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Saber Mais
                  </a>
                </div>
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-6xl md:text-7xl">🏢</span>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-center text-primary-900 mb-12">
              Perguntas Frequentes
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h3 className="font-semibold text-primary-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Não sabe qual plano escolher?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Agende uma conversa gratuita de 15 minutos. Vamos entender seu negócio e recomendar a melhor solução.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5537984149509?text=Olá! Gostaria de ajuda para escolher o plano ideal."
                className="bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Falar pelo WhatsApp
              </a>
              <Link
                href="/contato"
                className="border border-gray-300 hover:bg-gray-50 text-primary-900 px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
              >
                Enviar Mensagem
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
