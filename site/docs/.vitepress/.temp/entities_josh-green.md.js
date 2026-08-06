import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Josh Green","description":"","frontmatter":{"title":"Josh Green","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hawaii","governor","lahaina","disaster-response"],"sources":["raw/badlands-news-brief-62d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/josh-green.md","filePath":"entities/josh-green.md","lastUpdated":null}');
const _sfc_main = { name: "entities/josh-green.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="josh-green" tabindex="-1">Josh Green <a class="header-anchor" href="#josh-green" aria-label="Permalink to &quot;Josh Green&quot;">​</a></h1><p>Josh Green is the Governor of Hawaii. In August 2023 he became a central figure in the public response to the catastrophic wildfires that destroyed much of the town of Lahaina on Maui.[1]</p><h2 id="response-to-post-fire-land-speculation" tabindex="-1">Response to post-fire land speculation <a class="header-anchor" href="#response-to-post-fire-land-speculation" aria-label="Permalink to &quot;Response to post-fire land speculation&quot;">​</a></h2><p>As reports spread that investors and realtors were cold-calling families who had just lost their homes with below-market offers for their land, Green publicly spoke out against the practice, warning that Lahaina fire victims were being pressured to sell.[1] His intervention followed viral testimony from a local resident who said she &quot;personally&quot; knew &quot;multiple families&quot; who had been &quot;offered money from investors and realtors&quot; in the immediate aftermath of the fire, and who urged victims to record the business names of callers.[1]</p><p>The controversy unfolded against a backdrop of rapidly appreciating Maui property values: the average Lahaina home was worth roughly $600,000 at the start of 2020 and approximately $1 million by 2023.[1] Badlands commentary by <a href="/entities/justin-deschamps">Justin Deschamps</a> situated Green&#39;s warnings within a wider critique of what it termed disaster opportunism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Federal RICO, Disaster Opportunism &amp; Putin&#39;s Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-62d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-62d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/josh-green.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joshGreen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joshGreen as default
};
