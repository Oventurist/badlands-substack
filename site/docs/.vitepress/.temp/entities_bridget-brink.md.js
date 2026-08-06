import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bridget Brink","description":"","frontmatter":{"title":"Bridget Brink","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["diplomacy","ukraine","state-department","ambassador"],"sources":["raw/badlands-news-brief-5aa.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bridget-brink.md","filePath":"entities/bridget-brink.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bridget-brink.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bridget-brink" tabindex="-1">Bridget Brink <a class="header-anchor" href="#bridget-brink" aria-label="Permalink to &quot;Bridget Brink&quot;">​</a></h1><p>Bridget Brink is an American diplomat who served as United States Ambassador to Ukraine during the <a href="/concepts/russia-ukraine-war">Russia–Ukraine war</a>.[1]</p><p>In August 2024, following Russia&#39;s retaliatory missile and drone assault on the Kyiv region during the <a href="/concepts/kursk-incursion">Kursk incursion</a>, Brink publicly condemned the attack, stating that it had killed a man and his four-year-old son.[1] The strike involved at least four ballistic missiles against the capital region along with 57 Shahed drones, of which Ukraine&#39;s air force said 53 were intercepted; Ukrainian President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> alleged that Russia had used a North Korean ballistic missile in the assault.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Deep State has a Rough Weekend&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5aa" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5aa</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bridget-brink.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bridgetBrink = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bridgetBrink as default
};
