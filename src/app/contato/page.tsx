"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  "Integração de Inteligência Artificial",
  "Desenvolvimento de Chatbots Inteligentes",
  "Integração MCP (Model Context Protocol)",
  "Consultoria em Arquitetura de Software",
  "Automação de Processos com IA",
  "Gestão e Modernização de Software",
  "Outro",
];

const countryCodes = [
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+1", flag: "🇺🇸", name: "EUA" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+57", flag: "🇨🇴", name: "Colômbia" },
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+598", flag: "🇺🇾", name: "Uruguai" },
  { code: "+595", flag: "🇵🇾", name: "Paraguai" },
  { code: "+44", flag: "🇬🇧", name: "Reino Unido" },
  { code: "+49", flag: "🇩🇪", name: "Alemanha" },
  { code: "+33", flag: "🇫🇷", name: "França" },
  { code: "+34", flag: "🇪🇸", name: "Espanha" },
  { code: "+39", flag: "🇮🇹", name: "Itália" },
  { code: "+91", flag: "🇮🇳", name: "Índia" },
];

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [countryCode, setCountryCode] = useState("+55");

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Fale Conosco</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Pronto para dar o próximo passo? Entre em contato e vamos conversar sobre como a IA
            pode transformar seu negócio.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form - takes 3 columns */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                {submitted ? (
                  <div className="bg-white border border-green-200 rounded-2xl p-12 text-center shadow-sm">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl">✅</span>
                    </div>
                    <h2 className="text-2xl font-bold text-green-800 mb-3">Mensagem Enviada!</h2>
                    <p className="text-green-700 mb-6">
                      Recebemos sua mensagem e entraremos em contato em até 24 horas.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-accent hover:underline font-medium"
                    >
                      Enviar outra mensagem
                    </button>
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                    <h2 className="text-2xl font-bold text-primary-900 mb-2">Envie sua mensagem</h2>
                    <p className="text-gray-500 text-sm mb-8">Campos com * são obrigatórios</p>

                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        setSending(true);
                        const form = e.currentTarget;
                        const data = new FormData(form);
                        // Combine country code with phone
                        const phone = data.get("phone_number");
                        if (phone) {
                          data.set("phone", `${countryCode} ${phone}`);
                        }
                        data.delete("phone_number");
                        try {
                          await fetch("https://formspree.io/f/mbdzbzoo", {
                            method: "POST",
                            body: data,
                            headers: { Accept: "application/json" },
                          });
                          setSubmitted(true);
                        } catch {
                          alert("Erro ao enviar. Tente novamente.");
                        } finally {
                          setSending(false);
                        }
                      }}
                      className="space-y-5"
                    >
                      {/* Honeypot */}
                      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

                      {/* Name & Email row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                            Nome Completo *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                            placeholder="seu@email.com.br"
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                          placeholder="Nome da sua empresa (opcional)"
                        />
                      </div>

                      {/* Phone with country code */}
                      <div>
                        <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Telefone / WhatsApp
                        </label>
                        <div className="flex gap-2">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-32 px-3 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white text-sm"
                          >
                            {countryCodes.map((c) => (
                              <option key={c.code} value={c.code}>
                                {c.flag} {c.code}
                              </option>
                            ))}
                          </select>
                          <input
                            type="tel"
                            id="phone_number"
                            name="phone_number"
                            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                            placeholder="(37) 98414-9509"
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1.5">Opcional — para contato mais rápido</p>
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Serviço de Interesse *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all bg-gray-50 hover:bg-white"
                        >
                          <option value="">Selecione um serviço</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Mensagem *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all resize-none bg-gray-50 hover:bg-white"
                          placeholder="Conte-nos sobre seu projeto ou necessidade..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-accent hover:bg-blue-600 disabled:bg-blue-400 text-white py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                      >
                        {sending ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Enviando...
                          </>
                        ) : (
                          "Enviar Mensagem"
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </AnimateOnScroll>
            </div>

            {/* Sidebar - takes 2 columns */}
            <div className="lg:col-span-2">
              <AnimateOnScroll>
                <div className="space-y-6 lg:sticky lg:top-24">
                  {/* Contact cards */}
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-xl font-bold text-primary-900 mb-6">Contato Direto</h2>
                    <div className="space-y-5">
                      <a href="https://wa.me/5537984149509" className="flex items-center gap-4 p-3 rounded-xl hover:bg-green-50 transition-colors group">
                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="text-2xl">💬</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">WhatsApp</p>
                          <p className="text-accent text-sm">+55 (37) 98414-9509</p>
                        </div>
                      </a>
                      <a href="mailto:contato@claraialoja.com.br" className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="text-2xl">✉️</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">E-mail</p>
                          <p className="text-accent text-sm">contato@claraialoja.com.br</p>
                        </div>
                      </a>
                      <a href="https://linkedin.com/company/claraia-br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                          <span className="text-2xl">💼</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">LinkedIn</p>
                          <p className="text-accent text-sm">ClaraIA</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="bg-gradient-to-br from-accent/5 to-blue-50 rounded-2xl border border-accent/10 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">⚡</span>
                      <h3 className="font-bold text-primary-900">Resposta Rápida</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Respondemos todas as mensagens em até <strong>24 horas</strong>. Para assuntos urgentes, 
                      use o WhatsApp — costumamos responder em minutos durante o horário comercial.
                    </p>
                  </div>

                  {/* Free consultation */}
                  <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-8 text-white">
                    <h3 className="font-bold text-lg mb-2">🎯 Consulta Gratuita</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Agende 15 minutos com nossa equipe para entender como a IA pode ajudar seu negócio. 
                      Sem compromisso.
                    </p>
                    <a
                      href="https://wa.me/5537984149509?text=Olá! Gostaria de agendar uma consulta gratuita."
                      className="inline-block bg-white text-primary-900 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Agendar pelo WhatsApp
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
