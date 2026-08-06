import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UCLA Health","description":"","frontmatter":{"title":"UCLA Health","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["health","research","universities","cannabis"],"sources":["raw/badlands-news-brief-2e4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ucla-health.md","filePath":"entities/ucla-health.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ucla-health.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ucla-health" tabindex="-1">UCLA Health <a class="header-anchor" href="#ucla-health" aria-label="Permalink to &quot;UCLA Health&quot;">​</a></h1><p><strong>UCLA Health</strong> is the academic health system affiliated with the University of California, Los Angeles. It led a large 2025 evidence review of <a href="/concepts/medical-cannabis">medical cannabis</a> that was published in <a href="/entities/jama">JAMA</a>.[1]</p><h2 id="cannabis-evidence-review" tabindex="-1">Cannabis evidence review <a class="header-anchor" href="#cannabis-evidence-review" aria-label="Permalink to &quot;Cannabis evidence review&quot;">​</a></h2><p>The UCLA Health–led analysis concluded that medical cannabis does not have strong scientific evidence for most of the conditions it is commonly used to treat, including chronic pain, anxiety and insomnia.[1] Researchers examined more than 2,500 studies released between January 2010 and September 2025 — randomized clinical trials, meta-analyses and clinical guidelines — and focused closely on more than 120 studies distinguished by large sample sizes, recent publication, relevance and topical breadth.[1] Dr. <a href="/entities/michael-hsu">Michael Hsu</a> of UCLA Health served as the review&#39;s first author.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Escalating Elections, Fragmented Forums, &amp; Merry Murder Metrics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2e4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2e4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ucla-health.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uclaHealth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uclaHealth as default
};
