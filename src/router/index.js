import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../views/EntryPage.vue";
import GamePage from "../views/GamePage.vue";
import RoolsPage from "../views/RoolsPage.vue";

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
  {
    path: "/rools",
    name: "rools",
    component: RoolsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
