import { post as post1 } from "./5-formas-usar-ia-negocio-2026";
import { post as post2 } from "./o-que-e-mcp-model-context-protocol";
import { post as post3 } from "./chatbots-inteligentes-automatizar-atendimento";
import { post as post4 } from "./como-ia-reduz-custos-operacionais";
import { post as post5 } from "./automacao-processos-empresas-brasileiras";
import { post as post6 } from "./ia-generativa-para-empresas-o-que-muda";

export const posts = [post1, post2, post3, post4, post5, post6].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
