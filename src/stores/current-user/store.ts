import { defineStore } from "pinia";
import type { CurrentUser } from "@/types/current-user.types";
import { getInitialResourceState } from "@/stores/helpers";
import { fetchCurrentUser } from "@/stores/current-user/repo";

type CurrentUserState = { currentUser: CurrentUser | null };
export const useCurrentUserStore = defineStore({
  id: "currentUser",
  state: () =>
    getInitialResourceState<CurrentUserState, true>(
      {
        currentUser: {
          id: 1,
          name: "Test user",
          decks: [{ id: 1, title: "Test deck", cards: [] }],
        }, // Mocked data for testing components only
      },
      true
    ),
  getters: {
    isLoggedIn(state) {
      return state.meta.loaded && !!state.currentUser;
    },
  },
  actions: {
    logIn() {
      this.meta.loaded = true;
    },
    logOut() {
      this.meta.loaded = false;
    },
    fetch() {
      fetchCurrentUser().then(({ data }) => (this.currentUser = data));
    },
  },
});
