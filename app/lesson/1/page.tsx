import Link from "next/link";

export default function LessonOnePage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-3xl">

        <Link
          href="/learn"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Back
        </Link>

        <div className="mt-12">
          <p className="font-semibold text-blue-700">
            Lesson 1
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Where are you?
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Your first real-life Tagalog conversation.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Everyday Tagalog
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Nasan ka?
          </h2>

          <p className="mt-3 text-xl text-slate-600">
            Where are you?
          </p>

          <div className="mt-8 border-t border-slate-100 pt-6">

            <p className="text-sm font-semibold text-slate-400">
              STANDARD
            </p>

            <p className="mt-1 text-lg font-medium text-slate-800">
              Nasaan ka?
            </p>

          </div>

          <div className="mt-5">

            <p className="text-sm font-semibold text-slate-400">
              EVERYDAY
            </p>

            <p className="mt-1 text-lg font-medium text-slate-800">
              Nasan ka?
            </p>

          </div>

          <div className="mt-5">

            <p className="text-sm font-semibold text-slate-400">
              CHAT
            </p>

            <p className="mt-1 text-lg font-medium text-slate-800">
              Nasan ka?
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}
