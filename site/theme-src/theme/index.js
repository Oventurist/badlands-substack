import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import IndexBrowser from "./components/IndexBrowser.vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component("IndexBrowser", IndexBrowser);
  },
};
