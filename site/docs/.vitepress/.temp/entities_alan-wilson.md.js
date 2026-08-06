import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alan Wilson","description":"","frontmatter":{"title":"Alan Wilson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["south-carolina","gubernatorial-race","republicans"],"sources":["raw/badlands-brief-029.md"],"confidence":"low"},"headers":[],"relativePath":"entities/alan-wilson.md","filePath":"entities/alan-wilson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alan-wilson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alan-wilson" tabindex="-1">Alan Wilson <a class="header-anchor" href="#alan-wilson" aria-label="Permalink to &quot;Alan Wilson&quot;">​</a></h1><p><strong>Alan Wilson</strong> is a South Carolina Republican who advanced to the June 23, 2026 run-off in the state&#39;s gubernatorial primary.[1]</p><p>Following her last-place finish in the six-candidate first round, Representative <a href="/entities/nancy-mace">Nancy Mace</a> held a press conference publicly endorsing Wilson in the run-off, saying she wanted to help him defeat Lieutenant Governor <a href="/entities/pamela-evette">Pamela Evette</a>, who had been endorsed by President <a href="/entities/donald-trump">Donald Trump</a>.[1] Badlands coverage read the endorsement as part of Mace&#39;s stated campaign of revenge against Trump rather than as a substantive policy alignment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mixed Gender Crews, Trafficking Stings, &amp; Shadow Cabal Reruns&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-029" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-029</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alan-wilson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alanWilson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alanWilson as default
};
