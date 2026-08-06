import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"William Knox D'Arcy","description":"","frontmatter":{"title":"William Knox D'Arcy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["oil","britain","persia","concessions"],"sources":["raw/badlands-news-brief-24e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/william-knox-darcy.md","filePath":"entities/william-knox-darcy.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/william-knox-darcy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-knox-d-arcy" tabindex="-1">William Knox D&#39;Arcy <a class="header-anchor" href="#william-knox-d-arcy" aria-label="Permalink to &quot;William Knox D&#39;Arcy&quot;">​</a></h1><p>William Knox D&#39;Arcy was the British speculator who obtained the first major petroleum concession in Persia and founded the company that became BP.[1]</p><p>In 1901 D&#39;Arcy negotiated a petroleum concession with Mozzafar Al-Din, the Shah of Persia. The D&#39;Arcy Concession gave him the exclusive right to prospect for oil, which was finally discovered at the Masjed Soleiman oil field in 1908 — the first oil discovery in the Middle East. D&#39;Arcy formed the <a href="/entities/anglo-iranian-oil-company">Anglo-Persian Oil Company</a> to begin extraction, marking the first enterprise of its kind in the region; in 1914 the British government purchased 51% of the company, effectively nationalizing it.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Looms as Game Theory Plays Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-24e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-24e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-knox-darcy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamKnoxDarcy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamKnoxDarcy as default
};
