import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cyprus","description":"","frontmatter":{"title":"Cyprus","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cyprus","mediterranean","turkey","greece","geopolitics"],"sources":["raw/badlands-brief-0bd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/cyprus.md","filePath":"entities/cyprus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cyprus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cyprus" tabindex="-1">Cyprus <a class="header-anchor" href="#cyprus" aria-label="Permalink to &quot;Cyprus&quot;">​</a></h1><p>Cyprus is an island in the eastern Mediterranean identified in July 2026 Badlands commentary as a place to watch amid rising tensions between <a href="/entities/turkey">Türkiye</a> and its regional rivals.[1]</p><h2 id="_2026-flashpoint-analysis" tabindex="-1">2026 flashpoint analysis <a class="header-anchor" href="#_2026-flashpoint-analysis" aria-label="Permalink to &quot;2026 flashpoint analysis&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a>, arguing that <a href="/entities/ukraine">Ukraine</a>&#39;s strike on Türkiye-linked gas infrastructure was carried out on <a href="/entities/israel">Israel</a>&#39;s behalf, urged readers to keep an eye on Cyprus alongside the <a href="/entities/turkstream-pipeline">TurkStream</a> pipeline crossing the Black Sea.[1] Turkey&#39;s west coast in the Aegean Sea was named as a further potential target of a <a href="/entities/nato">NATO</a>/Israeli operation.[1] The same analysis anticipated possible Ukraine–Turkey conflict with <a href="/entities/greece">Greece</a> potentially aiding Ukraine.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mossad Bait &amp; Labor Tackles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cyprus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cyprus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cyprus as default
};
