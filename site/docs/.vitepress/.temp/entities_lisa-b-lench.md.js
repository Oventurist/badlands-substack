import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lisa B. Lench","description":"","frontmatter":{"title":"Lisa B. Lench","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","california","courts"],"sources":["raw/badlands-news-brief-5b3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lisa-b-lench.md","filePath":"entities/lisa-b-lench.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lisa-b-lench.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lisa-b-lench" tabindex="-1">Lisa B. Lench <a class="header-anchor" href="#lisa-b-lench" aria-label="Permalink to &quot;Lisa B. Lench&quot;">​</a></h1><p>Lisa B. Lench is the Los Angeles judge who presided over the California criminal trial and sentencing of former film producer <a href="/entities/harvey-weinstein">Harvey Weinstein</a>.[1]</p><p>At a hearing in downtown Los Angeles on the morning of February 23, 2023, Lench sentenced Weinstein to 16 years in prison, to be served consecutively after the 23-year sentence he was already serving in New York.[1] Before sentence was pronounced, Weinstein addressed the court directly, telling Lench, &quot;I maintain that I&#39;m innocent.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Election Laws &amp; Justice for the Exploited&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lisa-b-lench.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lisaBLench = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lisaBLench as default
};
