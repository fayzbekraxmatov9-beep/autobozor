import Link from "next/link";

const news = [
  {
    id: 1,
    title: "Yangi Chevrolet Malibu 2025 taqdim etildi",
    category: "Yangi model",
    date: "02.10.2026",
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80",
    content:
      "Chevrolet kompaniyasi yangi Malibu modelining zamonaviy va yangilangan versiyasini taqdim etdi. Yangi model zamonaviy dizayn, qulay salon va ilg‘or texnologiyalar bilan jihozlangan.",
  },
  {
    id: 2,
    title: "BMW yangi avlod avtomobillarini namoyish etdi",
    category: "Avtomobil yangiliklari",
    date: "30.09.2026",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
    content:
      "BMW yangi texnologiyalar va zamonaviy dizayn bilan jihozlangan avtomobillarini namoyish etdi. Yangi avtomobillarda xavfsizlik va haydash qulayligiga alohida e’tibor berilgan.",
  },
  {
    id: 3,
    title: "Elektromobillar bozori tez rivojlanmoqda",
    category: "Trend",
    date: "28.09.2026",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=80",
    content:
      "Elektr avtomobillarga bo‘lgan talab yil sayin ortib bormoqda. Zamonaviy elektromobillar uzoq masofa, tez quvvatlanish va yangi texnologiyalarni taklif qilmoqda.",
  },
  {
    id: 4,
    title: "Avtomobil sotib olishda nimalarga e'tibor berish kerak?",
    category: "Maslahat",
    date: "25.09.2026",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
    content:
      "Avtomobil sotib olishdan oldin uning texnik holati, yurilgan masofasi, dvigateli, kuzovi va hujjatlarini tekshirish juda muhim.",
  },
  {
    id: 5,
    title: "Mercedes-Benz yangi modelini chiqardi",
    category: "Yangi model",
    date: "22.09.2026",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=80",
    content:
      "Mercedes-Benz yangi avlod avtomobilini zamonaviy texnologiyalar bilan jihozladi. Model premium dizayn va yuqori darajadagi komfortni taklif qiladi.",
  },
  {
    id: 6,
    title: "Toyota gibrid avtomobillar ishlab chiqarishni kengaytirmoqda",
    category: "Trend",
    date: "20.09.2026",
    image:
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1400&q=80",
    content:
      "Toyota ekologik toza va tejamkor gibrid avtomobillar ishlab chiqarishga katta e’tibor bermoqda. Gibrid texnologiyasi yoqilg‘i sarfini kamaytirishga yordam beradi.",
  },
];

export default async function NewsDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const item = news.find((newsItem) => newsItem.id === Number(id));

  if (!item) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900">404</h1>

          <p className="mt-3 text-gray-500">
            Yangilik topilmadi.
          </p>

          <Link
            href="/news"
            className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
          >
            Yangiliklarga qaytish
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero image */}
      <section className="relative h-100 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-12 text-white">
            <span className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold">
              {item.category}
            </span>

            <h1 className="mt-5 max-w-4xl text-3xl font-bold md:text-5xl">
              {item.title}
            </h1>

            <p className="mt-4 text-gray-300">
              {item.date}
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/news"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-red-600 hover:text-red-700"
        >
          ← Yangiliklarga qaytish
        </Link>

        <article className="rounded-2xl bg-white p-7 shadow-sm md:p-10">
          <p className="text-lg leading-8 text-gray-700">
            {item.content}
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            AUTO.UZ platformasida avtomobil bozori, yangi modellar va
            avtomobil tanlash bo‘yicha foydali ma’lumotlarni kuzatib
            borishingiz mumkin.
          </p>
        </article>
      </section>

      {/* CTA */}
      <section className="bg-black py-14">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-3xl font-bold">
            Avtomobil izlayapsizmi?
          </h2>

          <p className="mt-3 text-gray-400">
            AUTO.UZ dagi avtomobillarni ko‘rib chiqing.
          </p>

          <Link
            href="/cars"
            className="mt-7 inline-block rounded-xl bg-red-600 px-7 py-3 font-semibold hover:bg-red-700"
          >
            Mashinalarni ko‘rish
          </Link>
        </div>
      </section>
    </main>
  );
}