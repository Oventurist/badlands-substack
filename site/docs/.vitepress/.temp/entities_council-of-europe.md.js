import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Council of Europe","description":"","frontmatter":{"title":"Council of Europe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["europe","human-rights","international-bodies","slovakia"],"sources":["raw/badlands-news-brief-762.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/council-of-europe.md","filePath":"entities/council-of-europe.md","lastUpdated":null}');
const _sfc_main = { name: "entities/council-of-europe.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="council-of-europe" tabindex="-1">Council of Europe <a class="header-anchor" href="#council-of-europe" aria-label="Permalink to &quot;Council of Europe&quot;">​</a></h1><p>The Council of Europe is a pan-European intergovernmental body whose human rights machinery includes an office of Commissioner for Human Rights.[1]</p><h2 id="intervention-on-slovakia-s-two-sexes-amendment" tabindex="-1">Intervention on Slovakia&#39;s two-sexes amendment <a class="header-anchor" href="#intervention-on-slovakia-s-two-sexes-amendment" aria-label="Permalink to &quot;Intervention on Slovakia&#39;s two-sexes amendment&quot;">​</a></h2><p>After <a href="/entities/slovakia">Slovakia</a>&#39;s National Council passed a constitutional amendment in September 2025 recognising only two sexes and restricting adoption to married couples, the Council of Europe&#39;s Commissioner for Human Rights, Michael O&#39;Flaherty, publicly criticised the measure.[1] He argued that the amendment denies &quot;the realities of trans and intersex people&quot; and could place Slovakia in breach of its international obligations, expressing concern over the potential impact on human rights guarantees such as access to legal gender recognition.[1] His criticism paralleled that of <a href="/entities/amnesty-international">Amnesty International</a>, which likened the Slovak government&#39;s direction to that of Hungary.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdowns, Shakedowns, &amp; Two Sexes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-762" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-762</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/council-of-europe.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const councilOfEurope = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  councilOfEurope as default
};
