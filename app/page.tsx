import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-800">
          🇵🇭 Real-life Tagalog
        </span>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-900 md:text-7xl">
          Learn the Tagalog
          <span className="block text-blue-700">
            Filipinos actually speak.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
          Learn everyday Tagalog for conversations, relationships, family,
          travel and life in the Philippines.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/learn"
            className="rounded-xl bg-blue-700 px-7 py-4 font-semibold text-white transition hover:bg-blue-800"
          >
            Start learning free
          </Link>

          <a
            href="#example"
            className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            See how it works
          </a>
        </div>

        <div
          id="example"
          className="mt-20 w-full max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Everyday Tagalog
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Nasan ka na?
          </h2>

          <p className="mt-2 text-lg text-slate-600">
            Where are you now?
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-xs font-semibold text-slate-400">
                STANDARD
              </p>
              <p className="font-medium text-slate-800">
                Nasaan ka na?
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400">
                EVERYDAY
              </p>
              <p className="font-medium text-slate-800">
                Nasan ka na?
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-slate-400">
                CHAT
              </p>
              <p className="font-medium text-slate-800">
                Nasan kana?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
