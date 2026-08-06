import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mikhail Ulyanov","description":"","frontmatter":{"title":"Mikhail Ulyanov","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["russia","diplomacy","syria"],"sources":["raw/badlands-news-brief-7a5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mikhail-ulyanov.md","filePath":"entities/mikhail-ulyanov.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mikhail-ulyanov.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mikhail-ulyanov" tabindex="-1">Mikhail Ulyanov <a class="header-anchor" href="#mikhail-ulyanov" aria-label="Permalink to &quot;Mikhail Ulyanov&quot;">​</a></h1><p><strong>Mikhail Ulyanov</strong> is a senior Russian diplomat who heads Moscow&#39;s delegation to the international organizations headquartered in Vienna.[1]</p><h2 id="confirmation-of-assad-s-asylum" tabindex="-1">Confirmation of Assad&#39;s asylum <a class="header-anchor" href="#confirmation-of-assad-s-asylum" aria-label="Permalink to &quot;Confirmation of Assad&#39;s asylum&quot;">​</a></h2><p>Early on the Monday following the December 2024 <a href="/concepts/fall-of-the-assad-regime">fall of the Assad regime</a>, Ulyanov stated that <a href="/entities/bashar-al-assad">Bashar al-Assad</a> and his family were in Moscow, seemingly confirming earlier media reports that the former Syrian president had been granted asylum after the government in <a href="/entities/damascus">Damascus</a> fell to militants.[1] Ulyanov presented the Assads&#39; presence in Russia as a demonstration of principle, saying it showed that &quot;Russia does not betray its friends in difficult situations… unlike the US.&quot;[1] Russian news agencies separately cited diplomatic sources reporting that the family had been granted asylum &quot;on humanitarian grounds,&quot; while the <a href="/entities/russian-foreign-ministry">Russian Foreign Ministry</a> said Assad had agreed to step down after back-channel talks and had instructed officials to conduct a peaceful transfer of power.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Damascus Has Fallen ... Cui Bono?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mikhail-ulyanov.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikhailUlyanov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikhailUlyanov as default
};
