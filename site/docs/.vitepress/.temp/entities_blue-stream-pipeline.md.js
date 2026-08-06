import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blue Stream Pipeline","description":"","frontmatter":{"title":"Blue Stream Pipeline","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","pipelines","russia","turkey","black-sea"],"sources":["raw/badlands-brief-0bd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/blue-stream-pipeline.md","filePath":"entities/blue-stream-pipeline.md","lastUpdated":null}');
const _sfc_main = { name: "entities/blue-stream-pipeline.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blue-stream-pipeline" tabindex="-1">Blue Stream Pipeline <a class="header-anchor" href="#blue-stream-pipeline" aria-label="Permalink to &quot;Blue Stream Pipeline&quot;">​</a></h1><p>The Blue Stream pipeline is a natural gas pipeline that transports Russian gas to <a href="/entities/turkey">Türkiye</a> across the Black Sea, and is described as one of <a href="/entities/russia">Russia</a>&#39;s key gas export routes to the country.[1] It is served by the Krasnodarskaya compressor station, operated by <a href="/entities/gazprom">Gazprom</a>.[1]</p><h2 id="july-2026-drone-attack" tabindex="-1">July 2026 drone attack <a class="header-anchor" href="#july-2026-drone-attack" aria-label="Permalink to &quot;July 2026 drone attack&quot;">​</a></h2><p>In July 2026, Gazprom said Ukrainian drones targeted the Krasnodarskaya compressor station serving Blue Stream.[1] The company reported minor damage to a building at the facility, with gas deliveries uninterrupted thanks to prompt repairs and backup measures.[1] <a href="/entities/ukraine">Ukraine</a> had not publicly commented on the strike at the time of reporting, while Kremlin spokesman <a href="/entities/dmitry-peskov">Dmitry Peskov</a> condemned it as a threat to critical international energy infrastructure and said Russia expected affected countries, including Türkiye, to respond.[1]</p><h2 id="relationship-to-turkstream" tabindex="-1">Relationship to TurkStream <a class="header-anchor" href="#relationship-to-turkstream" aria-label="Permalink to &quot;Relationship to TurkStream&quot;">​</a></h2><p>Blue Stream is distinct from the <a href="/entities/turkstream-pipeline">TurkStream</a> pipeline, which also carries Russian gas through Türkiye and onward to several European countries.[1] Badlands commentary urged readers to watch both the TurkStream route across the Black Sea and the island of <a href="/entities/cyprus">Cyprus</a> as potential flashpoints in a widening confrontation involving Turkey.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mossad Bait &amp; Labor Tackles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/blue-stream-pipeline.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blueStreamPipeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blueStreamPipeline as default
};
