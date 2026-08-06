import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kevin McGurn","description":"","frontmatter":{"title":"Kevin McGurn","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["trump-media","executives","media"],"sources":["raw/badlands-brief-7c0.md"],"confidence":"low"},"headers":[],"relativePath":"entities/kevin-mcgurn.md","filePath":"entities/kevin-mcgurn.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kevin-mcgurn.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kevin-mcgurn" tabindex="-1">Kevin McGurn <a class="header-anchor" href="#kevin-mcgurn" aria-label="Permalink to &quot;Kevin McGurn&quot;">​</a></h1><p>Kevin McGurn is a veteran media executive named interim leader of <a href="/entities/trump-media-and-technology-group">Trump Media &amp; Technology Group</a> following the departure of chief executive and chairman <a href="/entities/devin-nunes">Devin Nunes</a> in April 2026.[1] The company confirmed the leadership transition on a Tuesday, as Nunes moved to focus full-time on his position with the President&#39;s Intelligence Advisory Board.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Games of Chicken, Spirit Fails, &amp; Rampant Satanism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kevin-mcgurn.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kevinMcgurn = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kevinMcgurn as default
};
