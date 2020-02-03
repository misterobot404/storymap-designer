// First we will load all of this project's JavaScript dependencies which includes Vue and other libraries.
import bootstrap from 'bootstrap' // bootstrap.js + jquery + popper.js
window.bootstrap = bootstrap;
import vue from "vue";
window.Vue = vue;
import store from './store/store'
// Без этого не работает динамический импорт WTF)))))))))))))
require("./components/Constructor/ConstructorControlPanel");

// Next, we will create a fresh Vue application instance and attach it to the page.
// Remember that global registration must take place before the root Vue instance is created (with new Vue).
new Vue({
    el: '#app',
    components: {
        Manager: () => import(/* webpackChunkName: "Manager" */ './components/Manager'),
        Constructor: () => import(/* webpackChunkName: "Constructor" */ './components/Constructor'),
        Viewer: () => import(/* webpackChunkName: "Viewer" */ './components/Viewer'),
    },
    store,
    beforeMount() {
        this.$store.dispatch('initStore');
    }
});
