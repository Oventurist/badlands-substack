import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Juan Ciscomani","description":"","frontmatter":{"title":"Juan Ciscomani","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","arizona","border","immigration"],"sources":["raw/badlands-news-brief-220.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/juan-ciscomani.md","filePath":"entities/juan-ciscomani.md","lastUpdated":null}');
const _sfc_main = { name: "entities/juan-ciscomani.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="juan-ciscomani" tabindex="-1">Juan Ciscomani <a class="header-anchor" href="#juan-ciscomani" aria-label="Permalink to &quot;Juan Ciscomani&quot;">​</a></h1><p>Juan Ciscomani is a Republican member of the U.S. House of Representatives from Arizona whose district includes the state&#39;s hard-hit southeastern border region.</p><p>In December 2023, after the federal government ordered the closure of the Lukeville Port of Entry, Ciscomani reported that American and Mexican residents were forced to drive several hours to the next closest crossing at Nogales, Arizona, where travelers faced lines of up to five hours.[1] The closure prompted Gov. <a href="/entities/katie-hobbs">Katie Hobbs</a> to send a letter to President <a href="/entities/joe-biden">Joe Biden</a> demanding reassignment of military personnel to the area and reimbursement of $512 million in state border spending.[1]</p><p>Illegal immigration through the Tucson region had begun rising six months earlier and climbed in the weeks preceding the closure from roughly 12,000 arrests per week to 17,500 arrests in the week ending November 30.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Trump &amp; Rootin&#39; for Putin?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-220" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-220</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/juan-ciscomani.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const juanCiscomani = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  juanCiscomani as default
};
