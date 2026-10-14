"use client";

import Link from "next/link";

const news = [
  {
    id: 1,
    title: "Yangi Chevrolet Malibu 2025 taqdim etildi",
    category: "Yangi model",
    date: "02.10.2026",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    text: "Chevrolet kompaniyasi yangi Malibu modelining zamonaviy va yangilangan versiyasini taqdim etdi.",
  },
  {
    id: 2,
    title: "BMW yangi avlod avtomobillarini namoyish etdi",
    category: "Avtomobil yangiliklari",
    date: "30.09.2026",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    text: "BMW yangi texnologiyalar va zamonaviy dizayn bilan jihozlangan avtomobillarini ko‘rsatdi.",
  },
  {
    id: 3,
    title: "Elektromobillar bozori tez rivojlanmoqda",
    category: "Trend",
    date: "28.09.2026",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    text: "Elektr avtomobillarga bo‘lgan talab yil sayin ortib bormoqda.",
  },
  {
    id: 4,
    title: "Avtomobil sotib olishda nimalarga e'tibor berish kerak?",
    category: "Maslahat",
    date: "25.09.2026",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
    text: "Avtomobil xarid qilishdan oldin tekshirilishi kerak bo‘lgan eng muhim jihatlar.",
  },
  {
    id: 5,
    title: "Mercedes-Benz yangi modelini chiqardi",
    category: "Yangi model",
    date: "22.09.2026",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    text: "Mercedes-Benz yangi avlod avtomobilini zamonaviy texnologiyalar bilan jihozladi.",
  },
  {
    id: 6,
    title: "Toyota gibrid avtomobillar ishlab chiqarishni kengaytirmoqda",
    category: "Trend",
    date: "20.09.2026",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1200&q=80",
    text: "Toyota ekologik toza va tejamkor gibrid avtomobillar ishlab chiqarishga katta e'tibor bermoqda.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-black py-16 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-500">
            AUTO.UZ
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Avtomobil yangiliklari
          </h1>

          <p className="mt-4 max-w-2xl text-gray-400">
            Avtomobillar, yangi modellar, texnologiyalar va foydali maslahatlar
            haqida eng so‘nggi ma'lumotlar.
          </p>
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            So‘nggi yangiliklar
          </h2>

          <div className="mt-3 h-1 w-16 rounded bg-red-600"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 text-sm text-gray-400">
                  {item.date}
                </div>

                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                  {item.title}
                </h3>

                <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 font-semibold text-red-600 transition hover:text-red-700"
                >
                  Batafsil o‘qish
                  <span className="transition group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            O‘zingizga mos avtomobilni toping
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            AUTO.UZ orqali turli xil avtomobillarni ko‘rib chiqing va
            o‘zingizga mos avtomobilni tanlang.
          </p>

          <Link
            href="/cars"
            className="mt-8 inline-block rounded-xl bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Mashinalarni ko‘rish
          </Link>
        </div>
      </section>
    </main>
  );
}