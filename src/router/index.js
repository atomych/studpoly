import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../views/EntryPage.vue";
import RoomPage from "../views/RoomPage.vue";
import GamePage from "../views/GamePage.vue";

const routes = [
  {
    path: "/",
    name: "entry",
    component: EntryPage,
  },
  {
    path: "/room",
    name: "room",
    component: RoomPage,
  },
  {
    path: "/game",
    name: "game",
    component: GamePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
