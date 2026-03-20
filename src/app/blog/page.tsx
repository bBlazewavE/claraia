import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/content/blog";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Blog — Artigos sobre IA e Tecnologia",
  description:
    "Artigos sobre inteligência artificial, chatbots, MCP, automação e tecnologia para empresas brasileiras. Conteúdo prático e em português.",
  openGraph: {
    title: "Blog — ClaraIA",
    description: "Artigos sobre IA e tecnologia para empresas brasileiras.",
  },
};

export default function Blog() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Conteúdo prático sobre inteligência artificial, automação e tecnologia para o seu negócio.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <AnimateOnScroll key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="h-48 overflow-hidden">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="bg-gradient-to-br from-primary-100 to-blue-50 h-full flex items-center justify-center">
                          <span className="text-6xl">📝</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <time className="text-sm text-gray-500 mb-2">
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                      <h2 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm flex-1">{post.description}</p>
                      <span className="text-accent font-semibold text-sm mt-4 inline-block">
                        Ler artigo →
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
