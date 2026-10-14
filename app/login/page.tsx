import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-8 block text-center text-3xl font-bold"
          >
            AUTO<span className="text-red-600">.UZ</span>
          </Link>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-3xl font-bold text-gray-900">
              Xush kelibsiz!
            </h1>

            <p className="mt-2 text-gray-500">
              Akkauntingizga kiring
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="@gmail.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Parol
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3.5 font-semibold text-white transition hover:bg-red-700"
              >
                Kirish
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Akkauntingiz yo'qmi?{" "}
              <Link
                href="/register"
                className="font-semibold text-red-600 hover:underline"
              >
                Ro'yxatdan o'tish
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}