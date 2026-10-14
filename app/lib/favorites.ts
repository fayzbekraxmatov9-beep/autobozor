export type FavoriteCar = {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  fuel: string;
  image: string;
};

const STORAGE_KEY = "auto-uz-favorites";

export function getFavorites(): FavoriteCar[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : [];
}

export function isFavorite(id: number): boolean {
  return getFavorites().some((car) => car.id === id);
}

export function toggleFavorite(car: FavoriteCar): boolean {
  const favorites = getFavorites();

  const exists = favorites.some((item) => item.id === car.id);

  const updated = exists
    ? favorites.filter((item) => item.id !== car.id)
    : [...favorites, car];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return !exists;
}