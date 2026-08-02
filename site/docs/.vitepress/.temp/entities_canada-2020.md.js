import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Canada 2020","description":"","frontmatter":{"title":"Canada 2020","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["canada","think-tanks","liberal-party","elite-networks"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/canada-2020.md","filePath":"entities/canada-2020.md","lastUpdated":null}');
const _sfc_main = { name: "entities/canada-2020.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="canada-2020" tabindex="-1">Canada 2020 <a class="header-anchor" href="#canada-2020" aria-label="Permalink to &quot;Canada 2020&quot;">​</a></h1><p>Canada 2020 is a Canadian progressive think tank closely associated with the Liberal Party of Canada. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, it is described as the organizational banner under which the Liberal Party was reorganized between 2011 and 2014 in preparation for taking power.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that <a href="/entities/chrystia-freeland">Chrystia Freeland</a>, as &quot;an asset of the global propaganda system,&quot; was happy to bring her close contacts — including Larry Summers, George Soros and Al Gore — into Canada during this period of Liberal reorganization under the Canada 2020 banner. The article cites a Maclean&#39;s profile describing Canada 2020 as &quot;the progressive think tank that really runs Canada.&quot;</p><p><a href="/entities/bob-rae">Bob Rae</a>, who served as interim controller of the Liberal Party during part of the Harper years, is identified as &quot;a major player in Canada 2020.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
