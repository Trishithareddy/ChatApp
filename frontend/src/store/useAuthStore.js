import { create } from "zustand";
import api from "../lib/axios";

export const useAuthStore = create((set) => ({
  user: null,
  isLoggingIn: false,

  // Login function
  login: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const response = await api.post("/auth/login", formData);
      set({ user: response.data });
    } catch (error) {
      console.error("Login failed:", error.response?.data);
      alert(error.response?.data?.message || "Login failed");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  // Signup function
  signup: async (formData) => {
    set({ isLoggingIn: true });
    try {
      const response = await api.post("/auth/signup", formData);
      set({ user: response.data });
    } catch (error) {
      console.error("Signup failed:", error.response?.data);
      alert(error.response?.data?.message || "Signup failed");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  // Logout function
  logout: async () => {
    try {
      await api.post("/auth/logout");
      set({ user: null });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },

  // Check auth
  checkAuth: async () => {
    try {
      const response = await api.get("/auth/check");
      set({ user: response.data });
    } catch (error) {
      console.error("Not authenticated");
      set({ user: null });
    }
  },
}));
