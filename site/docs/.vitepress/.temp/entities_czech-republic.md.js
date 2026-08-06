import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Czech Republic","description":"","frontmatter":{"title":"Czech Republic","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["europe","nato","ukraine"],"sources":["raw/badlands-news-brief-5f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/czech-republic.md","filePath":"entities/czech-republic.md","lastUpdated":null}');
const _sfc_main = { name: "entities/czech-republic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="czech-republic" tabindex="-1">Czech Republic <a class="header-anchor" href="#czech-republic" aria-label="Permalink to &quot;Czech Republic&quot;">​</a></h1><p>The Czech Republic is a Central European state and member of <a href="/entities/nato">NATO</a>.[1]</p><p>In July 2025 the country became the first NATO member publicly to opt out of US President <a href="/entities/donald-trump">Donald Trump</a>&#39;s newly announced plan to supply American-made weapons to <a href="/entities/ukraine">Ukraine</a> with funding provided by European allies.[1] Prime Minister <a href="/entities/petr-fiala">Petr Fiala</a> said on Tuesday that Prague was &quot;focusing on other projects and ways to help Ukraine&quot; and was &quot;not considering joining this project&quot; at that moment.[1]</p><p>The Czech decision preceded similar reluctance from <a href="/entities/italy">Italy</a>, whose budget was reported not to allow participation, and criticism of the plan from the German party <a href="/entities/die-linke">Die Linke</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Double Comey Drama &amp; Magic Moon Soil&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/czech-republic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const czechRepublic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  czechRepublic as default
};
