import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Embassy in Moscow","description":"","frontmatter":{"title":"US Embassy in Moscow","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["diplomacy","russia","state-department","terrorism"],"sources":["raw/badlands-news-brief-092.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-embassy-in-moscow.md","filePath":"entities/us-embassy-in-moscow.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-embassy-in-moscow.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-embassy-in-moscow" tabindex="-1">US Embassy in Moscow <a class="header-anchor" href="#us-embassy-in-moscow" aria-label="Permalink to &quot;US Embassy in Moscow&quot;">​</a></h1><p>The <strong>US Embassy in Moscow</strong> is the diplomatic mission of the United States to the Russian Federation, operating under the <a href="/entities/state-department">State Department</a>.</p><p>On March 7, 2024, the embassy issued a public warning telling Americans in Russia that &quot;extremists have imminent plans to target large gatherings in Moscow, to include concerts,&quot; and advising them to avoid large gatherings for 48 hours.[1] The advisory preceded the <a href="/concepts/crocus-city-hall-attack">Crocus City Hall attack</a> later that month, in which more than 140 people were killed at a concert hall outside Moscow.[1]</p><p>The same warning was also conveyed to Russian authorities privately, though <a href="/entities/fsb">FSB</a> chief <a href="/entities/aleksandr-bortnikov">Aleksandr Bortnikov</a> later said it was &quot;of a general nature,&quot; and <a href="/entities/new-york-times">The New York Times</a> reported that Washington had withheld further detail out of fear that Russian authorities might learn US intelligence sources or methods.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Easter Bait &amp; A Tale of Two Presidents&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-092" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-092</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-embassy-in-moscow.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usEmbassyInMoscow = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usEmbassyInMoscow as default
};
