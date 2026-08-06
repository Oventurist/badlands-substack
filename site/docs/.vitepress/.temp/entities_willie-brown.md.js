import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Willie Brown","description":"","frontmatter":{"title":"Willie Brown","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["california","politics","san-francisco","kamala-harris"],"sources":["raw/badlands-news-brief-547.md"],"confidence":"low"},"headers":[],"relativePath":"entities/willie-brown.md","filePath":"entities/willie-brown.md","lastUpdated":null}');
const _sfc_main = { name: "entities/willie-brown.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="willie-brown" tabindex="-1">Willie Brown <a class="header-anchor" href="#willie-brown" aria-label="Permalink to &quot;Willie Brown&quot;">​</a></h1><p>Willie Brown is a California Democratic politician, longtime Speaker of the state Assembly and later Mayor of San Francisco, described in Badlands Media coverage as a Bay Area political boss.[1]</p><p>Brown appears in Badlands commentary chiefly through his early patronage of <a href="/entities/kamala-harris">Kamala Harris</a>. Contributor <a href="/entities/ryan-delarme">Ryan DeLarme</a>, writing sarcastically about Democratic officials souring on Harris, characterized her career as having begun by &quot;riding the coattails&quot; of Brown before moving on to her tenure as California Attorney General.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: State of Confusion, Kamala Mayhem &amp; Boiled Eggs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-547" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-547</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/willie-brown.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const willieBrown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  willieBrown as default
};
