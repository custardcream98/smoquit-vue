import { fireAuth } from "@/lib/firebase";
import type { User } from "@firebase/auth";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuth = defineStore("auth", () => {
  const _user = ref<User | null>(null);

  fireAuth.onAuthStateChanged((user) => {
    _user.value = user;
  });

  return {
    user: _user,
  };
});