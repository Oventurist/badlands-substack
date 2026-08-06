import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Kovats","description":"","frontmatter":{"title":"Michael Kovats","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["american-revolution","cavalry","hungary","continental-army"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"low"},"headers":[],"relativePath":"entities/michael-kovats.md","filePath":"entities/michael-kovats.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-kovats.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-kovats" tabindex="-1">Michael Kovats <a class="header-anchor" href="#michael-kovats" aria-label="Permalink to &quot;Michael Kovats&quot;">​</a></h1><p>Michael Kovats was a Hungarian colonel who served alongside Count <a href="/entities/casimir-pulaski">Casimir Pulaski</a> among the European &quot;horse lords&quot; who brought professional cavalry experience to the Continental Army during the American Revolution.[1]</p><p>Badlands identifies Kovats as one of the officers whose expertise was necessary to counter the British dragoons led by <a href="/entities/banastre-tarleton">Banastre Tarleton</a>, at a time when <a href="/entities/george-washington">George Washington</a> had little or no experience employing cavalry as a set piece in battle.[1] That deficiency stemmed from Washington&#39;s military background in the French and Indian War, fought in the mountainous terrain of the northern colonies and Canada rather than on open ground suited to mounted maneuver.[1]</p><p>Kovats&#39; contribution is presented as part of a continuity linking the <a href="/entities/winged-hussars">Winged Hussars</a> of Poland — heroes of the 1683 <a href="/concepts/battle-of-vienna">Battle of Vienna</a> — to the eventual U.S. Cavalry.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-kovats.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelKovats = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelKovats as default
};
