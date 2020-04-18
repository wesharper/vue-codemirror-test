import Vue from "vue";
import App from "./App.vue";
import VueCodemirror from "vue-codemirror";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/material.css";

Vue.config.productionTip = false;

Vue.use(VueCodemirror);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
