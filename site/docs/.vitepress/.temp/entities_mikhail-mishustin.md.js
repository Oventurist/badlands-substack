import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mikhail Mishustin","description":"","frontmatter":{"title":"Mikhail Mishustin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","government","infrastructure","rail"],"sources":["raw/badlands-news-brief-732.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mikhail-mishustin.md","filePath":"entities/mikhail-mishustin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mikhail-mishustin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mikhail-mishustin" tabindex="-1">Mikhail Mishustin <a class="header-anchor" href="#mikhail-mishustin" aria-label="Permalink to &quot;Mikhail Mishustin&quot;">​</a></h1><p>Mikhail Mishustin is the Prime Minister of the Russian Federation, serving as head of government under President <a href="/entities/vladimir-putin">Vladimir Putin</a>.[1]</p><h2 id="high-speed-rail-program" tabindex="-1">High-speed rail program <a class="header-anchor" href="#high-speed-rail-program" aria-label="Permalink to &quot;High-speed rail program&quot;">​</a></h2><p>In September 2025, Mishustin announced plans for a massive high-speed rail network — set to be the largest in Europe — spanning more than 4,500 kilometres (2,800 miles) and using domestically built trains capable of 400 kph (250 mph).[1] Speaking at a government meeting, he said the flagship line would cut travel time between Moscow and St. Petersburg from four hours to just over two, and that the network would also connect Moscow with Minsk, Adler on the Black Sea, Ekaterinburg in the Urals, Ryazan and other cities.[1]</p><p>&quot;Travel between cities should be not only safe and comfortable but also not too time consuming,&quot; Mishustin stated, adding that &quot;in the modern world, time is becoming increasingly valuable&quot; and that Russia was mastering technologies for faster travel and working on a development scheme for high-speed rail infrastructure.[1] He noted that the project had been approved by Putin and would be finalized within the following six months.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: A Terror Designation &amp; A Breath of Fresh Air&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-732" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-732</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mikhail-mishustin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikhailMishustin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikhailMishustin as default
};
