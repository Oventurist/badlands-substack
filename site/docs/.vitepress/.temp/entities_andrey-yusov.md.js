import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrey Yusov","description":"","frontmatter":{"title":"Andrey Yusov","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","intelligence","africa","mali"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andrey-yusov.md","filePath":"entities/andrey-yusov.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrey-yusov.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrey-yusov" tabindex="-1">Andrey Yusov <a class="header-anchor" href="#andrey-yusov" aria-label="Permalink to &quot;Andrey Yusov&quot;">​</a></h1><p>Andrey Yusov is a spokesman for Ukraine&#39;s <a href="/entities/main-directorate-of-intelligence">GUR military intelligence agency</a>.[1] In late July 2024 he said in an interview that GUR agents had helped plan an insurgent ambush on a convoy of <a href="/entities/wagner-group">Wagner Group</a> contractors and Malian troops in northern <a href="/entities/mali">Mali</a>, describing the operation as being conducted &quot;against Russian war criminals&quot; and promising that &quot;there will be more.&quot;[1]</p><p>The statement drew condemnation from <a href="/entities/burkina-faso">Burkina Faso</a>&#39;s Foreign Ministry, which accused Ukraine of praising terrorism and of subversive actions threatening the stability of the African continent.[1] Ukraine&#39;s embassy in <a href="/entities/senegal">Senegal</a> amplified the interview on Facebook before deleting it.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrey-yusov.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andreyYusov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andreyYusov as default
};
