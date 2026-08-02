import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bugsy Siegel","description":"","frontmatter":{"title":"Bugsy Siegel","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["bugsy-siegel","jewish-mafia","las-vegas","organized-crime"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bugsy-siegel.md","filePath":"entities/bugsy-siegel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bugsy-siegel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bugsy-siegel" tabindex="-1">Bugsy Siegel <a class="header-anchor" href="#bugsy-siegel" aria-label="Permalink to &quot;Bugsy Siegel&quot;">​</a></h1><p>Benjamin &quot;Bugsy&quot; Siegel was an American gangster identified in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as the Jewish Mafia figure who ran Las Vegas under <a href="/entities/meyer-lansky">Meyer Lansky</a>, alongside <a href="/entities/mickey-cohen">Mickey Cohen</a> in Hollywood.</p><p>The article recounts the end of that arrangement in a single sentence: Siegel held Las Vegas &quot;until Bugsy&#39;s good friend Meyer found out Bugsy&#39;s girlfriend was skimming money and had him killed.&quot; <a href="/entities/erik-carlson">Erik Carlson</a> offers the killing as an illustration of the hierarchy he describes — that Lansky, not his more famous associates, occupied the top of the Jewish Mafia, and that the organization enforced discipline on its own senior figures regardless of friendship.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
