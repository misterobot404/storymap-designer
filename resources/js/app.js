
require('./bootstrap');
window.Vue = require('vue');
Vue.component('constructor', require('./components/Constructor').default);

//********************
import { Icon }  from 'leaflet'
import 'leaflet/dist/leaflet.css'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
//**********************


new Vue({ el: '#app' });

/*
import constructor from './components/Constructor.vue'

new Vue({
    render: h => h(constructor),
}).$mount('#app');
*/
