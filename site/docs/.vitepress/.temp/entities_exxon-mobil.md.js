import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Exxon Mobil","description":"","frontmatter":{"title":"Exxon Mobil","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","corporations","cuba","litigation","supreme-court"],"sources":["raw/badlands-brief-b34.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/exxon-mobil.md","filePath":"entities/exxon-mobil.md","lastUpdated":null}');
const _sfc_main = { name: "entities/exxon-mobil.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="exxon-mobil" tabindex="-1">Exxon Mobil <a class="header-anchor" href="#exxon-mobil" aria-label="Permalink to &quot;Exxon Mobil&quot;">​</a></h1><p><strong>Exxon Mobil Corporation</strong> is one of the largest American oil and gas companies.[1] Among its long-running legal claims are those arising from property confiscated by the Cuban government after the 1959 revolution.[1]</p><h2 id="exxon-mobil-corp-v-corporacion-cimex-s-a" tabindex="-1">Exxon Mobil Corp. v. Corporación Cimex, S.A. <a class="header-anchor" href="#exxon-mobil-corp-v-corporacion-cimex-s-a" aria-label="Permalink to &quot;Exxon Mobil Corp. v. Corporación Cimex, S.A.&quot;">​</a></h2><p>On June 23, 2026, the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> decided Exxon Mobil Corp. v. Corporación Cimex, S.A. (Cuba) (No. 24-699), holding in a divided decision that the <a href="/concepts/helms-burton-act">Helms-Burton Act</a> itself abrogates the sovereign immunity of Cuban agencies and instrumentalities for private suits alleging trafficking in confiscated United States property.[1] The ruling opened a clearer path for American claimants to pursue Cuban state entities in federal court.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Old Guard Is Very Confused About What&#39;s Happening to Them&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b34" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b34</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/exxon-mobil.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const exxonMobil = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  exxonMobil as default
};
