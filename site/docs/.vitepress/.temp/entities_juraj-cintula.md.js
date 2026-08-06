import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Juraj Cintula","description":"","frontmatter":{"title":"Juraj Cintula","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["slovakia","assassination"],"sources":["raw/badlands-news-brief-384.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/juraj-cintula.md","filePath":"entities/juraj-cintula.md","lastUpdated":null}');
const _sfc_main = { name: "entities/juraj-cintula.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="juraj-cintula" tabindex="-1">Juraj Cintula <a class="header-anchor" href="#juraj-cintula" aria-label="Permalink to &quot;Juraj Cintula&quot;">​</a></h1><p>Juraj Cintula is the man identified as the detained suspect in the <a href="/concepts/2024-slovak-assassination-attempt">May 2024 shooting</a> of Slovak Prime Minister <a href="/entities/robert-fico">Robert Fico</a>.[1] A video of Cintula&#39;s interrogation circulated widely after the attack, in which he confessed to saying that he &quot;disagreed&quot; with his government&#39;s policies.[1]</p><p>Slovak officials treated the shooting as political from the outset. Deputy Prime Minister Robert Kalinak said there was &quot;no doubt&quot; the attack was a politically motivated assassination attempt and attributed it to an inability among Fico&#39;s opponents to accept the will of part of the public.[1] Badlands commentary placed the incident in the context of European &quot;stay-behind&quot; operations associated with <a href="/concepts/operation-gladio">Operation Gladio</a>, noting Fico&#39;s record of opposition to NATO&#39;s Ukraine policy and to EU migration and pandemic governance measures.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Debates Set, Funding Found &amp; NGO&#39;s Defied&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-384" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-384</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/juraj-cintula.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jurajCintula = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jurajCintula as default
};
