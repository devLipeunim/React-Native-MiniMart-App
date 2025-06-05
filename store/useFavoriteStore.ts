import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Product } from "../types";

// The FavoriteStore interface
interface FavoriteStore {
  favorites: Product[];
  toggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (product) => {
        const exists = get().favorites.find((item) => item.id === product.id);
        if (exists) {
          set({
            favorites: get().favorites.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            favorites: [...get().favorites, product],
          });
        }
      },
      isFavorite: (productId) => {
        return get().favorites.some((item) => item.id === productId);
      },
      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
