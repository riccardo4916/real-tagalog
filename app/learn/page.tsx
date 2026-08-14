"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import LearningGoalCard from "@/components/LearningGoalCard";

const goals = [
  {
    id: "partner",
    emoji: "❤️",
    title: "My partner is Filipino",
    description:
      "Learn natural Tagalog for everyday conversations, affection and relationships.",
  },
  {
    id: "family",
    emoji: "👨‍👩‍👧",
    title: "My family is Filipino",
    description:
      "Connect with parents, grandparents and relatives in Tagalog.",
  },
  {
    id: "heritage",
    emoji: "🇵🇭",
    title: "I'm reconnecting with my roots",
    description:
      "Build confidence speaking Tagalog as a heritage learner.",
  },
  {
    id: "travel",
    emoji: "✈️",
    title: "I'm visiting the Philippines",
    description:
      "Learn practical Tagalog for travel, food, transport and daily life.",
  },
  {
    id: "moving",
    emoji: "🏠",
    title: "I'm moving to the Philippines",
    description:
      "Learn the everyday language you'll actually hear around you.",
  },
  {
    id: "general",
    emoji: "💬",
    title: "I just want to learn",
    description:
      "Follow a balanced path through everyday conversational Tagalog.",
  },
];

export default function LearnPage() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const router = useRouter();

  function continueLearning() {
    if (!selectedGoal) {
      return;
    }

    localStorage.setItem("learningGoal", selectedGoal);

    router.push("/lesson/1");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="text-sm font-medium text-slate-500 hover:text-slate-900"
        >
          ← Back
        </Link>

        <div className="mt-10">
          <p className="font-semibold text-blue-700">
            Your Tagalog journey
          </p>

          <h1 className="mt-2 text-4xl font-bold text-slate-900">
            Why do you want to learn Tagalog?
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Choose what matters most to you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {goals.map((goal) => (
            <LearningGoalCard
              key={goal.id}
              emoji={goal.emoji}
              title={goal.title}
              description={goal.description}
              selected={selectedGoal === goal.id}
              onClick={() => setSelectedGoal(goal.id)}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button
            onClick={continueLearning}
            disabled={!selectedGoal}
            className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue →
          </button>
        </div>
      </div>
    </main>
  );
}
