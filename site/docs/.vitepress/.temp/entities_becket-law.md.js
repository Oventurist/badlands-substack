import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Becket Law","description":"","frontmatter":{"title":"Becket Law","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-firm","religious-liberty","litigation"],"sources":["raw/badlands-news-brief-053.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/becket-law.md","filePath":"entities/becket-law.md","lastUpdated":null}');
const _sfc_main = { name: "entities/becket-law.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="becket-law" tabindex="-1">Becket Law <a class="header-anchor" href="#becket-law" aria-label="Permalink to &quot;Becket Law&quot;">​</a></h1><p>Becket Law, also known as the Becket Fund for Religious Liberty, is a public-interest law firm that litigates religious-liberty cases in the United States.[1]</p><h2 id="burke-v-walsh" tabindex="-1">Burke v. Walsh <a class="header-anchor" href="#burke-v-walsh" aria-label="Permalink to &quot;Burke v. Walsh&quot;">​</a></h2><p>In August 2023 Becket represented Mike and Kitty Burke, a Catholic couple from <a href="/entities/massachusetts">Massachusetts</a>, in <a href="/concepts/burke-v-walsh">Burke v. Walsh</a>, a lawsuit filed against the state on August 8 after the Commonwealth denied the couple the ability to foster children on account of their conservative Catholic beliefs about marriage and gender.[1] In its press release announcing the case, Becket described the Burkes&#39; background as an Iraq war veteran and a former paraprofessional for special-needs children who run a small business and perform music for Mass, and emphasized that they had completed training in 2022 along with extensive interviews and a home study.[1] The firm framed the denial against the backdrop of a severe Massachusetts foster-care shortage in which more than 1,500 children lacked foster families and the state had resorted to housing children in hospitals for weeks at a time.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pelosi&#39;s Panic, Nuland Narratives &amp; All&#39;s Fair in Lawfare&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-053" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-053</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/becket-law.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const becketLaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  becketLaw as default
};
