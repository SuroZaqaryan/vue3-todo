import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/home/HomePage.vue';
import Login from '@/views/login/LoginPage.vue';
import Test from '@/views/test/TestPage.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isAuth: false
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      isAuth: false
    }
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      isAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.isAuth)) {
    const user = localStorage.getItem('user')
    if (!user) {
      next('/login')
      return 
    } else {
      const parsedUser = JSON.parse(user)
      if (!parsedUser) {
        next('/login')
        return 
      }
    }
  }
  next()
})

export default router;