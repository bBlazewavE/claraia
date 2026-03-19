import { post as post1 } from "./5-formas-usar-ia-negocio-2026";
import { post as post2 } from "./o-que-e-mcp-model-context-protocol";
import { post as post3 } from "./chatbots-inteligentes-automatizar-atendimento";

export const posts = [post1, post2, post3].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
