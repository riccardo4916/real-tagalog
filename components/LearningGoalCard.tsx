type LearningGoalCardProps = {
  emoji: string;
  title: string;
  description: string;
};

export default function LearningGoalCard({
  emoji,
  title,
  description,
}: LearningGoalCardProps) {
  return (
    <button className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
      <div className="text-3xl">{emoji}</div>

      <h2 className="mt-4 text-xl font-semibold text-slate-900">
        {title}
      </h2>

      <p className="mt-2 text-slate-600">
        {description}
      </p>
    </button>
  );
}
