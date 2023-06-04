import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeUtama.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("../views/Aboutus.vue")
    },
    {
      path: '/layanan',
      name: 'Layanan',
      component: () => import("../views/Service.vue")
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import("../views/Blog.vue")
    },
    {
      path: "/blog/:slug",
      name: "blog-detail",
      component: () => import("../views/BlogDetail.vue")
    },
    {
      path: '/kontak',
      name: 'Kontak',
      component: () => import("../views/Kontak.vue")
    },
    {
      path: '/hasil-pencarian/:searchTerm',
      name: 'hasil-pencarian',
      component: () => import("../views/SearchPage.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      redirect: (to) => {
        return `/hasil-pencarian/${to.path.substr(1)}`;
    }
    },
  ]
});


export default router
