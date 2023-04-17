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
      // TODO: Connect to BE and add logIn logic,
      //  code below is what happens to meta at the end of the successful request,
      //  currentUser is already mocked
      this.meta = {
        loading: false,
        loaded: true,
        failed: false,
      };
    },
    logOut() {
      // TODO: Connect to BE and add logOut logic,
      //  code below shows what happens to meta at the end of the successful logOut request,
      //  currentUser is not cleared to keep it mocked
      this.meta = {
        loading: false,
        loaded: false,
        failed: false,
      };
    },
    fetch() {
      fetchCurrentUser().then(({ data }) => (this.currentUser = data));
    },
  },
});
