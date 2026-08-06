import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Iranian Oil Company","description":"","frontmatter":{"title":"National Iranian Oil Company","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["oil","iran","nationalization","state-owned-enterprise"],"sources":["raw/badlands-news-brief-24e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-iranian-oil-company.md","filePath":"entities/national-iranian-oil-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-iranian-oil-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-iranian-oil-company" tabindex="-1">National Iranian Oil Company <a class="header-anchor" href="#national-iranian-oil-company" aria-label="Permalink to &quot;National Iranian Oil Company&quot;">​</a></h1><p>The National Iranian Oil Company (NIOC) is the Iranian state oil enterprise created in the course of the nationalization of Iran&#39;s petroleum industry at the beginning of the 1950s.[1]</p><p>After <a href="/entities/mohammad-mosaddegh">Mohammad Mosaddegh</a> won election in 1950 on a promise to nationalize the oil industry and reclaim Iran&#39;s natural resources from Britain, the <a href="/entities/anglo-iranian-oil-company">Anglo-Iranian Oil Company</a> was displaced by NIOC. Britain withdrew its personnel and attempted to sue Iran in international court, but the case was dismissed. A worldwide embargo was then launched against Iran, setting the stage for the <a href="/concepts/1953-iranian-coup">1953 coup</a> that removed Mosaddegh and the Consortium Agreement of 1954 that restored British ownership over the oil fields.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Looms as Game Theory Plays Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-24e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-24e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-iranian-oil-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalIranianOilCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalIranianOilCompany as default
};
