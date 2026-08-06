import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Willie Nelson","description":"","frontmatter":{"title":"Willie Nelson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["music","agriculture","celebrity-activism"],"sources":["raw/badlands-news-brief-69b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/willie-nelson.md","filePath":"entities/willie-nelson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/willie-nelson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="willie-nelson" tabindex="-1">Willie Nelson <a class="header-anchor" href="#willie-nelson" aria-label="Permalink to &quot;Willie Nelson&quot;">​</a></h1><p>Willie Nelson is an American country musician who co-founded the concert charity <a href="/entities/farm-aid">Farm Aid</a> in 1985 to raise awareness and funding for American family farming.[1]</p><h2 id="farm-aid-and-badlands-criticism" tabindex="-1">Farm Aid and Badlands criticism <a class="header-anchor" href="#farm-aid-and-badlands-criticism" aria-label="Permalink to &quot;Farm Aid and Badlands criticism&quot;">​</a></h2><p>Badlands Media invoked Nelson&#39;s founding role while arguing that Farm Aid has expanded even as family farms have continued to fail, and that most of the artists headlining the charity&#39;s 2024 event backed <a href="/entities/kamala-harris">Kamala Harris</a> and the political status quo.[1] The commentary concluded that although the writer liked much of the musicians&#39; work, &quot;their results indicate the American people should refuse to give them another dime.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Calls for Peace as the World Heads Toward War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-69b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-69b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/willie-nelson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const willieNelson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  willieNelson as default
};
