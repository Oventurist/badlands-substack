import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brookfield","description":"","frontmatter":{"title":"Brookfield","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","real-estate","badlands-news-brief"],"sources":["raw/badlands-news-brief-001.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brookfield.md","filePath":"entities/brookfield.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brookfield.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brookfield" tabindex="-1">Brookfield <a class="header-anchor" href="#brookfield" aria-label="Permalink to &quot;Brookfield&quot;">​</a></h1><p>Brookfield is a commercial real estate (CRE) giant whose asset management funds hold large office portfolios in major U.S. markets.[1]</p><p>In April 2023, a fund belonging to Brookfield defaulted on a $161.4 million mortgage covering twelve office buildings in Washington, D.C.[1] The loan was transferred to a special servicer that was working with &quot;the borrower to execute a pre-negotiation agreement and to determine the path forward.&quot;[1] The default became a leading headline in the developing <a href="/concepts/commercial-real-estate-crisis">commercial real estate crisis</a>, arriving amid stress in the regional banking sector and a $400 billion wall of CRE debt maturities due that year.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: FOX Guarding the Hen House?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-001" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-001</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brookfield.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brookfield = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brookfield as default
};
