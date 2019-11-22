import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Info from '@/components/Info';
import Admin from '@/components/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/home',
      name: 'Info',
      component: Info,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
  ],
});
