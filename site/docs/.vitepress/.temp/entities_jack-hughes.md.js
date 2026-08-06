import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jack Hughes","description":"","frontmatter":{"title":"Jack Hughes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hockey","team-usa","olympics","nhl"],"sources":["raw/badlands-brief-959.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jack-hughes.md","filePath":"entities/jack-hughes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jack-hughes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jack-hughes" tabindex="-1">Jack Hughes <a class="header-anchor" href="#jack-hughes" aria-label="Permalink to &quot;Jack Hughes&quot;">​</a></h1><p>Jack Hughes is an American ice hockey forward who plays for the New Jersey Devils of the National Hockey League and represented the United States at the 2026 Milan-Cortina Winter Olympics.[1]</p><p>Hughes scored the golden goal in the <a href="/concepts/2026-winter-olympics-mens-hockey-final">2026 Olympic men&#39;s hockey final</a>, beating Canada 1:41 into overtime on an assist from Zach Werenski to give the United States a 2-1 win and its first Olympic gold in men&#39;s hockey since the 1980 &quot;Miracle on Ice&quot; era.[1]</p><p>Badlands writer <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> highlighted that Hughes had his front teeth knocked out earlier in the same game after taking a hockey stick to the face, treating the detail as a &quot;perfect encapsulation&quot; of the grit he credited for the American victory.[1] Hughes&#39;s brother Quinn Hughes also played for the United States, assisting on Matt Boldy&#39;s opening goal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;We Are the Champions of the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-959" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-959</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jack-hughes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jackHughes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jackHughes as default
};
