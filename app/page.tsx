import Navbar from "./components/Navbar";

const cars = [
  {
    name: "Chevrolet Malibu",
    year: "2024",
    price: "$28,500",
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chevrolet Tracker",
    year: "2024",
    price: "$22,900",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "BMW M4",
    year: "2023",
    price: "$76,000",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-red-500">
              AUTO.UZ
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              O'zingizga mos
              <span className="text-red-600"> avtomobilni </span>
              toping.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              Yangi va ishlatilgan avtomobillarni qidiring, solishtiring va
              o'zingizga mos mashinani toping.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-12 rounded-2xl bg-white p-4 shadow-2xl">
            <div className="grid gap-3 md:grid-cols-4">
              <select className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none">
                <option>Marka</option>
                <option>Chevrolet</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Toyota</option>
              </select>

              <select className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none">
                <option>Model</option>
                <option>Malibu</option>
                <option>Cobalt</option>
                <option>Tracker</option>
              </select>

              <select className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 outline-none">
                <option>Narx</option>
                <option>$10,000 gacha</option>
                <option>$20,000 gacha</option>
                <option>$30,000 gacha</option>
              </select>

              <button className="rounded-xl bg-red-600 px-6 py-4 font-semibold text-white transition hover:bg-red-700">
                Qidirish
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CARS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Katalog
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Mashhur avtomobillar
            </h2>
          </div>

          <button className="hidden rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium md:block">
            Barchasini ko'rish →
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <div
              key={car.name}
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
                    <h3 className="text-xl font-bold text-gray-900">
                      {car.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">{car.year}</p>
                  </div>

                  <button className="text-xl">♡</button>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-red-600">
                    {car.price}
                  </span>

                  <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
                    Batafsil
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}