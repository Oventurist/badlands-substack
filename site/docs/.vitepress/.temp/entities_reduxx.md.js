import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reduxx","description":"","frontmatter":{"title":"Reduxx","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","investigative-journalism","gender-medicine"],"sources":["raw/badlands-news-brief-31b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/reduxx.md","filePath":"entities/reduxx.md","lastUpdated":null}');
const _sfc_main = { name: "entities/reduxx.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reduxx" tabindex="-1">Reduxx <a class="header-anchor" href="#reduxx" aria-label="Permalink to &quot;Reduxx&quot;">​</a></h1><p>Reduxx is an independent investigative outlet covering gender ideology, women&#39;s rights and child safeguarding, cited by Badlands Media as the source of original reporting on the transgender medical establishment.[1]</p><h2 id="march-2024-wpath-investigation" tabindex="-1">March 2024 WPATH investigation <a class="header-anchor" href="#march-2024-wpath-investigation" aria-label="Permalink to &quot;March 2024 WPATH investigation&quot;">​</a></h2><p>Reduxx published an exclusive report in March 2024 revealing that <a href="/entities/laura-a-jacobs">Laura A. Jacobs</a>, a <a href="/entities/wpath">WPATH</a>-certified psychotherapist, had served on the committee that established the organization&#39;s most recent <a href="/concepts/wpath-standards-of-care">Standards of Care</a> and had influenced guidance on adolescent gender dysphoria, despite having authored an anthology chapter promoting BDSM practices including &quot;age play&quot; and &quot;genital torture.&quot;[1] The reporting was picked up in the Badlands News Brief and paired with commentary from <a href="/entities/simon-esler">Simon Esler</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Government Spending &amp; Unprecedented Unhappiness&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-31b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-31b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/reduxx.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reduxx = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reduxx as default
};
