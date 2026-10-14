"use client";

import { useEffect, useState } from "react";
import { FavoriteCar, isFavorite, toggleFavorite } from "../lib/favorites";


type Props = {
  car: FavoriteCar;
};

export default function FavoriteButton({ car }: Props) {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(car.id));
  }, [car.id]);

  const handleClick = () => {
    const result = toggleFavorite(car);

    setFavorite(result);

    window.dispatchEvent(new Event("favoritesUpdated"));
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Sevimlilarga qo‘shish"
      className={`flex h-11 w-11 items-center justify-center rounded-full border bg-white text-xl shadow-sm transition hover:scale-110 ${
        favorite
          ? "border-red-500 text-red-600"
          : "border-gray-200 text-gray-400"
      }`}
    >
      {favorite ? "❤️" : "♡"}
    </button>
  );
}