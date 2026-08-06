import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Forrester","description":"","frontmatter":{"title":"Forrester","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["research-firm","technology","cybersecurity","consulting"],"sources":["raw/badlands-news-brief-669.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/forrester.md","filePath":"entities/forrester.md","lastUpdated":null}');
const _sfc_main = { name: "entities/forrester.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="forrester" tabindex="-1">Forrester <a class="header-anchor" href="#forrester" aria-label="Permalink to &quot;Forrester&quot;">​</a></h1><p>Forrester is a technology research and advisory firm whose analysts advise corporate and government clients on information technology strategy, cybersecurity, and digital modernization.[1] Its public sector practice works with United States federal agencies on security architecture and modernization programs.[1]</p><h2 id="public-sector-practice-and-zero-trust" tabindex="-1">Public sector practice and zero trust <a class="header-anchor" href="#public-sector-practice-and-zero-trust" aria-label="Permalink to &quot;Public sector practice and zero trust&quot;">​</a></h2><p><a href="/entities/dana-barnes">Dana Barnes</a>, Forrester&#39;s Vice President of Public Sector, publicly advocated in October 2025 for embedding <a href="/concepts/zero-trust">zero trust</a> security principles across the whole of government, including software development pipelines and system consolidation efforts, arguing that a holistic organization-wide approach is required rather than piecemeal adoption.[1]</p><p>Speaking to FedScoop, Barnes described the administration&#39;s federal workforce reductions as both an opportunity and a risk for agencies: fewer staff forces quicker adoption of modern technologies such as artificial intelligence to preserve efficiency, but bureaucratic delay and inadequate training could undermine safe implementation.[1] The interview was subsequently carried and critiqued in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Dumb Questions, Pentagon Pizzas, &amp; Zero Trust&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-669" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-669</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/forrester.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forrester = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  forrester as default
};
