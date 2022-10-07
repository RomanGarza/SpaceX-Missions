import { createApp, provide, h } from "vue";
import App from "./App.vue";
import router from "./router";
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import "./assets/main.css";
import NavBar from "./components/Layout/NavBar.vue";
import MainFooter from "./components/Layout/MainFooter.vue";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://api.spacex.land/graphql/",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
app.component('main-footer', MainFooter);
app.component("nav-bar", NavBar);

app.use(router).mount("#app");
