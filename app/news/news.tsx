import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default async function NewsPage() {
  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">
          Ошибка загрузки новостей
        </h1>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Новости
      </h1>

      <div className="space-y-6">
        {news?.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="block"
          >
            <article className="rounded-xl border p-6 shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-3">
                {item.title}
              </h2>

              <p className="line-clamp-3 text-gray-700">
                {item.content}
              </p>

              <p className="mt-4 text-sm text-gray-500">
                {new Date(item.created_at).toLocaleString("ru-RU")}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}