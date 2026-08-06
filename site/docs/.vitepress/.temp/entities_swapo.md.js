import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SWAPO","description":"","frontmatter":{"title":"SWAPO","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["namibia","political-party","africa","elections"],"sources":["raw/badlands-news-brief-747.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/swapo.md","filePath":"entities/swapo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/swapo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="swapo" tabindex="-1">SWAPO <a class="header-anchor" href="#swapo" aria-label="Permalink to &quot;SWAPO&quot;">​</a></h1><p>SWAPO is the ruling left-wing political party of Namibia.[1]</p><p>The party dominates Namibian national and regional politics, holding office at the constituency level across the country&#39;s regions.[1] Among its longer-serving local officeholders is <a href="/entities/adolf-hitler-uunona">Adolf Hitler Uunona</a>, a SWAPO councilor in the Ompundja constituency of the Oshana region since 2004, who won about 85 percent of the vote there in 2020 and stood for re-election in the regional elections held on November 26, 2025.[1] Uunona&#39;s candidacy attracted international press coverage on account of his name, which his father gave him in reference to the Nazi leader and which Uunona has repeatedly disavowed in ideological terms.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Afghanis Activate, Witch Hunts End, &amp; Hitler Launches Re-Election Campaign&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-747" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-747</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/swapo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const swapo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  swapo as default
};
