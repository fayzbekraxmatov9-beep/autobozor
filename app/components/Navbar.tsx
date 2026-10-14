"use client";

import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-2xl font-bold text-black">
                    AUTO<span className="text-red-600">.UZ</span>
                </Link>

                <div className="hidden items-center gap-8 md:flex">
                    <Link href="/" className="text-sm font-medium hover:text-red-600">
                        Bosh sahifa
                    </Link>

                    <Link
                        href="/cars"
                        className="text-sm font-medium hover:text-red-600"
                    >
                        Mashinalar
                    </Link>

                    <Link
                        href="/brands"
                        className="text-sm font-medium hover:text-red-600"
                    >
                        Brendlar
                    </Link>

                    <Link
                        href="/news"
                        className="text-sm font-medium hover:text-red-600"
                    >
                        Yangiliklar
                    </Link>
                </div>

                <div className="flex items-center gap-3">
                    <Link
                        href="/login"
                        className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100"
                    >
                        Kirish
                    </Link>

                    <Link
                        href="/add-car"
                        className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                        + E'lon berish
                    </Link>
                    <Link
                        href="/favorites"
                        className="transition hover:text-red-500"
                    >
                        ❤️ Sevimlilar
                    </Link>
                </div>
            </div>
        </nav>
    );
}