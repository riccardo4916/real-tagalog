"use client";

import { useState } from "react";

type Phrase = {
  id: number;
  tagalog: string;
  english: string;
  standard_form: string | null;
  everyday_form: string | null;
  chat_form: string | null;
  explanation: string | null;
  cultural_note: string | null;
  position: number;
};

type LessonClientProps = {
  lesson: {
    id: number;
    title: string;
    subtitle: string | null;
    phrases: Phrase[];
  };
};

export default function LessonClient({ lesson }: LessonClientProps) {
  const [step, setStep] = useState(0);

  const phrase = lesson.phrases[step];

  if (!phrase) {
    return (
      <main className="min-h-screen bg-[#f7f5fb] px-4 py-10">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="text-6xl">🎉</div>

          <h1 className="mt-6 text-4xl font-bold text-slate-900">
            Lesson complete!
          </h1>

          <p className="mt-4 text-slate-600">
            You completed {lesson.title}.
          </p>
        </div>
      </main>
    );
  }

  const progress = ((step + 1) / lesson.phrases.length) * 100;

  return (
    <main className="min-h-screen bg-[#f7f5fb]">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">

        {/* DESKTOP SIDEBAR */}
        <aside className="hidden w-[320px] shrink-0 bg-[#15111f] p-6 text-white lg:block">
          <div>
            <h1 className="text-2xl font-bold">
              Real <span className="text-violet-400">Tagalog</span>
            </h1>

            <p className="mt-1 text-sm text-slate-400">
              Speak Filipino. For real.
            </p>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-300">
              Course progress
            </p>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span>{Math.round(progress)}% complete</span>
              <span>
                {step + 1} / {lesson.phrases.length}
              </span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Current lesson
            </p>

            <div className="mt-4 rounded-2xl bg-white/5 p-4">
              <p className="font-semibold">
                Lesson {lesson.id}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {lesson.title}
              </p>

              <div className="mt-5 rounded-xl bg-violet-500/20 px-4 py-3 text-violet-200">
                Phrases
              </div>
            </div>
          </div>

          {phrase.cultural_note && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold text-violet-300">
                🇵🇭 Cultural note
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                {phrase.cultural_note}
              </p>
            </div>
          )}
        </aside>

        {/* MAIN AREA */}
        <section className="flex min-w-0 flex-1 flex-col">

          {/* MOBILE HEADER */}
          <header className="border-b border-slate-200 bg-white px-4 py-4 lg:hidden">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-slate-900">
                Real <span className="text-violet-600">Tagalog</span>
              </h1>

              <span className="text-sm font-semibold text-slate-500">
                {step + 1}/{lesson.phrases.length}
              </span>
            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-purple-400"
                style={{ width: `${progress}%` }}
              />
            </div>
          </header>

          {/* TOP NAV DESKTOP */}
          <div className="hidden items-center justify-between border-b border-slate-200 bg-white px-8 py-5 lg:flex">
            <button className="font-medium text-violet-700">
              ← Back to lessons
            </button>

            <span className="font-semibold text-slate-600">
              {step + 1} of {lesson.phrases.length}
            </span>
          </div>

          {/* CONTENT */}
          <div className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">
            <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.5fr_1fr]">

              {/* PHRASE CARD */}
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
                  Phrase {step + 1} of {lesson.phrases.length}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                    {phrase.tagalog}
                  </h2>

                  <button className="rounded-xl bg-violet-100 p-3 text-xl text-violet-700">
                    🔊
                  </button>
                </div>

                <p className="mt-3 text-xl text-slate-500">
                  {phrase.english}
                </p>

                <div className="mt-8 space-y-4">
                  {phrase.standard_form && (
                    <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
                      <p className="text-xs font-semibold uppercase text-violet-600">
                        Standard
                      </p>

                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        {phrase.standard_form}
                      </p>
                    </div>
                  )}

                  {phrase.everyday_form && (
                    <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                      <p className="text-xs font-semibold uppercase text-green-700">
                        Everyday
                      </p>

                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        {phrase.everyday_form}
                      </p>
                    </div>
                  )}

                  {phrase.chat_form && (
                    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
                      <p className="text-xs font-semibold uppercase text-blue-700">
                        Chat
                      </p>

                      <p className="mt-2 text-lg font-semibold text-slate-900">
                        {phrase.chat_form}
                      </p>
                    </div>
                  )}
                </div>

                {phrase.explanation && (
                  <div className="mt-8">
                    <p className="text-sm font-semibold text-violet-700">
                      ⓘ Explanation
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      {phrase.explanation}
                    </p>
                  </div>
                )}

                {phrase.cultural_note && (
                  <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                    <p className="font-semibold text-amber-800">
                      💡 Cultural note
                    </p>

                    <p className="mt-2 text-sm leading-6 text-amber-900">
                      {phrase.cultural_note}
                    </p>
                  </div>
                )}

                <button
                  onClick={() => setStep((current) => current + 1)}
                  className="mt-8 w-full rounded-2xl bg-gradient-to-r from-violet-700 to-purple-600 px-6 py-4 font-semibold text-white transition hover:opacity-95"
                >
                  Next phrase →
                </button>
              </article>

              {/* QUIZ PLACEHOLDER */}
              <aside className="rounded-3xl bg-[#171321] p-6 text-white shadow-sm sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-wide text-violet-300">
                  Exercise
                </p>

                <h3 className="mt-8 text-2xl font-bold leading-tight">
                  Quick practice
                </h3>

                <p className="mt-3 text-slate-400">
                  The interactive quiz will appear here once we connect the
                  exercises table.
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">
                    Current phrase
                  </p>

                  <p className="mt-2 text-xl font-semibold">
                    {phrase.tagalog}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
