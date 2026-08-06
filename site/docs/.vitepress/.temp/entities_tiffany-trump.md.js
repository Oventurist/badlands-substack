import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tiffany Trump","description":"","frontmatter":{"title":"Tiffany Trump","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["trump-family","boulos-family"],"sources":["raw/badlands-news-brief-397.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tiffany-trump.md","filePath":"entities/tiffany-trump.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tiffany-trump.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tiffany-trump" tabindex="-1">Tiffany Trump <a class="header-anchor" href="#tiffany-trump" aria-label="Permalink to &quot;Tiffany Trump&quot;">​</a></h1><p><strong>Tiffany Trump</strong> is the youngest daughter of <a href="/entities/donald-trump">Donald Trump</a>.[1] She married Michael Boulos in 2022, with her father walking her down the aisle.[1]</p><h2 id="connection-to-the-boulos-appointment" tabindex="-1">Connection to the Boulos appointment <a class="header-anchor" href="#connection-to-the-boulos-appointment" aria-label="Permalink to &quot;Connection to the Boulos appointment&quot;">​</a></h2><p>Tiffany Trump&#39;s marriage to Michael Boulos made <a href="/entities/massad-boulos">Massad Boulos</a> — a Lebanese-born billionaire businessman — her father-in-law, a relationship highlighted when President-elect Trump announced on December 1, 2024 that Boulos would serve as senior adviser on Arab and Middle Eastern affairs.[1] Badlands anticipated that mainstream coverage would frame the appointment as nepotism because of the family tie, and argued instead that Boulos&#39;s business record in West Africa and his prior service as Trump&#39;s personal liaison to Palestinian President Mahmoud Abbas were the substantive reasons for the pick.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Pardon Me, Blue, but Whose Team Are You Really On?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-397" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-397</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tiffany-trump.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tiffanyTrump = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tiffanyTrump as default
};
