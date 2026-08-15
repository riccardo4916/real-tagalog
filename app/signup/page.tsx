"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    setMessage(
      "Account created. Check your email to confirm your registration."
    );

    setLoading(false);
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
            Create account
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900">
            Start learning Tagalog
          </h1>

          <p className="mt-3 text-slate-600">
            Create an account so we can save your lessons and progress.
          </p>

          <form
            onSubmit={handleSignup}
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
                minLength={6}
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-violet-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-gradient-to-r from-violet-700 to-purple-600 px-6 py-4 font-semibold text-white disabled:opacity-50"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {message && (
            <div className="mt-5 rounded-xl bg-slate-100 p-4 text-sm text-slate-700">
              {message}
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-violet-700"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}