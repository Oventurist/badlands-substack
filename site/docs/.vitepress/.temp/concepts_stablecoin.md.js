import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stablecoin","description":"","frontmatter":{"title":"Stablecoin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["cryptocurrency","stablecoins","banking","dollar","regulation"],"sources":["raw/badlands-news-brief-50a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/stablecoin.md","filePath":"concepts/stablecoin.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/stablecoin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stablecoin" tabindex="-1">Stablecoin <a class="header-anchor" href="#stablecoin" aria-label="Permalink to &quot;Stablecoin&quot;">​</a></h1><p>A <strong>stablecoin</strong> is a digital token designed to hold a fixed value — typically one U.S. dollar — by holding reserve assets against each coin issued. Stablecoins became the subject of a dedicated U.S. regulatory framework under the <a href="/concepts/genius-act">GENIUS Act</a>, which requires issuers to back their coins with secure, short-term assets such as U.S. Treasuries.[1]</p><h2 id="regulatory-treatment" tabindex="-1">Regulatory treatment <a class="header-anchor" href="#regulatory-treatment" aria-label="Permalink to &quot;Regulatory treatment&quot;">​</a></h2><p>Under the framework described in coverage of the legislation, the permissible reserve set is deliberately narrow and issuers are barred from paying interest to holders.[1] Supporters expect regulatory clarity to legitimize the sector and widen adoption; critics counter that the ban on interest payments leaves stablecoins at a competitive disadvantage against bank deposits and money market funds, which can pay yield.[1]</p><h2 id="strategic-interpretations" tabindex="-1">Strategic interpretations <a class="header-anchor" href="#strategic-interpretations" aria-label="Permalink to &quot;Strategic interpretations&quot;">​</a></h2><p>Independent commentators in the Badlands orbit have framed regulated U.S. stablecoins as a structural threat to the commercial banking model rather than a niche crypto product. Burning Bright argued that dollar stablecoins would displace bank intermediation, serve as a backstop for a &quot;new&quot; dollar, and accelerate capital flows into bitcoin.[1] The Treasury-backed reserve requirement is read in this analysis as a mechanism that channels stablecoin growth directly into demand for U.S. government debt.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manipulated Maps, Downed Planes, &amp; A Very Stable Genius&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-50a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-50a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/stablecoin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stablecoin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stablecoin as default
};
