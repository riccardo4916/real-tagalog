import Link from "next/link";

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-4xl">
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
            We'll use this later to personalize your lessons.
          </p>
        </div>
      </div>
    </main>
  );
}
