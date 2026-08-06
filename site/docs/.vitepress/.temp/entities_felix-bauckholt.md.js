import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Felix Bauckholt","description":"","frontmatter":{"title":"Felix Bauckholt","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["vermont","border-patrol","shooting",2025],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/felix-bauckholt.md","filePath":"entities/felix-bauckholt.md","lastUpdated":null}');
const _sfc_main = { name: "entities/felix-bauckholt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="felix-bauckholt" tabindex="-1">Felix Bauckholt <a class="header-anchor" href="#felix-bauckholt" aria-label="Permalink to &quot;Felix Bauckholt&quot;">​</a></h1><p>Felix &quot;Ophelia&quot; Bauckholt was a German citizen killed in a shootout with US Border Patrol agents in northern Vermont on January 20, 2025.[1]</p><p>Bauckholt was traveling with 21-year-old <a href="/entities/teresa-youngblut">Teresa &quot;Milo&quot; Youngblut</a> when agents pulled the pair over near the Canadian border.[1] Youngblut opened fire and, in the ensuing exchange, both Bauckholt and Border Patrol agent <a href="/entities/david-maland">David Maland</a> were killed, while Youngblut was injured.[1] Police have described the incident as connected to a &quot;trans vegan cult&quot; linked to multiple murders across the United States.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/felix-bauckholt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const felixBauckholt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  felixBauckholt as default
};
