import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import Missions from "../views/Missions.vue";
import MissionInfo from "../views/MissonInfo.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/missions",
      name: "Missions",
      component: Missions,
      props: true,
    },
    {
      path: "/missions/:id",
      name: "MissionInfo",
      component: MissionInfo,
      props: true,
    },
  ],
});

export default router;
