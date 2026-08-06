import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Canada 2020","description":"","frontmatter":{"title":"Canada 2020","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["canada","think-tanks","liberal-party"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"low"},"headers":[],"relativePath":"entities/canada-2020.md","filePath":"entities/canada-2020.md","lastUpdated":null}');
const _sfc_main = { name: "entities/canada-2020.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="canada-2020" tabindex="-1">Canada 2020 <a class="header-anchor" href="#canada-2020" aria-label="Permalink to &quot;Canada 2020&quot;">​</a></h1><p>Canada 2020 is a Canadian think tank described as the banner under which the <a href="/entities/liberal-party-of-canada">Liberal Party of Canada</a> was re-organized between 2011 and 2014 as it prepared to take power.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> It has been characterized in the Canadian press as the progressive think tank that &quot;really runs Canada.&quot;<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><p><a href="/entities/chrystia-freeland">Chrystia Freeland</a> brought Western figures she counted among her close friends — including Larry Summers, <a href="/entities/george-soros">George Soros</a> and Al Gore — into Canada during that period of Liberal Party reorganization under the Canada 2020 banner.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a> <a href="/entities/bob-rae">Bob Rae</a>, the Rhodes Scholar and former Ontario premier who served as interim controller of the Liberal Party during several of the Harper years, was a major player in the organization.<a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Re-Alignment of World Systems&quot;, URL: <a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-re-alignment-of-world-systems</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/canada-2020.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const canada2020 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  canada2020 as default
};
