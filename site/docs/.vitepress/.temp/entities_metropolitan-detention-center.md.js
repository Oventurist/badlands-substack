import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Metropolitan Detention Center","description":"","frontmatter":{"title":"Metropolitan Detention Center","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["prisons","brooklyn","federal-custody"],"sources":["raw/badlands-news-brief-2ad.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/metropolitan-detention-center.md","filePath":"entities/metropolitan-detention-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/metropolitan-detention-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="metropolitan-detention-center" tabindex="-1">Metropolitan Detention Center <a class="header-anchor" href="#metropolitan-detention-center" aria-label="Permalink to &quot;Metropolitan Detention Center&quot;">​</a></h1><p>The Metropolitan Detention Center (MDC) is a federal jail in Brooklyn, New York, used to hold defendants in high-profile federal cases in the Southern and Eastern Districts of New York.[1]</p><p>In September 2024 reporting revealed that <a href="/entities/sean-combs">Sean &quot;Diddy&quot; Combs</a> and convicted crypto fraudster <a href="/entities/sam-bankman-fried">Sam Bankman-Fried</a> were bunking in the same dormitory-style room at the facility.[1] Combs had been held at MDC for almost a week after being denied bail on federal sex trafficking and racketeering charges, while Bankman-Fried had been imprisoned there since the previous year serving a 25-year fraud sentence.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: New Gotham City, Iranian Mysteries &amp; Wars Galore&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2ad" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2ad</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/metropolitan-detention-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const metropolitanDetentionCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  metropolitanDetentionCenter as default
};
