"use client";
import FavoriteButton from "../components/FavoriteButton";
import { useState } from "react";
import Link from "next/link";

const cars = [
  {
    id: 1,
    name: "Chevrolet Malibu",
    brand: "Chevrolet",
    year: 2024,
    price: 28500,
    fuel: "Benzin",
    image:
      "https://frankfurt.apollo.olxcdn.com/v1/files/bduig9bv893t1-UZ/image;s=510x513;q=50",
  },
  {
    id: 2,
    name: "Chevrolet Tracker",
    brand: "Chevrolet",
    year: 2024,
    price: 22900,
    fuel: "Benzin",
    image:
      "https://avatars.avto.ru/get-autoru-vos/2155384/6754e945b22410a668ec3e131a887dd5/1200x900",
  },
  {
    id: 3,
    name: "BMW M4",
    brand: "BMW",
    year: 2023,
    price: 76000,
    fuel: "Benzin",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Mercedes-Benz C-Class",
    brand: "Mercedes-Benz",
    year: 2023,
    price: 54000,
    fuel: "Benzin",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Toyota Camry",
    brand: "Toyota",
    year: 2022,
    price: 32000,
    fuel: "Gibrid",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "BMW X5",
    brand: "BMW",
    year: 2024,
    price: 89000,
    fuel: "Benzin",
    image:
      "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CarsPage() {
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("Barcha markalar");
  const [maxPrice, setMaxPrice] = useState("Barcha narxlar");

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesBrand =
      brand === "Barcha markalar" || car.brand === brand;

    const matchesPrice =
      maxPrice === "Barcha narxlar" ||
      car.price <= Number(maxPrice);

    return matchesSearch && matchesBrand && matchesPrice;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            AUTO<span className="text-red-600">.UZ</span>
          </Link>

          <div className="hidden gap-8 md:flex">
            <Link href="/" className="hover:text-red-600">
              Bosh sahifa
            </Link>

            <Link href="/cars" className="font-semibold text-red-600">
              Mashinalar
            </Link>

            <Link href="/brands" className="hover:text-red-600">
              Brendlar
            </Link>

            <Link href="/news" className="hover:text-red-600">
              Yangiliklar
            </Link>
          </div>

          <Link
            href="/add-car"
            className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700"
          >
            + E'lon berish
          </Link>
        </div>
      </nav>

      {/* HEADER */}
      <section className="bg-black px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
            AUTO.UZ
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Avtomobillar
          </h1>

          <p className="mt-4 text-gray-400">
            O'zingizga mos avtomobilni toping.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* FILTER */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3">
            <input
              type="text"
              placeholder="🔎 Mashina qidirish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none focus:border-red-500"
            />

            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none"
            >
              <option>Barcha markalar</option>
              <option>Chevrolet</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Toyota</option>
            </select>

            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none"
            >
              <option>Barcha narxlar</option>
              <option value="30000">$30,000 gacha</option>
              <option value="50000">$50,000 gacha</option>
              <option value="80000">$80,000 gacha</option>
              <option value="100000">$100,000 gacha</option>
            </select>
          </div>
        </div>

        {/* RESULT */}
        <div className="mt-10 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {filteredCars.length} ta avtomobil
          </h2>

          <span className="text-sm text-gray-500">
            Natijalar
          </span>
        </div>

        {/* CARDS */}
        {filteredCars.length > 0 ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">
                        {car.brand}
                      </p>

                      <h3 className="mt-1 text-xl font-bold">
                        {car.name}
                      </h3>
                    </div>

                    <button className="text-2xl text-gray-400 hover:text-red-600">
                      ♡
                    </button>
                  </div>

                  <div className="mt-4 flex gap-4 text-sm text-gray-500">
                    <span>📅 {car.year}</span>
                    <span>⛽ {car.fuel}</span>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-bold text-red-600">
                      ${car.price.toLocaleString()}
                    </span>

                    <Link
                      href={`/cars/${car.id}`}
                      className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
                    >
                      Batafsil
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl bg-white py-20 text-center">
            <p className="text-xl font-semibold">
              Avtomobil topilmadi 😔
            </p>

            <p className="mt-2 text-gray-500">
              Qidiruv yoki filterlarni o'zgartirib ko'ring.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}