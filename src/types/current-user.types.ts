import type { Deck } from "@/types/deck.types";

export type CurrentUser = {
  id: number;
  name: string;
  decks: Deck[];
};
