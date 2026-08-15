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

  if (error) {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold text-red-600">
        Supabase error
      </h1>

      <pre className="mt-6 whitespace-pre-wrap rounded-xl bg-white p-6">
        {JSON.stringify(error, null, 2)}
      </pre>
    </main>
  );
}

if (!lesson) {
  return (
    <main className="min-h-screen bg-slate-50 p-10">
      <h1 className="text-3xl font-bold">
        Lesson not found in database
      </h1>

      <p className="mt-4">
        Requested lesson ID: {lessonId}
      </p>
    </main>
  );
}
  return <LessonClient lesson={lesson} />;
}
