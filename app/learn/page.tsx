import Link from "next/link";
import LearningGoalCard from "@/components/LearningGoalCard";

export default function LearnPage() {
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
            Choose what matters most to you. Your learning path will be
            personalized around your goal.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <LearningGoalCard
            emoji="❤️"
            title="My partner is Filipino"
            description="Learn natural Tagalog for everyday conversations, affection and relationships."
          />

          <LearningGoalCard
            emoji="👨‍👩‍👧"
            title="My family is Filipino"
            description="Connect with parents, grandparents and relatives in Tagalog."
          />

          <LearningGoalCard
            emoji="🇵🇭"
            title="I'm reconnecting with my roots"
            description="Build confidence speaking Tagalog as a heritage learner."
          />

          <LearningGoalCard
            emoji="✈️"
            title="I'm visiting the Philippines"
            description="Learn practical Tagalog for travel, food, transport and daily life."
          />

          <LearningGoalCard
            emoji="🏠"
            title="I'm moving to the Philippines"
            description="Learn the everyday language you'll actually hear around you."
          />

          <LearningGoalCard
            emoji="💬"
            title="I just want to learn"
            description="Follow a balanced path through everyday conversational Tagalog."
          />
        </div>
      </div>
    </main>
  );
}
