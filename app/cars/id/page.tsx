import Link from "next/link";

const cars = [
  {
    id: 1,
    name: "Chevrolet Malibu",
    brand: "Chevrolet",
    year: 2024,
    price: 28500,
    fuel: "Benzin",
    transmission: "Avtomat",
    engine: "2.0 Turbo",
    mileage: "12 500 km",
    color: "Qora",
    image:
      "https://kluz-photos-tasinha.kcdn.online/webp/cd/cde358b1-cf4c-47cd-bf88-8ee00c22daa8/1-full.webp",
  },
  {
    id: 2,
    name: "Chevrolet Tracker",
    brand: "Chevrolet",
    year: 2024,
    price: 22900,
    fuel: "Benzin",
    transmission: "Avtomat",
    engine: "1.2 Turbo",
    mileage: "8 200 km",
    color: "Oq",
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
    transmission: "Avtomat",
    engine: "3.0 Turbo",
    mileage: "15 000 km",
    color: "Ko'k",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
];

export default async function CarDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const car = cars.find((item) => item.id === Number(id));

  if (!car) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Avtomobil topilmadi</h1>

          <Link
            href="/cars"
            className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 text-white"
          >
            Avtomobillarga qaytish
          </Link>
        </div>
      </main>
    );
  }

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
              className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white"
            >
              + E'lon berish
            </Link>
          </div>
        </div>
      </nav>

      {/* DETAIL */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link
          href="/cars"
          className="text-sm font-medium text-gray-500 hover:text-red-600"
        >
          ← Avtomobillarga qaytish
        </Link>

        <div className="mt-6 grid gap-10 lg:grid-cols-2">
          {/* IMAGE */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <img
              src={car.image}
              alt={car.name}
              className="h-125 w-full object-cover"
            />
          </div>

          {/* INFO */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              {car.brand}
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              {car.name}
            </h1>

            <p className="mt-4 text-3xl font-bold text-red-600">
              ${car.price.toLocaleString()}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Yili</p>
                <p className="mt-1 text-lg font-bold">{car.year}</p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Yoqilg'i</p>
                <p className="mt-1 text-lg font-bold">{car.fuel}</p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Uzatma</p>
                <p className="mt-1 text-lg font-bold">
                  {car.transmission}
                </p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Motor</p>
                <p className="mt-1 text-lg font-bold">{car.engine}</p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Yurgan masofa</p>
                <p className="mt-1 text-lg font-bold">{car.mileage}</p>
              </div>

              <div className="rounded-xl bg-white p-5 shadow-sm">
                <p className="text-sm text-gray-500">Rang</p>
                <p className="mt-1 text-lg font-bold">{car.color}</p>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button className="flex-1 rounded-xl bg-red-600 px-6 py-4 font-bold text-white hover:bg-red-700">
                📞 Bog'lanish
              </button>

              <button className="rounded-xl border border-gray-300 bg-white px-6 py-4 text-2xl hover:border-red-500">
                ♡
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}