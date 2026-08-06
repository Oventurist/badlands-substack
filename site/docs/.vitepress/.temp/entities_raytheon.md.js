import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Raytheon","description":"","frontmatter":{"title":"Raytheon","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["defense-contractor","military-industrial-complex","weapons"],"sources":["raw/badlands-news-brief-2e8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/raytheon.md","filePath":"entities/raytheon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/raytheon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="raytheon" tabindex="-1">Raytheon <a class="header-anchor" href="#raytheon" aria-label="Permalink to &quot;Raytheon&quot;">​</a></h1><p>Raytheon is a major American defense contractor, frequently cited alongside <a href="/entities/lockheed-martin">Lockheed Martin</a> in Badlands Media commentary as a principal beneficiary of the <a href="/concepts/military-industrial-complex">Military Industrial Complex</a>.[1]</p><p>In an August 2023 Badlands News Brief item on plans by the Biden administration and European allies to establish long-term military assistance for Ukraine, <a href="/entities/ryan-delarme">Ryan DeLarme</a> closed his commentary with the remark, &quot;At least Raytheon and Lockheed will be happy!&quot; — framing multi-year Western aid commitments as principally a windfall for weapons manufacturers.[1] DeLarme argued that devotion to the MIC is &quot;the truest hallmark of a deep-state stooge&quot; and transcends the partisan divide between establishment Democrats and Republicans.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Rise and Fall of the Warmongers ... And More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/raytheon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const raytheon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  raytheon as default
};
