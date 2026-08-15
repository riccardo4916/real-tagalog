import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import LessonClient from "@/components/LessonClient";

type LessonPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LessonPage({
  params,
}: LessonPageProps) {
  const { id } = await params;

  const lessonId = Number(id);

  if (Number.isNaN(lessonId)) {
    notFound();
  }

  const supabase = await createClient();

  const { data: lesson, error } = await supabase
    .from("lessons")
    .select(`
      id,
      title,
      subtitle,
      phrases (
        id,
        tagalog,
        english,
        standard_form,
        everyday_form,
        chat_form,
        explanation,
        cultural_note,
        position
      )
    `)
    .eq("id", lessonId)
    .order("position", {
      referencedTable: "phrases",
      ascending: true,
    })
    .single();

  if (error || !lesson) {
    notFound();
  }

  return <LessonClient lesson={lesson} />;
}
