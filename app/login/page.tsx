"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      setLoading(false);
      return;
    }

    router.push("/learn");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#f7f5fb] px-5 py-10">
      <div className="mx-auto max-w-md">
        <Link
          href="/"
          className="text-sm font-medium text-violet-700"
        >
          ← Back home
        </Link>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
            Welcome back
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Log in
          </h1>

          <p className="mt-3 text-slate-600">
            Continue your Real Tagalog journey.
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 space-y-5"
          >
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-violet-700 to-purple-600 px-6 py-4 font-semibold text-white disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>

          {errorMessage && (
            <div className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            No account yet?{" "}
            <Link
              href="/signup"
              className="font-semibold text-violet-700"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}