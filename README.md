# ClaraIA — Consultoria em Inteligência Artificial

Site institucional da ClaraIA, consultoria brasileira especializada em Inteligência Artificial.

🌐 **Site:** [claraia.com.br](https://claraia.com.br)

## Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **TypeScript**
- Export estático (pode ser hospedado em qualquer lugar)

## Começando

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build

# O site estático será gerado em /out
```

## Deploy na Vercel

1. Faça fork ou clone este repositório
2. Conecte na [Vercel](https://vercel.com)
3. Clique em **Deploy** — zero configuração necessária

## Estrutura

```
src/
├── app/              # Páginas (App Router)
│   ├── page.tsx      # Home
│   ├── servicos/     # Serviços
│   ├── sobre/        # Sobre
│   ├── blog/         # Blog + posts
│   └── contato/      # Contato
├── components/       # Componentes reutilizáveis
└── content/          # Conteúdo do blog
```

## Personalização

- **Domínio:** Altere `metadataBase` em `src/app/layout.tsx`
- **WhatsApp:** Altere o número em `src/components/WhatsAppButton.tsx`
- **Formulário:** Substitua `YOUR_FORM_ID` em `src/app/contato/page.tsx` pelo seu ID do Formspree
- **Google Maps:** Substitua o placeholder em `/contato` por um embed real
- **CNPJ:** Atualize no Footer

## Licença

Todos os direitos reservados © ClaraIA
