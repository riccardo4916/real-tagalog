"use client";

import { useState } from "react";
import Link from "next/link";

export default function LessonOnePage() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState<string | null>(null);

  function nextStep() {
    setStep((current) => current + 1);
    setAnswer(null);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <Link
            href="/learn"
            className="text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            ← Back
          </Link>

          <p className="text-sm font-semibold text-slate-500">
            Lesson 1
          </p>
        </div>

        <div className="mt-8 h-2 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full bg-blue-700 transition-all"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {step === 1 && (
          <section className="mt-12">
            <p className="font-semibold text-blue-700">
              Everyday Tagalog
            </p>

            <h1 className="mt-3 text-5xl font-bold text-slate-900">
              Nasan ka?
            </h1>

            <p className="mt-3 text-xl text-slate-600">
              Where are you?
            </p>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Standard
                </p>
                <p className="mt-1 text-lg font-medium text-slate-900">
                  Nasaan ka?
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Everyday
                </p>
                <p className="mt-1 text-lg font-medium text-slate-900">
                  Nasan ka?
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Meaning
                </p>
                <p className="mt-1 text-slate-600">
                  “Nasaan” means “where” when asking where a person or thing is.
                  In everyday conversation, Filipinos often shorten it to
                  “Nasan”.
                </p>
              </div>
            </div>

            <button
              onClick={nextStep}
              className="mt-10 w-full rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Continue
            </button>
          </section>
        )}

        {step === 2 && (
          <section className="mt-12">
            <p className="font-semibold text-blue-700">
              Real conversation
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              See it in context
            </h1>

            <div className="mt-10 space-y-5">
              <div className="max-w-md rounded-2xl rounded-bl-sm bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">
                  Nasan ka na?
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Where are you now?
                </p>
              </div>

              <div className="ml-auto max-w-md rounded-2xl rounded-br-sm bg-blue-700 p-5 text-white">
                <p className="font-semibold">
                  Nasa trabaho pa ako.
                </p>
                <p className="mt-1 text-sm text-blue-100">
                  I'm still at work.
                </p>
              </div>

              <div className="max-w-md rounded-2xl rounded-bl-sm bg-white p-5 shadow-sm">
                <p className="font-semibold text-slate-900">
                  Okay, ingat!
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Okay, take care!
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
              <p className="font-semibold text-yellow-900">
                🇵🇭 Real-life note
              </p>

              <p className="mt-2 text-yellow-800">
                “Nasan ka na?” is extremely common in chats and everyday
                conversation.
              </p>
            </div>

            <button
              onClick={nextStep}
              className="mt-10 w-full rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Practice
            </button>
          </section>
        )}

        {step === 3 && (
          <section className="mt-12">
            <p className="font-semibold text-blue-700">
              Quick practice
            </p>

            <h1 className="mt-3 text-4xl font-bold text-slate-900">
              How would you say “Where are you?”
            </h1>

            <div className="mt-10 space-y-4">
              {[
                "Nasaan ikaw?",
                "Nasan ka?",
                "Saan ako?",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswer(option)}
                  className={`w-full rounded-2xl border p-5 text-left font-medium transition ${
                    answer === option
                      ? "border-blue-600 bg-blue-50"
                      : "border-slate-200 bg-white hover:border-blue-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {answer && (
              <div
                className={`mt-6 rounded-2xl p-5 ${
                  answer === "Nasan ka?"
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {answer === "Nasan ka?"
                  ? "Correct! 🎉 “Nasan ka?” is the natural everyday form."
                  : "Not quite. The natural everyday answer is “Nasan ka?”"}
              </div>
            )}

            <button
              onClick={nextStep}
              disabled={answer !== "Nasan ka?"}
              className="mt-10 w-full rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Continue
            </button>
          </section>
        )}

        {step === 4 && (
          <section className="mt-12 text-center">
            <div className="text-6xl">
              🎉
            </div>

            <h1 className="mt-6 text-4xl font-bold text-slate-900">
              Lesson complete!
            </h1>

            <p className="mt-4 text-lg text-slate-600">
              You learned your first everyday Tagalog phrase.
            </p>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold text-slate-400">
                YOU LEARNED
              </p>

              <p className="mt-3 text-3xl font-bold text-slate-900">
                Nasan ka?
              </p>

              <p className="mt-2 text-slate-600">
                Where are you?
              </p>
            </div>

            <Link
              href="/learn"
              className="mt-10 inline-block rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
            >
              Back to learning
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}
