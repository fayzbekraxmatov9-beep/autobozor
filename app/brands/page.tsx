import Link from "next/link";

const brands = [
  {
    name: "Chevrolet",
    country: "AQSH",
    cars: 24,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Chevrolet-logo.png",
  },
  {
    name: "BMW",
    country: "Germaniya",
    cars: 18,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  },
  {
    name: "Mercedes-Benz",
    country: "Germaniya",
    cars: 21,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
  },
  {
    name: "Toyota",
    country: "Yaponiya",
    cars: 27,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
  },
  {
    name: "Kia",
    country: "Janubiy Koreya",
    cars: 16,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/KIA_logo2.svg",
  },
  {
    name: "Hyundai",
    country: "Janubiy Koreya",
    cars: 19,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Hyundai_Motor_Company_logo.svg",
  },
  {
    name: "Audi",
    country: "Germaniya",
    cars: 14,
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg",
  },
  {
    name: "Tesla",
    country: "AQSH",
    cars: 12,
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
  },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-bold">
            AUTO<span className="text-red-600">.UZ</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/" className="hover:text-red-600">
              Bosh sahifa
            </Link>

            <Link href="/cars" className="hover:text-red-600">
              Mashinalar
            </Link>

            <Link
              href="/brands"
              className="font-semibold text-red-600"
            >
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

          <h1 className="mt-3 text-5xl font-bold">
            Avtomobil brendlari
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Dunyoning eng mashhur avtomobil brendlarini
            o'rganing va o'zingizga mos mashinani toping.
          </p>
        </div>
      </section>

      {/* BRANDS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brands.map((brand) => (
            <Link
              href={`/cars?brand=${brand.name}`}
              key={brand.name}
              className="group rounded-2xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-32 items-center justify-center rounded-xl bg-gray-50 p-5">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-20 w-20 object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-bold">
                  {brand.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {brand.country}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {brand.cars} ta avtomobil
                  </span>

                  <span className="font-bold text-red-600">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}