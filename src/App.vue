<template>
  <v-app id="inspire">
    <template v-if="isLoggedIn">
      <v-app-bar app color="white" flat>
        <v-container class="py-0 fill-height">
          <v-btn v-for="link in links" :key="link.href" text :to="link.href">
            {{ link.text }}
          </v-btn>

          <v-spacer></v-spacer>

          <v-responsive max-width="260">
            <v-text-field
              dense
              flat
              hide-details
              rounded
              solo-inverted
            ></v-text-field>
          </v-responsive>

          <v-btn color="error" outlined class="ml-2" @click="logOutUser">
            Logout
          </v-btn>
        </v-container>
      </v-app-bar>

      <v-main class="grey lighten-3">
        <v-container>
          <v-row>
            <v-col cols="2">
              <v-sheet rounded="lg">
                <v-list color="transparent">
                  <v-list-item
                    v-for="deck in currentUser.decks"
                    :key="deck.id"
                    :to="'/deck/' + deck.id"
                    link
                  >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ deck.title }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-sheet>
            </v-col>

            <v-col>
              <v-sheet min-height="70vh" rounded="lg">
                <router-view></router-view>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </template>
    <template v-else>
      <v-btn @click="logInUser"> Log in</v-btn>
    </template>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapState } from "pinia";
import { useCurrentUserStore } from "@/stores/current-user/store";

const links: Array<{ text: string; href?: string }> = [
  {
    text: "Home",
    href: "/",
  },
  { text: "Collection" },
  { text: "Decks" },
  { text: "Scanner" },
  { text: "Deck 1", href: "/deck/1" },
];

export default Vue.extend({
  name: "App",
  data: function () {
    return {
      links,
    };
  },
  computed: {
    ...mapState(useCurrentUserStore, ["isLoggedIn", "currentUser"]),
  },
  components: {},
  mounted: function () {
    Vue.set(links, 0, { text: "Home CD", href: "/" }); // Checking how CD in Vue works and why/when Vue.set is necessary
  },
  methods: {
    ...mapActions(useCurrentUserStore, ["logIn", "logOut"]),
    logInUser() {
      this.logIn();
    },
    logOutUser() {
      this.logOut();
    },
  },
});
</script>
