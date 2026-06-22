import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const post = await req.json();

  const title =
    post.caption?.split("\n")[0] ||
    post.text?.split("\n")[0] ||
    "Без заголовка";

  const content = post.caption || post.text || "";

  const { data, error } = await supabase
    .from("news")
    .insert([
      {
        telegram_message_id: post.message_id,
        title,
        content,
      },
    ])
    .select();

  if (error) {
    console.error("Supabase error:", error);
    return Response.json({ success: false, error });
  }

  console.log("Новость сохранена:", data);

  return Response.json({
    success: true,
  });
}