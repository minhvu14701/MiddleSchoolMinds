import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import router from "./router";
import "../src/assets/tailwind.css";
import App from "./App.vue";
const pinia = createPinia();
pinia.use(piniaPersist);
pinia.use(({ store }) => {
  store.router = markRaw(router);
});

createApp(App).use(pinia).use(router).mount("#app");
