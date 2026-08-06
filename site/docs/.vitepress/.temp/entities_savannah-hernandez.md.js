import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Savannah Hernandez","description":"","frontmatter":{"title":"Savannah Hernandez","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","immigration","independent-media","tax-refunds"],"sources":["raw/badlands-news-brief-1c8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/savannah-hernandez.md","filePath":"entities/savannah-hernandez.md","lastUpdated":null}');
const _sfc_main = { name: "entities/savannah-hernandez.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="savannah-hernandez" tabindex="-1">Savannah Hernandez <a class="header-anchor" href="#savannah-hernandez" aria-label="Permalink to &quot;Savannah Hernandez&quot;">​</a></h1><p><strong>Savannah Hernandez</strong> is an independent American journalist known for on-the-ground video reporting posted to X.[1]</p><p>In March 2025 Hernandez published footage in which she said she &quot;caught a <a href="/entities/jackson-hewitt">Jackson Hewitt</a> employee coaching illegals on how they could get up to $14,000 in tax refunds whether they&#39;re &#39;working or not.&#39;&quot;[1] She proposed that determining who is receiving tax refunds should be the next target of scrutiny for <a href="/entities/elon-musk">Elon Musk</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Myanmar&#39;s Mayhem, Musk&#39;s Marxists, &amp; the Military&#39;s Secret Memo&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/savannah-hernandez.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const savannahHernandez = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  savannahHernandez as default
};
