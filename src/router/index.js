import { createRouter, createWebHistory } from "vue-router";
import EntryPage from "../views/EntryPage.vue";
import RoomPage from "../views/RoomPage.vue";
import GamePage from "../views/GamePage.vue";
import CreatePage from "../views/CreatePage.vue";

const routes = [
  {
    path: "/",
    name: "entry",
    component: EntryPage,
  },
  {
    path: "/room&id=:roomID",
    name: "room",
    component: RoomPage,
  },
  {
    path: "/game&id=:roomID",
    name: "game",
    component: GamePage,
  },
  {
    path: "/create",
    name: "create",
    component: CreatePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
