import { create } from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  products: [],
  category: [],
  loading: false,
  error: null,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products`);
      set({ products: response.data.data, error: null });
    } catch (err) {
      set({ error: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },

  fetchProductCategory: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(`${BASE_URL}/api/products/category`);
      set({ category: response.data.data, error: null });
    } catch (err) {
      set({ error: "Something went wrong" });
    } finally {
      set({ loading: false });
    }
  },
}));
