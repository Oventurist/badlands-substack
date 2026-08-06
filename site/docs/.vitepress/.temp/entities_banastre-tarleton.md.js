import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Banastre Tarleton","description":"","frontmatter":{"title":"Banastre Tarleton","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["american-revolution","british-army","dragoons","history"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"low"},"headers":[],"relativePath":"entities/banastre-tarleton.md","filePath":"entities/banastre-tarleton.md","lastUpdated":null}');
const _sfc_main = { name: "entities/banastre-tarleton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="banastre-tarleton" tabindex="-1">Banastre Tarleton <a class="header-anchor" href="#banastre-tarleton" aria-label="Permalink to &quot;Banastre Tarleton&quot;">​</a></h1><p>Banastre Tarleton was the British officer who commanded the dragoons — mounted troops — opposing the Continental Army during the American Revolution, and is characterized by Badlands as &quot;blood-thirsty.&quot;[1]</p><p>Tarleton is described as the villain both of the Badlands &quot;Patriot Chronicles&quot; article on Francis Marion and of Mel Gibson&#39;s film <em>The Patriot</em>.[1] Countering Tarleton&#39;s dragoons required cavalry expertise that <a href="/entities/george-washington">George Washington</a> himself lacked, and which was supplied by Count <a href="/entities/casimir-pulaski">Casimir Pulaski</a> and officers such as Hungarian Colonel <a href="/entities/michael-kovats">Michael Kovats</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/banastre-tarleton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const banastreTarleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  banastreTarleton as default
};
