import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TurkStream Pipeline","description":"","frontmatter":{"title":"TurkStream Pipeline","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["energy","pipelines","russia","turkey","europe","black-sea"],"sources":["raw/badlands-brief-0bd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/turkstream-pipeline.md","filePath":"entities/turkstream-pipeline.md","lastUpdated":null}');
const _sfc_main = { name: "entities/turkstream-pipeline.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="turkstream-pipeline" tabindex="-1">TurkStream Pipeline <a class="header-anchor" href="#turkstream-pipeline" aria-label="Permalink to &quot;TurkStream Pipeline&quot;">​</a></h1><p>TurkStream is a natural gas pipeline that carries Russian gas through <a href="/entities/turkey">Türkiye</a> and onward to several European countries.[1] It is separate from the <a href="/entities/blue-stream-pipeline">Blue Stream</a> pipeline, which delivers Russian gas to Türkiye itself across the Black Sea.[1]</p><h2 id="strategic-significance" tabindex="-1">Strategic significance <a class="header-anchor" href="#strategic-significance" aria-label="Permalink to &quot;Strategic significance&quot;">​</a></h2><p>Because TurkStream links <a href="/entities/russia">Russian</a> supply to European consumers via Turkish territory, it sits at the intersection of the Ukraine war&#39;s energy dimension and Turkey&#39;s regional position.[1] Following the July 2026 Ukrainian drone strike on the Krasnodarskaya compressor station serving Blue Stream, Kremlin spokesman <a href="/entities/dmitry-peskov">Dmitry Peskov</a> framed attacks on such infrastructure as threats to critical international energy systems and said Russia expected affected countries to respond.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> identified the TurkStream route across the Black Sea — along with the island of <a href="/entities/cyprus">Cyprus</a> and Turkey&#39;s Aegean west coast — as places to watch for a possible <a href="/entities/nato">NATO</a>/<a href="/entities/israel">Israeli</a> operation amid escalating rhetoric toward Turkey.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mossad Bait &amp; Labor Tackles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-0bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-0bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/turkstream-pipeline.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const turkstreamPipeline = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  turkstreamPipeline as default
};
