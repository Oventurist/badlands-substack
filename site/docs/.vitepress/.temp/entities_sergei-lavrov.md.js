import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sergei Lavrov","description":"","frontmatter":{"title":"Sergei Lavrov","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","diplomacy","foreign-ministry","syria"],"sources":["raw/badlands-news-brief-86f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sergei-lavrov.md","filePath":"entities/sergei-lavrov.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sergei-lavrov.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sergei-lavrov" tabindex="-1">Sergei Lavrov <a class="header-anchor" href="#sergei-lavrov" aria-label="Permalink to &quot;Sergei Lavrov&quot;">​</a></h1><p>Sergei Lavrov is the Foreign Minister of the Russian Federation and the country&#39;s principal public voice on international affairs.[1]</p><p>In December 2024, following the collapse of the Syrian government and the departure of Bashar al-Assad to Moscow, Western outlets reported that Russia was abandoning its naval base at <a href="/entities/tartus">Tartus</a> and the Hmeimim airbase in <a href="/entities/latakia">Latakia</a>.[1] Lavrov publicly clarified that Russia was not abandoning either installation, a statement Badlands commentary treated as an important corrective to Western reporting on the Syrian transition.[1] The bases remained the focus of intense activity in the following days, with Russian ships reportedly dispatched to Tartus to remove weapons from Cold War–era strategic caches, and Israeli airstrikes hitting the same facilities on December 15–16.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Media Apologies, Fake &amp; Gay Drones and Trump Appointments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-86f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-86f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sergei-lavrov.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sergeiLavrov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sergeiLavrov as default
};
