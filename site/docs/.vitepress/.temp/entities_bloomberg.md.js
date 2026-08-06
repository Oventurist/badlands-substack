import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bloomberg","description":"","frontmatter":{"title":"Bloomberg","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","financial-press"],"sources":["raw/badlands-news-brief-0f0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bloomberg.md","filePath":"entities/bloomberg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bloomberg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bloomberg" tabindex="-1">Bloomberg <a class="header-anchor" href="#bloomberg" aria-label="Permalink to &quot;Bloomberg&quot;">​</a></h1><p>Bloomberg is a financial news and data organization whose reporting is frequently aggregated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="coverage-cited-by-badlands-media" tabindex="-1">Coverage cited by Badlands Media <a class="header-anchor" href="#coverage-cited-by-badlands-media" aria-label="Permalink to &quot;Coverage cited by Badlands Media&quot;">​</a></h2><p>In October 2023 Bloomberg reported that the waning of the COVID-19 pandemic was forcing billions of dollars in corporate writedowns across the health-care industry.[1] Vaccine makers and pharmacy chains saw a steep decline in the number of people receiving COVID shots, makers of at-home rapid tests went out of business, and companies that manufactured personal protective equipment shut down.[1] Firms that had reconfigured themselves during the pandemic — pharmaceutical companies pivoting from cancer and rare diseases to vaccines and antivirals, and medical-device makers ramping up at-home testing kits — saw that transformation unravel.[1] <a href="/entities/pfizer">Pfizer Inc.</a>, described as one of the biggest winners of the pandemic boom, cut $9 billion from its annual sales forecast on account of declining demand for its COVID shots and the Paxlovid treatment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Escalation ... Acceleration ... and Biden&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0f0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0f0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bloomberg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bloomberg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bloomberg as default
};
