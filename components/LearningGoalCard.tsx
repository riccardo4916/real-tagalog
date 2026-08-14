type LearningGoalCardProps = {
  emoji: string;
  title: string;
  description: string;
  selected?: boolean;
  onClick?: () => void;
};

export default function LearningGoalCard({
  emoji,
  title,
  description,
  selected = false,
  onClick,
}: LearningGoalCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
        selected
          ? "border-blue-600 ring-2 ring-blue-100"
          : "border-slate-200 hover:border-blue-300"
      }`}
    >
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
