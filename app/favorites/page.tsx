"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FavoriteCar, getFavorites, toggleFavorite } from "../lib/favorites";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<FavoriteCar[]>([]);

  const loadFavorites = () => {
    setFavorites(getFavorites());
  };

  useEffect(() => {
    loadFavorites();

    window.addEventListener("favoritesUpdated", loadFavorites);

    return () => {
      window.removeEventListener("favoritesUpdated", loadFavorites);
    };
  }, []);

  const removeFavorite = (car: FavoriteCar) => {
    toggleFavorite(car);
    loadFavorites();
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
            AUTO.UZ
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Sevimlilar ❤️
          </h1>

          <p className="mt-4 text-gray-400">
            Siz saqlagan avtomobillar shu yerda ko‘rinadi.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        {favorites.length === 0 ? (
          <div className="rounded-2xl bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-6xl">♡</div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Hozircha sevimli mashinalar yo‘q
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-500">
              Sizga yoqqan avtomobillarni ❤️ tugmasi orqali sevimlilarga
              qo‘shing.
            </p>

            <Link
              href="/cars"
              className="mt-7 inline-block rounded-xl bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Mashinalarni ko‘rish
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Saqlangan mashinalar
              </h2>

              <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                {favorites.length} ta
              </span>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {favorites.map((car) => (
                <div
                  key={car.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="h-full w-full object-cover"
                    />

                    <button
                      onClick={() => removeFavorite(car)}
                      className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow-md transition hover:scale-110"
                    >
                      ❤️
                    </button>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-gray-500">
                      {car.brand} • {car.year}
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      {car.name}
                    </h3>

                    <p className="mt-3 text-2xl font-bold text-red-600">
                      ${car.price.toLocaleString()}
                    </p>

                    <div className="mt-4 flex gap-2">
                      <span className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-600">
                        {car.fuel}
                      </span>
                    </div>

                    <Link
                      href={`/cars/${car.id}`}
                      className="mt-5 block rounded-xl bg-black py-3 text-center font-semibold text-white transition hover:bg-gray-800"
                    >
                      Batafsil ko‘rish
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}