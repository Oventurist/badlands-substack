import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bugsy Siegel","description":"","frontmatter":{"title":"Bugsy Siegel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["organized-crime","las-vegas"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bugsy-siegel.md","filePath":"entities/bugsy-siegel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bugsy-siegel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bugsy-siegel" tabindex="-1">Bugsy Siegel <a class="header-anchor" href="#bugsy-siegel" aria-label="Permalink to &quot;Bugsy Siegel&quot;">​</a></h1><p>Bugsy Siegel is described by Erik Carlson as the <a href="/entities/jewish-mafia">Jewish Mafia</a> figure who ran Las Vegas under <a href="/entities/meyer-lansky">Meyer Lansky</a>, alongside <a href="/entities/mickey-cohen">Mickey Cohen</a> in Hollywood.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="death" tabindex="-1">Death <a class="header-anchor" href="#death" aria-label="Permalink to &quot;Death&quot;">​</a></h2><p>Carlson recounts that Siegel&#39;s tenure ended when his good friend Lansky discovered that Siegel&#39;s girlfriend was skimming money and had Siegel killed.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a> The episode illustrates the essay&#39;s picture of a disciplined hierarchy operating above the more visible <a href="/entities/italian-mafia">Italian Mafia</a>.<a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Journey of Ever-changing Truths&quot;, URL: <a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-journey-of-ever-changing-truths</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bugsy-siegel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bugsySiegel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bugsySiegel as default
};
