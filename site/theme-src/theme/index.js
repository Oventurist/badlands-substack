import DefaultTheme from "vitepress/theme";
// GraphView removed with the graph page (its d3 dependency alone is ~750KB
// of client bundle, a major part of the build's peak memory at the bundling
// phase on 11K-page sites).
import IndexBrowser from "./components/IndexBrowser.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("IndexBrowser", IndexBrowser);
  },
};
