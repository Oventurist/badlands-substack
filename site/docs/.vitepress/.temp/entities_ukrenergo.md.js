import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ukrenergo","description":"","frontmatter":{"title":"Ukrenergo","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","energy","infrastructure","war"],"sources":["raw/badlands-news-brief-6f7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ukrenergo.md","filePath":"entities/ukrenergo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ukrenergo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ukrenergo" tabindex="-1">Ukrenergo <a class="header-anchor" href="#ukrenergo" aria-label="Permalink to &quot;Ukrenergo&quot;">​</a></h1><p>Ukrenergo is Ukraine&#39;s national power grid operator. In early September 2024 its supervisory board removed the company&#39;s chief executive, <a href="/entities/volodymyr-kudrytskyi">Volodymyr Kudrytskyi</a>.[1]</p><p>The decision came days after Russia&#39;s August 26 drone and missile attack, described as the most massive since the beginning of the full-scale invasion, which primarily targeted Ukraine&#39;s energy infrastructure and caused significant electricity supply disruptions across the country.[1] The resulting energy crisis was addressed at a meeting of the Supreme Commander-in-Chief&#39;s Staff, where President <a href="/entities/volodymyr-zelensky">Volodymyr Zelenskyy</a> instructed Kudrytskyi to submit his resignation.[1]</p><p>The board&#39;s decision was prompted by incomplete protective structures around Ukrenergo power facilities, which allegedly failed to prevent blackouts following the Russian attacks; four of the six supervisory board members voted in favor of the dismissal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Psyops Abound as the Media Landscape Shifts Rapidly&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6f7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6f7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ukrenergo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ukrenergo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ukrenergo as default
};
