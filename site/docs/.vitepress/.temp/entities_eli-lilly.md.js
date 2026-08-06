import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eli Lilly","description":"","frontmatter":{"title":"Eli Lilly","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pharmaceuticals","mrna","vaccines","acquisitions"],"sources":["raw/badlands-brief-414.md"],"confidence":"low"},"headers":[],"relativePath":"entities/eli-lilly.md","filePath":"entities/eli-lilly.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eli-lilly.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eli-lilly" tabindex="-1">Eli Lilly <a class="header-anchor" href="#eli-lilly" aria-label="Permalink to &quot;Eli Lilly&quot;">​</a></h1><p>Eli Lilly is a major American pharmaceutical company.[1]</p><h2 id="acquisition-of-fauci-linked-mrna-startup" tabindex="-1">Acquisition of Fauci-linked mRNA startup <a class="header-anchor" href="#acquisition-of-fauci-linked-mrna-startup" aria-label="Permalink to &quot;Acquisition of Fauci-linked mRNA startup&quot;">​</a></h2><p>In 2026 reporting by <a href="/entities/natalie-winters">Natalie Winters</a> described Eli Lilly as buying, for up to $1.55 billion, a stealth mRNA vaccine startup that <a href="/entities/anthony-fauci">Anthony Fauci</a> had quietly joined in 2023. According to that account, the Biden administration had previously awarded the startup more than $28 million to develop vaccines for viruses with pandemic potential.[1]</p><p>The reporting circulated in the aftermath of Fauci&#39;s Senate hearing on Covid origins, where he invoked the Fifth Amendment, and was cited by Badlands commentary as part of a broader pattern of pandemic-era financial entanglement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narcissistic Sociopathy &amp; Rebranded Sex Robots For Kids&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-414" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-414</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eli-lilly.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eliLilly = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eliLilly as default
};
