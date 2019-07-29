import easyCircularProgress from "./index.vue";

const EasyCircularProgress = {
  install ( Vue ) {
    Vue.component( easyCircularProgress.name, easyCircularProgress );
  },
}

export default EasyCircularProgress

if ( typeof window !== 'undefined' && window.Vue ) {
  window.Vue.use( EasyCircularProgress );
}
