import DefaultTheme from "vitepress/theme";
import GraphView from "./components/GraphView.vue";
import IndexBrowser from "./components/IndexBrowser.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("GraphView", GraphView);
    app.component("IndexBrowser", IndexBrowser);
  },
};
