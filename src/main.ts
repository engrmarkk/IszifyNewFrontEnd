import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./styles/main.css";
import { createHead } from "@vueuse/head";
import "ionicons/icons";
import "animate.css";

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

import Popper from "vue3-popper";

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const pinia = createPinia();
const app = createApp(App);
// Create the head instance
const head = createHead();

// Tell Vue to use it
app.use(head);
app.use(pinia);
app.use(Toast);
app.use(VueAwesomePaginate);
app.use(router);
// eslint-disable-next-line vue/multi-word-component-names
app.component("Popper", Popper);
app.mount("#app");
