import Vue from 'vue';
import VueRouter from 'vue-router';
import AnimeList from "../views/AnimeList";
import mangaList from "../views/MangaList";
import personalList from "../views/PersonalList";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'animeList',
    component: AnimeList,
    alias: ["/anime", "*"]
  },
  {
    path: '/manga',
    name: 'mangaList',
    component: mangaList
  },
  {
    path: '/personallist',
    name: 'personalList',
    component: personalList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
