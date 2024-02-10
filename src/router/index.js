import { createRouter, createWebHistory } from "vue-router";
import Intro from "../views/Intro.vue";
import Home from "../views/Home.vue";
import Poem from "../views/Poem.vue";
import Library from "../views/Library.vue";
import Cinema from "../views/Cinema.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/library",
      name: "library",
      component: Library,
    },
    {
      path: "/Cinema",
      name: "cinema",
      component: Cinema,
    },
    {
      path: "/first",
      name: "first",
      component: Poem,
    },
  ],
});

export default router;
