import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Todd Gilbert","description":"","frontmatter":{"title":"Todd Gilbert","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["virginia","republicans","house-of-delegates"],"sources":["raw/badlands-news-brief-095.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/todd-gilbert.md","filePath":"entities/todd-gilbert.md","lastUpdated":null}');
const _sfc_main = { name: "entities/todd-gilbert.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="todd-gilbert" tabindex="-1">Todd Gilbert <a class="header-anchor" href="#todd-gilbert" aria-label="Permalink to &quot;Todd Gilbert&quot;">​</a></h1><p>Todd Gilbert is a Republican politician who served as Speaker of the Virginia House of Delegates and who became the subject of violent text messages sent in 2022 by Democrat <a href="/entities/jay-jones">Jay Jones</a>.[1]</p><h2 id="_2022-texts-controversy" tabindex="-1">2022 texts controversy <a class="header-anchor" href="#_2022-texts-controversy" aria-label="Permalink to &quot;2022 texts controversy&quot;">​</a></h2><p>In messages to Del. <a href="/entities/carrie-coyner">Carrie Coyner</a>, Jones wrote &quot;Three people, two bullets,&quot; and named &quot;Gilbert, hitler, and pol pot,&quot; stating that &quot;Gilbert gets two bullets to the head&quot; and that if placed with the two worst people one knows, &quot;he receives both bullets every time.&quot;[1] The texts resurfaced in early October 2025, roiling the final stretch of Jones&#39; campaign against Attorney General <a href="/entities/jason-miyares">Jason Miyares</a>, though Jones ultimately won the race.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Shutdown Showcase, Attempted Tariff Takedowns, &amp; the Launch of Mammany Hall&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-095" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-095</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/todd-gilbert.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const toddGilbert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  toddGilbert as default
};
