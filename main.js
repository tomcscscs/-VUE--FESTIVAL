import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import Landing from "./screens/Landing.vue";
import Login from "./screens/Login.vue";
import Signup from "./screens/Signup.vue";

const app = createApp(App);
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Landing },
    { path: "/login/email", component: Login },
    { path: "/signup/email", component: Signup },
  ],
});
app.use(router);
app.mount("#app");
