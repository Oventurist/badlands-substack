import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FTI Consulting","description":"","frontmatter":{"title":"FTI Consulting","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","consulting","clinton-network"],"sources":["raw/america-for-sale-part-2.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/fti-consulting.md","filePath":"entities/fti-consulting.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fti-consulting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fti-consulting" tabindex="-1">FTI Consulting <a class="header-anchor" href="#fti-consulting" aria-label="Permalink to &quot;FTI Consulting&quot;">​</a></h1><p>FTI Consulting is an American business advisory firm. It figures in the Badlands Media essay <a href="/concepts/america-for-sale-part-2">America for Sale — Part 2</a> as the employer <a href="/entities/declan-kelly">Declan Kelly</a> left in July 2009 before taking his unpaid post as <a href="/entities/hillary-clinton">Hillary Clinton</a>&#39;s economic envoy to Northern Ireland.</p><p>According to <em>Politico</em>, Kelly had been working as a top executive for FTI Consulting; upon stepping down he signed a two-year noncompete agreement barring him from doing consulting work for anyone else, while retaining the option to continue working for FTI part-time as a consultant to <a href="/entities/dow-chemical">Dow Chemical</a> and Coca-Cola. He chose to keep those relationships, and between August 2009 and January 2011 Dow paid him $2.4 million through FTI.</p><p>The article identifies this noncompete as the reason <a href="/entities/teneo">Teneo</a> — planned from 2009 by Kelly, <a href="/entities/doug-band">Doug Band</a> and <a href="/entities/paul-keary">Paul Keary</a> — was not formally launched until June 2011, and argues that Kelly spent the intervening two years using his <a href="/entities/state-department">State Department</a> position to make corporate connections that would later benefit both Teneo and the Clintons.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-2" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fti-consulting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ftiConsulting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ftiConsulting as default
};
