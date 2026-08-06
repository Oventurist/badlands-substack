import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zimbabwe","description":"","frontmatter":{"title":"Zimbabwe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["zimbabwe","africa","russia","africom","sovereignty"],"sources":["raw/badlands-news-brief-528.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/zimbabwe.md","filePath":"entities/zimbabwe.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zimbabwe.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zimbabwe" tabindex="-1">Zimbabwe <a class="header-anchor" href="#zimbabwe" aria-label="Permalink to &quot;Zimbabwe&quot;">​</a></h1><p>Zimbabwe is a southern African country that appears in the July 2024 Badlands News Brief as the regional counterpart to <a href="/entities/zambia">Zambia</a> in a story about American military presence and Russian engagement in Africa.[1]</p><p>The Brief recalls its prior coverage of a deal struck by <a href="/entities/vladimir-putin">Vladimir Putin</a> supplying fertilizer to Zimbabwe, which it credits with producing a historic crop yield for the struggling nation.[1] It further reports that in June 2024 Zimbabwe reached out to Russia over concerns that the United States was attempting to consolidate its military strength in Zambia and to exacerbate a growing rift between the two historically close neighbors.[1]</p><p>Zimbabwean President <a href="/entities/emmerson-mnangagwa">Emmerson Mnangagwa</a> is quoted remarking, &quot;The United States is making us feel lonely,&quot; which the Brief interprets as expressing a perceived encirclement by Western powers.[1] Zimbabwe&#39;s stated concerns about <a href="/entities/africom">US Africa Command</a> activity are presented as the precursor to Zambia&#39;s own call for a US withdrawal.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden Pushes Back as Peacemakers Posture&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-528" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-528</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zimbabwe.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zimbabwe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zimbabwe as default
};
