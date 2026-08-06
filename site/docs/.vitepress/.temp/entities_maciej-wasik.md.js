import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Maciej Wasik","description":"","frontmatter":{"title":"Maciej Wasik","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["poland","belarus","border-security","nato"],"sources":["raw/badlands-news-brief-88b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/maciej-wasik.md","filePath":"entities/maciej-wasik.md","lastUpdated":null}');
const _sfc_main = { name: "entities/maciej-wasik.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maciej-wasik" tabindex="-1">Maciej Wasik <a class="header-anchor" href="#maciej-wasik" aria-label="Permalink to &quot;Maciej Wasik&quot;">​</a></h1><p><strong>Maciej Wasik</strong> is a Polish politician who served as a deputy interior minister in the government of <a href="/entities/mateusz-morawiecki">Mateusz Morawiecki</a>.[1] In August 2023 he announced to Poland&#39;s state news agency PAP that <a href="/entities/poland">Poland</a> would send an additional 2,000 troops to reinforce its border with <a href="/entities/belarus">Belarus</a> amid heightened tensions related to the war in Ukraine.[1]</p><p>Wasik said that the deployment was double what the country&#39;s Border Guard had requested and that the reinforcements would arrive within two weeks.[1] He did not specify to PAP what had prompted the decision, though the announcement came as concerns mounted in Poland over the presence of mercenaries from Russia&#39;s <a href="/entities/wagner-group">Wagner</a> private military company in neighboring Belarus.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Trump Hunt &amp; the Biden Blitz&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-88b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-88b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maciej-wasik.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maciejWasik = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maciejWasik as default
};
