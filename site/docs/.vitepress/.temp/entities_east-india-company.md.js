import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"East India Company","description":"","frontmatter":{"title":"East India Company","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["british-empire","colonialism","middle-east","world-war-i"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/east-india-company.md","filePath":"entities/east-india-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/east-india-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="east-india-company" tabindex="-1">East India Company <a class="header-anchor" href="#east-india-company" aria-label="Permalink to &quot;East India Company&quot;">​</a></h1><p>The East India Company was the chartered English trading corporation that became the instrument of British commercial and territorial power across Asia. In the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> it appears alongside the British Crown as one of the two agencies said to have drawn the boundaries of the post-Ottoman Middle East.</p><p>The source argues that the mixed <a href="/concepts/sunni-islam">Sunni</a> and <a href="/concepts/shia-islam">Shia</a> composition of Afghanistan and Iraq is not an organic outcome but an &quot;arbitrary condition&quot; intentionally created by the British Crown and the East India Company at the end of the First World War. This claim sits within the essay&#39;s broader thesis that <a href="/entities/british-intelligence">british-intelligence</a> — and later, in the author&#39;s account, its protégés the <a href="/entities/cia">cia</a> and <a href="/entities/mossad">mossad</a> — have spent more than two hundred years manipulating the region with nefarious intent, often as gamesmanship between competing factions within the British imperial hierarchy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/east-india-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eastIndiaCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eastIndiaCompany as default
};
