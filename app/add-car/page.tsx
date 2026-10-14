"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddCarPage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            AUTO<span className="text-red-600">.UZ</span>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-red-600">
              Bosh sahifa
            </Link>

            <Link href="/cars" className="hover:text-red-600">
              Mashinalar
            </Link>

            <Link
              href="/add-car"
              className="font-semibold text-red-600"
            >
              E'lon berish
            </Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section className="bg-black px-6 py-14 text-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            AUTO.UZ
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Avtomobilingizni soting
          </h1>

          <p className="mt-3 text-gray-400">
            Mashinangiz haqida ma'lumotlarni kiriting va e'lon
            joylang.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="mx-auto max-w-4xl px-6 py-10">
        <form className="space-y-8">
          {/* ASOSIY MA'LUMOT */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              Asosiy ma'lumotlar
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Marka
                </label>

                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500">
                  <option>Markani tanlang</option>
                  <option>Chevrolet</option>
                  <option>BMW</option>
                  <option>Mercedes-Benz</option>
                  <option>Toyota</option>
                  <option>Hyundai</option>
                  <option>Kia</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Model
                </label>

                <input
                  type="text"
                  placeholder="Masalan: Malibu"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Ishlab chiqarilgan yil
                </label>

                <input
                  type="number"
                  placeholder="2024"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Narxi ($)
                </label>

                <input
                  type="number"
                  placeholder="28500"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* TEXNIK MA'LUMOT */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              Texnik ma'lumotlar
            </h2>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Yoqilg'i
                </label>

                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500">
                  <option>Benzin</option>
                  <option>Dizel</option>
                  <option>Gibrid</option>
                  <option>Elektr</option>
                  <option>Gaz</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Uzatma
                </label>

                <select className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500">
                  <option>Avtomat</option>
                  <option>Mexanika</option>
                  <option>Robot</option>
                  <option>Variator</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Motor
                </label>

                <input
                  type="text"
                  placeholder="2.0 Turbo"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Yurgan masofasi
                </label>

                <input
                  type="text"
                  placeholder="12500 km"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Rang
                </label>

                <input
                  type="text"
                  placeholder="Qora"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* RASM */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              Avtomobil rasmi
            </h2>

            <div className="mt-6">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 p-10 transition hover:border-red-500">
                {image ? (
                  <img
                    src={image}
                    alt="Avtomobil"
                    className="h-64 w-full rounded-xl object-cover"
                  />
                ) : (
                  <>
                    <span className="text-5xl">📷</span>

                    <p className="mt-4 font-semibold">
                      Rasm tanlang
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      JPG, PNG yoki WEBP
                    </p>
                  </>
                )}

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImage}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* TAVSIF */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              Qo'shimcha ma'lumot
            </h2>

            <textarea
              rows={6}
              placeholder="Avtomobil haqida batafsil ma'lumot yozing..."
              className="mt-6 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 py-4 text-lg font-bold text-white transition hover:bg-red-700"
          >
            🚗 E'lonni joylash
          </button>
        </form>
      </section>
    </main>
  );
}