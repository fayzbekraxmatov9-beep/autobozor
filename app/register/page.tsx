import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen items-center justify-center px-6 py-10">
        <div className="w-full max-w-md">
          <Link
            href="/"
            className="mb-8 block text-center text-3xl font-bold"
          >
            AUTO<span className="text-red-600">.UZ</span>
          </Link>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h1 className="text-3xl font-bold">
              Akkaunt yaratish
            </h1>

            <p className="mt-2 text-gray-500">
              AUTO.UZ saytiga qo'shiling
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Ism
                </label>

                <input
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

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

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Parolni tasdiqlang
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-600 py-3.5 font-semibold text-white hover:bg-red-700"
              >
                Ro'yxatdan o'tish
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Akkauntingiz bormi?{" "}
              <Link
                href="/login"
                className="font-semibold text-red-600 hover:underline"
              >
                Kirish
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}