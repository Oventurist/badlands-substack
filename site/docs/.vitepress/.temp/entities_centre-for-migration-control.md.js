import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Centre for Migration Control","description":"","frontmatter":{"title":"Centre for Migration Control","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","immigration","research","crime-statistics"],"sources":["raw/badlands-news-brief-25f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/centre-for-migration-control.md","filePath":"entities/centre-for-migration-control.md","lastUpdated":null}');
const _sfc_main = { name: "entities/centre-for-migration-control.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="centre-for-migration-control" tabindex="-1">Centre for Migration Control <a class="header-anchor" href="#centre-for-migration-control" aria-label="Permalink to &quot;Centre for Migration Control&quot;">​</a></h1><p>The Centre for Migration Control is a British research organisation that produced a first-of-its-kind analysis of migrant crime statistics in the United Kingdom, published in January 2025.[1]</p><p>Using data obtained from the <a href="/entities/home-office">Home Office</a> and the Office for National Statistics through Freedom of Information requests, the Centre found that foreigners are more than three times as likely to be arrested for sex crimes in the UK as British citizens. Police in England and Wales arrested more than 9,000 foreign nationals for sexual offences between January and October of the previous year, representing 26.1% of an estimated 35,000 total arrests for sexual offences. In the City of London, foreign nationals accounted for almost 67% of arrests for sexual offences.[1]</p><p>The report appeared amid claims that the British government had purposefully suppressed information on migrant crime statistics, and amid renewed uproar over institutional cover-ups in the <a href="/concepts/grooming-gangs">grooming gangs</a> scandal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: City States, Sabotage, &amp; Soliloquies On Sanctions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-25f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-25f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/centre-for-migration-control.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const centreForMigrationControl = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  centreForMigrationControl as default
};
