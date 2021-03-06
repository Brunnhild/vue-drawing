import Main from './src/components/Main'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('vue-drawing', Main)
}

Main.install = function (Vue) {
  Vue.component(Main.name, Main)
};

export default Main
