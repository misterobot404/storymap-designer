
require('./bootstrap');
window.Vue = require('vue');

//import example from './components/ExampleComponent.vue'
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({ el: '#app' });

/*
new Vue({
    render: h => h(ExampleComponent),
}).$mount('#app')
*/