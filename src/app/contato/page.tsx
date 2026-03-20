"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  "Integração de Inteligência Artificial",
  "Desenvolvimento de Chatbots Inteligentes",
  "Integração MCP (Model Context Protocol)",
  "Consultoria em Arquitetura de Software",
  "Automação de Processos com IA",
  "Outro",
];

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);

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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimateOnScroll>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                  <span className="text-6xl block mb-4">✅</span>
                  <h2 className="text-2xl font-bold text-green-800 mb-2">Mensagem Enviada!</h2>
                  <p className="text-green-700">
                    Recebemos sua mensagem e entraremos em contato em até 24 horas. Obrigado!
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    try {
                      await fetch("https://formspree.io/f/mbdzbzoo", {
                        method: "POST",
                        body: data,
                        headers: { Accept: "application/json" },
                      });
                      setSubmitted(true);
                    } catch {
                      alert("Erro ao enviar. Tente novamente.");
                    }
                  }}
                  className="space-y-6"
                >
                  {/* Honeypot - hidden from humans, bots fill it */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="seu@email.com.br"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                      placeholder="(31) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Serviço de Interesse *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Selecione um serviço</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Conte-nos sobre seu projeto ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold transition-colors"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">Outras Formas de Contato</h2>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">WhatsApp</p>
                        <a href="https://wa.me/5537984149509" className="text-accent hover:underline">
                          +55 (37) 98414-9509
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-2xl">✉️</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">E-mail</p>
                        <a href="mailto:contato@claraialoja.com.br" className="text-accent hover:underline">
                          contato@claraialoja.com.br
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
