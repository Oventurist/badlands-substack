import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Foreign Affairs","description":"","frontmatter":{"title":"Foreign Affairs","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","foreign-policy","establishment"],"sources":["raw/badlands-news-brief-6b1.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/foreign-affairs.md","filePath":"entities/foreign-affairs.md","lastUpdated":null}');
const _sfc_main = { name: "entities/foreign-affairs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="foreign-affairs" tabindex="-1">Foreign Affairs <a class="header-anchor" href="#foreign-affairs" aria-label="Permalink to &quot;Foreign Affairs&quot;">​</a></h1><p><strong>Foreign Affairs</strong> is an American magazine of international relations and U.S. foreign policy, widely regarded as a house organ of the Western foreign-policy establishment.[1]</p><h2 id="june-2024-gaza-op-ed" tabindex="-1">June 2024 Gaza op-ed <a class="header-anchor" href="#june-2024-gaza-op-ed" aria-label="Permalink to &quot;June 2024 Gaza op-ed&quot;">​</a></h2><p>In June 2024 the magazine published an op-ed by Audrey Kurth Cronin, director of the Carnegie Mellon Institute for Strategy and Technology, arguing that Israel&#39;s military operation in Gaza was a &quot;strategic disaster&quot; because support for <a href="/entities/hamas">Hamas</a> among Gazans was rising rather than collapsing.[1] The piece, summarized by <a href="/entities/tass">TASS</a> and carried in the Badlands News Brief, cited Palestinian Center for Policy and Survey Research polling showing Hamas support above 50% in March 2024, up 14 points since December 2023, and attributed the shift to mass civilian casualties, restrictions on humanitarian aid and the Israeli operations in <a href="/concepts/rafah-invasion">Rafah</a>.[1]</p><p>Badlands treated the appearance of such an assessment in an establishment journal as notable in itself — a sign that criticism of the campaign had migrated from dissident outlets into mainstream foreign-policy discourse.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Russia, the MSM and El Salvador Call Out Joe Biden&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/foreign-affairs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const foreignAffairs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  foreignAffairs as default
};
