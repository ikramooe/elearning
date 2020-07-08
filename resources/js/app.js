import { InertiaApp } from '@inertiajs/inertia-vue'
import Vue from 'vue'
import Vuetify from '../plugins/vuetify';
import Router from 'vue-router';
window.axios = require('axios');
//require('./bootstrap');
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
import vueVimeoPlayer from 'vue-vimeo-player'



Vue.prototype.$route = (...args) => route(...args).url()
Vue.use(InertiaApp)
Vue.use(Router);
Vue.use(VueToast);
Vue.use(vueVimeoPlayer);
Vue.use(Vuetify, {
    theme: {
            primary: "#002E5B",
            secondary: "#FD4A52",
            info: "#FF9671",
            error: "#b71c1c"
          }
    
});

import UserProfile from './components/profile/UserProfile'
import ProfileSettings from './components/profile/ProfileSettings'
import Courses from './components/profile/Courses'
import AddCourse from './components/dashboard/AddCourse'
import AdminStats from './components/dashboard/AdminStats'
import AdminCourse from './components/dashboard/AdminCourse'
import Dashboard from './Pages/Dashboard'



const outes = [
    { path: '/details', name: 'details', component: UserProfile},
    { path: '/parametres', name: 'parametres', component: ProfileSettings},
    { path: '/cours', name: 'cours', component: Courses},
    {path: '/add', name: 'data', component: AdminCourse},
    
    {
      path: "/das",
  
      component: Dashboard,
      children: [
        { path: "", component: AdminStats },
        
        { path: "addcourse", component: AddCourse },
        { path: "course-overview", component: AdminCourse },
      ],
    },
    
    
    
  ]



const router = new Router({
    routes: outes
  })

const app = document.getElementById('app')

new Vue({
    vuetify:Vuetify,
    router,
    render: h => h(InertiaApp, {
        props: {
            initialPage: JSON.parse(app.dataset.page),
            resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
        },
    }),
}).$mount(app)

