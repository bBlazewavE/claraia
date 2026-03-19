import { posts } from "@/content/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      locale: "pt_BR",
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-blue-300 hover:text-white text-sm mb-4 inline-block">
            ← Voltar ao Blog
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-300">
            <span>{post.author}</span>
            <span>•</span>
            <time>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </section>

      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-primary-900 prose-a:text-accent prose-strong:text-gray-900">
            {post.content.split("\n\n").map((block, i) => {
              const trimmed = block.trim();
              if (!trimmed) return null;
              if (trimmed.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold text-primary-900 mt-10 mb-4">{trimmed.replace("## ", "")}</h2>;
              }
              if (trimmed.startsWith("### ")) {
                return <h3 key={i} className="text-xl font-bold text-primary-900 mt-8 mb-3">{trimmed.replace("### ", "")}</h3>;
              }
              if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                const items = trimmed.split("\n").filter(l => l.trim());
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 my-4 text-gray-700">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^[-*]\s+/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
                    ))}
                  </ul>
                );
              }
              // Handle bold text
              const parts = trimmed.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="text-gray-900">{part}</strong> : part
                  )}
                </p>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-accent to-blue-600 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Gostou do conteúdo?</h3>
            <p className="text-blue-100 mb-6">
              Fale com a gente e descubra como aplicar essas ideias no seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-white text-accent hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
