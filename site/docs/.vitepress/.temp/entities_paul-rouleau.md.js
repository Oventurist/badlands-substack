import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Rouleau","description":"","frontmatter":{"title":"Paul Rouleau","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["canada","judiciary","emergencies-act","public-inquiry"],"sources":["raw/badlands-news-brief-11c.md"],"confidence":"low"},"headers":[],"relativePath":"entities/paul-rouleau.md","filePath":"entities/paul-rouleau.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-rouleau.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-rouleau" tabindex="-1">Paul Rouleau <a class="header-anchor" href="#paul-rouleau" aria-label="Permalink to &quot;Paul Rouleau&quot;">​</a></h1><p>Paul Rouleau is the Canadian jurist who led the public commission examining the <a href="/entities/justin-trudeau">Trudeau</a> government&#39;s invocation of the <a href="/concepts/emergencies-act">Emergencies Act</a> against the <a href="/concepts/freedom-convoy">Freedom Convoy</a>, concluding that the invocation was justified.[1]</p><p>Badlands writer <a href="/entities/simon-esler">Simon Esler</a> described Rouleau as a Liberal justice who used &quot;a highly politicized commission&quot; to declare that Trudeau was &quot;entirely justified in his draconian invocation,&quot; and argued that the finding had convinced many Canadians that citizen litigation against the government was hopeless.[1] Federal Court Justice <a href="/entities/richard-mosley">Richard Mosley</a>&#39;s January 2024 ruling that the invocation was unreasonable and unjustified reopened those pathways.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Turn on Biden Begins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-rouleau.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulRouleau = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulRouleau as default
};
