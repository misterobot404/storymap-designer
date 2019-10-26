
// First we will load all of this project's JavaScript dependencies which includes Vue and other libraries.
window.Vue = require('vue');
import store from './store/store'
import Constructor from "./components/Constructor";

// Next, we will create a fresh Vue application instance and attach it to the page.
// Remember that global registration must take place before the root Vue instance is created (with new Vue).

new Vue({
    el: '#app',
    store,
    beforeCreate() {
        this.$store.dispatch("getMap");
    },
    render: h => h(Constructor)
});
