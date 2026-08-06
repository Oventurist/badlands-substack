import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Laura Kelly","description":"","frontmatter":{"title":"Laura Kelly","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["kansas","governor","democrat"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/laura-kelly.md","filePath":"entities/laura-kelly.md","lastUpdated":null}');
const _sfc_main = { name: "entities/laura-kelly.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="laura-kelly" tabindex="-1">Laura Kelly <a class="header-anchor" href="#laura-kelly" aria-label="Permalink to &quot;Laura Kelly&quot;">​</a></h1><p>Laura Kelly is the Democratic Governor of Kansas. In February 2023, when the Republican-controlled <a href="/entities/kansas-senate">Kansas Senate</a> passed a &quot;women&#39;s bill of rights&quot; defining a &quot;woman&quot; as a biological female under state law, reporting noted that the bill was expected to clear the Republican-controlled House but that Kelly was not expected to sign it into law.[1]</p><p>Her anticipated opposition placed her at the center of the Kansas dispute over the statutory definition of sex, a fight Badlands Media covered as part of a broader cultural conflict over gender and objective truth.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/laura-kelly.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lauraKelly = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lauraKelly as default
};
