import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/team",
      name: "team",
      component: Team
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    }
  ]
});
