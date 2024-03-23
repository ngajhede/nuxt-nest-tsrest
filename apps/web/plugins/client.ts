import { VueQueryPlugin } from "@tanstack/vue-query";
import { initQueryClient } from "@ts-rest/vue-query";
import { contract } from "@repo/api";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueQueryPlugin);

  const client = initQueryClient(contract, {
    baseUrl: "http://localhost:4000",
    baseHeaders: {},
  });

  return {
    provide: {
      client,
    },
  };
});
