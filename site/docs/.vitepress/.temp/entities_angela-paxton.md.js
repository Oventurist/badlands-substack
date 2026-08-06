import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Angela Paxton","description":"","frontmatter":{"title":"Angela Paxton","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","republican-party","state-legislature"],"sources":["raw/badlands-news-brief-627.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/angela-paxton.md","filePath":"entities/angela-paxton.md","lastUpdated":null}');
const _sfc_main = { name: "entities/angela-paxton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="angela-paxton" tabindex="-1">Angela Paxton <a class="header-anchor" href="#angela-paxton" aria-label="Permalink to &quot;Angela Paxton&quot;">​</a></h1><p>Angela Paxton is a Republican member of the Texas Senate and the wife of Texas Attorney General <a href="/entities/ken-paxton">Ken Paxton</a>.[1]</p><p>During her husband&#39;s 2023 impeachment trial in the <a href="/entities/texas-senate">Texas Senate</a>, Angela Paxton was seated as a member of the court of impeachment but was prohibited from voting on the sixteen articles brought against him, a restriction adopted to address the obvious conflict of interest.[1] Her husband was acquitted on all counts on Saturday, September 16, 2023, with four additional articles held in abeyance and later dismissed.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kennedy Assassins, Justice Wins &amp; More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-627" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-627</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/angela-paxton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const angelaPaxton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  angelaPaxton as default
};
