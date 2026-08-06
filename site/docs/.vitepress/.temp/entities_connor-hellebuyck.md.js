import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Connor Hellebuyck","description":"","frontmatter":{"title":"Connor Hellebuyck","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hockey","team-usa","olympics","nhl","goaltender"],"sources":["raw/badlands-brief-959.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/connor-hellebuyck.md","filePath":"entities/connor-hellebuyck.md","lastUpdated":null}');
const _sfc_main = { name: "entities/connor-hellebuyck.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="connor-hellebuyck" tabindex="-1">Connor Hellebuyck <a class="header-anchor" href="#connor-hellebuyck" aria-label="Permalink to &quot;Connor Hellebuyck&quot;">​</a></h1><p>Connor Hellebuyck is an American ice hockey goaltender for the Winnipeg Jets of the National Hockey League who backstopped the United States at the 2026 Milan-Cortina Winter Olympics.[1]</p><p>In the <a href="/concepts/2026-winter-olympics-mens-hockey-final">Olympic gold medal game against Canada</a>, Hellebuyck made 41 saves — reported elsewhere as more than 40 — as Canada outshot the United States 42-28 across regulation, keeping the Americans in a game they ultimately won 2-1 in overtime.[1] Badlands coverage described his performance as anchoring the U.S. defense and keeping the team alive.[1]</p><p>One notable sequence went against him: around the 9:55 mark of the third period, Hellebuyck was caught well out of position on a broken play, leaving nearly half the net open for Canada&#39;s Nathan MacKinnon, who fired wide from the left side.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;We Are the Champions of the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-959" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-959</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/connor-hellebuyck.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const connorHellebuyck = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  connorHellebuyck as default
};
