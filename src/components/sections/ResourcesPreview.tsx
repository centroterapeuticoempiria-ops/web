import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { resourcesData } from "@/data/resources";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const ResourcesPreview: React.FC = () => {
  return (
    <section id="recursos" className="py-16 sm:py-24 bg-white/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge
            variant="lavender"
            icon={<BookOpen size={14} className="text-[#8B7FD1]" />}
          >
            Biblioteca Educativa
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2D2D3A] tracking-tight">
            Empiria en casa
          </h2>
          <p className="text-base sm:text-lg text-[#3E3B52] leading-relaxed">
            Recursos para comprender, acompañar y potenciar el desarrollo de tu hijo con información clara, rigurosa y libre de mitos.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.slice(0, 3).map((article) => (
            <Card
              key={article.slug}
              variant="default"
              className="flex flex-col justify-between p-6 sm:p-7 bg-white border border-[#E8E4F7] hover:border-[#8B7FD1]/50 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-[24px] group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="lavender">{article.category}</Badge>
                  <span className="text-xs text-[#3E3B52] flex items-center gap-1 font-medium">
                    <Clock size={14} className="text-[#8B7FD1]" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#2D2D3A] group-hover:text-[#5B4B9E] transition-colors leading-snug">
                  <Link href={`/recursos/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#3E3B52] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EFFA] flex items-center justify-between">
                <span className="text-xs text-[#3E3B52] font-semibold">
                  Por {article.author}
                </span>
                <Link
                  href={`/recursos/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#5B4B9E] hover:text-[#5B8FD4] transition-colors group-hover:translate-x-1 duration-200"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Link to all articles */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            href="/recursos"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Ver todos los recursos y artículos
          </Button>
        </div>
      </div>
    </section>
  );
};
