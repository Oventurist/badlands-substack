import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hezbollah","description":"","frontmatter":{"title":"Hezbollah","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["lebanon","terrorism","iran"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/hezbollah.md","filePath":"entities/hezbollah.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hezbollah.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hezbollah" tabindex="-1">Hezbollah <a class="header-anchor" href="#hezbollah" aria-label="Permalink to &quot;Hezbollah&quot;">​</a></h1><p>Hezbollah is a Shiite Islamist political and militant organization based in Lebanon. In the Badlands Media article &quot;A Conflict of Interest,&quot; Hezbollah is portrayed as a recipient of stolen U.S. taxpayer funds diverted during the <a href="/concepts/iraq-war">Iraq War</a>.</p><p>According to the article, an investigation during the <a href="/entities/george-w-bush">Bush administration</a> discovered over $1.5 billion in a bunker in Lebanon, and Bush personally &quot;squashed&quot; the investigation. The source claims that the money found in the Lebanon bunker was intended for Hezbollah, and that more than half of the $40 billion shipped to Iraq during the war was stolen and stashed in bunkers around the world, including the one in Lebanon.</p><p>The article asserts that terrorists do not need to steal money like bank robbers because &quot;they are being funded by the CIA and our shadow government.&quot; It claims that the U.S. was &quot;flying billions of dollars straight to our enemies, right under the nose of the American people,&quot; and that the absence of documentation after the cash reached Baghdad was designed to facilitate this diversion. Hezbollah is presented as one of the primary beneficiaries of this scheme.</p><p>According to the source, Hezbollah&#39;s funding through stolen Iraqi cash represents part of a broader pattern in which &quot;a war zone has always been the perfect cover for taxpayer theft.&quot; The article frames the Bush administration&#39;s suppression of the investigation as evidence that the U.S. government was complicit in funding its enemies, and that this complicity extends across multiple administrations and theaters of conflict.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hezbollah.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hezbollah = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hezbollah as default
};
