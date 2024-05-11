import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../views/EntryPage.vue";
import GamePage from "../views/GamePage.vue";

const routes = [
  {
    path: "/",
    name: "entry",
    component: EntryPage,
  },
  {
    path: "/game&id=:roomID",
    name: "game",
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
