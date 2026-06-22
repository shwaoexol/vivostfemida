import { notFound } from "next/navigation";
import { supabase } from "@/lib/supabase";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function NewsDetails({ params }: Props) {
  const { id } = await params;

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !news) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          {news.title}
        </h1>

        <p className="text-sm text-gray-500 mb-8">
          {new Date(news.created_at).toLocaleString("ru-RU")}
        </p>

        <div className="whitespace-pre-line text-lg leading-8">
          {news.content}
        </div>
      </article>
    </main>
  );
}