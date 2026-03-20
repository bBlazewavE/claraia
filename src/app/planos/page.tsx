"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 497,
    yearlyPrice: 397,
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
    cta: "Começar Agora",
    ctaLink: "https://wa.me/5537984149509?text=Olá! Tenho interesse no plano Starter.",
  },
  {
    name: "Profissional",
    monthlyPrice: 1497,
    yearlyPrice: 1197,
    description: "Para empresas que precisam de automação completa",
    highlight: true,
    badge: "Mais Popular",
    features: [
      "Tudo do Starter, mais:",
      "Conversas ilimitadas",
      "Múltiplos fluxos de atendimento",
      "Integração com agenda/CRM",
      "Chatbot treinado nos seus dados",
      "Qualificação automática de leads",
      "Relatórios mensais",
      "Suporte prioritário (WhatsApp)",
    ],
    cta: "Falar com Consultor",
    ctaLink: "https://wa.me/5537984149509?text=Olá! Tenho interesse no plano Profissional.",
  },
  {
    name: "Enterprise",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "IA na sua infraestrutura. Seus dados nunca saem da empresa.",
    highlight: false,
    badge: "Máxima Privacidade",
    features: [
      "Tudo do Profissional, mais:",
      "IA instalada nos seus servidores",
      "Dados 100% privados (LGPD)",
      "Modelos de IA dedicados",
      "Integrações customizadas ilimitadas",
      "Treinamento da equipe incluso",
      "SLA com garantia de uptime",
      "Gerente de conta dedicado",
      "Suporte 24/7",
    ],
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
    a: "Sim! Você pode fazer upgrade ou downgrade a qualquer momento.",
  },
  {
    q: "Como funciona o chatbot no WhatsApp?",
    a: "Integramos um assistente inteligente ao seu WhatsApp Business. Ele responde automaticamente, entende linguagem natural e sabe quando transferir para um humano.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Nos planos Starter e Profissional, usamos provedores com certificações de segurança. No Enterprise, a IA roda 100% na sua infraestrutura.",
  },
];

export default function Planos() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      {/* Hero - clean, minimal like Claude */}
      <section className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary-900 mb-4 tracking-tight">
            Planos que crescem com seu negócio
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Comece pequeno, escale quando precisar. Todos os planos incluem setup e configuração gratuitos.
          </p>

          {/* Toggle - monthly/yearly */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                !yearly
                  ? "bg-white text-primary-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                yearly
                  ? "bg-white text-primary-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Anual
              <span className="ml-1.5 text-xs text-green-600 font-semibold">-20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <AnimateOnScroll key={i}>
                <div
                  className={`relative rounded-2xl flex flex-col h-full transition-all ${
                    plan.highlight
                      ? "bg-primary-900 text-white p-8 shadow-2xl shadow-primary-900/20 ring-1 ring-primary-900"
                      : "bg-white p-8 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  {plan.badge && (
                    <span className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${
                      plan.highlight
                        ? "bg-accent/20 text-accent"
                        : "bg-primary-900/5 text-primary-900"
                    }`}>
                      {plan.badge}
                    </span>
                  )}

                  <h3 className={`text-xl font-bold mb-2 ${
                    plan.highlight ? "text-white" : "text-primary-900"
                  }`}>
                    {plan.name}
                  </h3>

                  <p className={`text-sm mb-6 ${
                    plan.highlight ? "text-gray-300" : "text-gray-500"
                  }`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.monthlyPrice > 0 ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-4xl font-extrabold tracking-tight ${
                            plan.highlight ? "text-white" : "text-primary-900"
                          }`}>
                            R$ {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>
                          <span className={`text-sm ${
                            plan.highlight ? "text-gray-400" : "text-gray-500"
                          }`}>
                            /mês
                          </span>
                        </div>
                        {yearly && (
                          <p className={`text-xs mt-1 ${
                            plan.highlight ? "text-gray-400" : "text-gray-400"
                          }`}>
                            Cobrado anualmente (R$ {plan.yearlyPrice * 12}/ano)
                          </p>
                        )}
                      </>
                    ) : (
                      <div>
                        <span className={`text-3xl font-extrabold ${
                          plan.highlight ? "text-white" : "text-primary-900"
                        }`}>
                          Sob consulta
                        </span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <a
                    href={plan.ctaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all mb-8 ${
                      plan.highlight
                        ? "bg-white text-primary-900 hover:bg-gray-100"
                        : "bg-primary-900 text-white hover:bg-primary-800"
                    }`}
                  >
                    {plan.cta}
                  </a>

                  {/* Features */}
                  <ul className="space-y-3 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <svg
                          className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            plan.highlight ? "text-accent" : "text-accent"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${
                          plan.highlight ? "text-gray-200" : "text-gray-600"
                        }`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise banner */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-10 md:p-14 border border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">🔐</span>
                    <h2 className="text-2xl font-bold text-primary-900">
                      IA On-Premise
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Para empresas que lidam com dados sensíveis — saúde, jurídico, financeiro. 
                    Instalamos modelos de IA diretamente na sua infraestrutura. 
                    Seus dados nunca saem do seu ambiente.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      LGPD Compliant
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Zero dados externos
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs bg-white border border-gray-200 rounded-full px-3 py-1.5 text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      Performance dedicada
                    </span>
                  </div>
                </div>
                <a
                  href="https://wa.me/5537984149509?text=Olá! Gostaria de saber mais sobre IA on-premise."
                  className="flex-shrink-0 bg-primary-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-800 transition-colors"
                >
                  Falar com Especialista
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-primary-900 mb-10">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimateOnScroll key={i}>
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="font-semibold text-primary-900 mb-2 text-sm">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-gray-500 mb-4">Não sabe qual plano escolher?</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5537984149509?text=Olá! Gostaria de ajuda para escolher o plano ideal."
              className="bg-primary-900 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-primary-800 transition-colors text-sm"
            >
              Falar com a equipe
            </a>
            <Link
              href="/contato"
              className="border border-gray-200 hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-xl font-semibold transition-colors text-sm"
            >
              Enviar mensagem
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
