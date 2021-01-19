import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';

// Views
import AppComponent from './app.vue';

// Pages
import Home from './pages/home.vue';

// ---------------------------------------------------------------------------------------------------------------------
// Bootstrap Vue
// ---------------------------------------------------------------------------------------------------------------------

import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

// ---------------------------------------------------------------------------------------------------------------------
// Vue Router
// ---------------------------------------------------------------------------------------------------------------------

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/home', name: 'Home', component: Home },
        { path: '/', name: 'Home', component: Home }
    ]
});

//----------------------------------------------------------------------------------------------------------------------
// App Setup
//----------------------------------------------------------------------------------------------------------------------

const App = Vue.component('app', AppComponent);
const app = new App({
    el: '#main-app',
    router,
});