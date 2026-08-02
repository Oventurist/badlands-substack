import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mossad","description":"","frontmatter":{"title":"Mossad","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["mossad","israel","intelligence","deep-state","city-of-london"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mossad.md","filePath":"entities/mossad.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mossad.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mossad" tabindex="-1">Mossad <a class="header-anchor" href="#mossad" aria-label="Permalink to &quot;Mossad&quot;">​</a></h1><p>Mossad is the Israeli national intelligence service. It appears in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as one of two agencies — the other being the <a href="/entities/cia">CIA</a> — placed beneath British <a href="/entities/mi6">MI6</a> in the article&#39;s proposed hierarchy of intelligence power.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> invokes Mossad while arguing against the view that Israel is the ultimate author of world events. Conceding that &quot;there aren&#39;t criminals that run the US and Israel&quot; is not his position, he maintains instead that such figures are &quot;merely middle management who take orders from their puppet masters, The <a href="/entities/city-of-london">City of London</a>.&quot; Mossad thus serves in the essay as an illustration of a capable and genuinely operative agency whose autonomy the author regards as overstated.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mossad.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mossad = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mossad as default
};
