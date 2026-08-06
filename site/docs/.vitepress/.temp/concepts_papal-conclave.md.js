import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Papal Conclave","description":"","frontmatter":{"title":"Papal Conclave","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["vatican","catholic-church","succession","pope-francis"],"sources":["raw/badlands-news-brief-5c8.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/papal-conclave.md","filePath":"concepts/papal-conclave.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/papal-conclave.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="papal-conclave" tabindex="-1">Papal Conclave <a class="header-anchor" href="#papal-conclave" aria-label="Permalink to &quot;Papal Conclave&quot;">​</a></h1><p>The <strong>papal conclave</strong> is the closed election by which the College of Cardinals chooses a new pope. It was placed at the center of the Badlands News Brief for April 21, 2025 by the death of <a href="/entities/pope-francis">Pope Francis</a>, whose passing at age 88 triggered the succession machinery at the <a href="/entities/vatican">Vatican</a>.[1]</p><h2 id="process" tabindex="-1">Process <a class="header-anchor" href="#process" aria-label="Permalink to &quot;Process&quot;">​</a></h2><p>When a pope dies, the Vatican begins its traditional nine days of mourning, known as the <em>novendiales</em>.[1] The election of a successor begins between 15 and 20 days after the death.[1] The camerlengo, a cardinal of the Catholic Church, is charged with organizing the election, the process known as the conclave.[1] During the intervening period the Church is in the state of interregnum, or <em>sede vacante</em> — the &quot;vacant seat&quot; — in which there is no pope in power.[1]</p><h2 id="cultural-depiction" tabindex="-1">Cultural depiction <a class="header-anchor" href="#cultural-depiction" aria-label="Permalink to &quot;Cultural depiction&quot;">​</a></h2><p>The mechanics of the conclave were recently dramatized in the Oscar-winning film <em>Conclave</em>, which the Badlands commentary discussed directly.[1] Badlands writer Ashe in America described watching the film the day Francis died as a strange coincidence, saying the political posturing, secrets and sabotage depicted were simply human nature, but calling the ending — which she declined to spoil beyond a reference to Katy Perry&#39;s &quot;divine feminine&quot; — the genuinely odd element, and wondering aloud how realistic the portrayed process actually is.[1] Other Badlands commentary in the same brief raised the &quot;strange voting process to determine a new pope and how the numbers shake out.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: A Coming Conclave &amp; More Musical Chairs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/papal-conclave.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const papalConclave = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  papalConclave as default
};
