import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Biohaven","description":"","frontmatter":{"title":"Biohaven","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pharmaceuticals","kickbacks","medicare-fraud","nurtec"],"sources":["raw/badlands-news-brief-7c9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/biohaven.md","filePath":"entities/biohaven.md","lastUpdated":null}');
const _sfc_main = { name: "entities/biohaven.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="biohaven" tabindex="-1">Biohaven <a class="header-anchor" href="#biohaven" aria-label="Permalink to &quot;Biohaven&quot;">​</a></h1><p>Biohaven is a pharmaceutical company, acquired by <a href="/entities/pfizer">Pfizer</a> in October 2022, that developed and marketed the migraine medication Nurtec ODT.[1]</p><h2 id="anti-kickback-allegations" tabindex="-1">Anti-kickback allegations <a class="header-anchor" href="#anti-kickback-allegations" aria-label="Permalink to &quot;Anti-kickback allegations&quot;">​</a></h2><p>The Justice Department announced in late January 2025 that Biohaven had paid improper remuneration — including speaker honoraria and meals at high-end restaurants — to healthcare professionals in order to induce them to prescribe Nurtec ODT more often, in violation of the federal anti-kickback statute.[1] The scheme ran from March 1, 2020 through September 30, 2022, ending shortly before Pfizer&#39;s acquisition of the company.[1] Pfizer agreed to pay nearly $60 million to resolve the charges, which involved defrauding Medicare and other federal health care programs.[1] The drug had previously been promoted publicly by the singer Lady Gaga.[1]</p><p>Badlands commentary characterized the arrangement as Pfizer having &quot;essentially bribed&quot; doctors to prescribe its medication, noted that no individual appeared likely to face criminal charges, and argued that a $60 million fine is negligible for a company of Pfizer&#39;s size.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Opposition Intensifies. So Does Winning.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7c9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7c9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/biohaven.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const biohaven = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  biohaven as default
};
