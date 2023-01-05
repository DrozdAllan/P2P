import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(), routes: [{
        path: "/", component: () => import("../views/Home.vue"), name: "Home"
    }, {
        path: "/about", component: () => import("../views/About.vue"), name: "About"
    }, {
        path: "/game/:id", component: () => import("../views/Detail.vue"), name: "Detail"
    }, {
        path: "/:pathMatch(.*)*", redirect: {name: 'Home'}
    },],
});

export default router;
