import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Earthjustice","description":"","frontmatter":{"title":"Earthjustice","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["climate","litigation","environmental-groups"],"sources":["raw/badlands-brief-05f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/earthjustice.md","filePath":"entities/earthjustice.md","lastUpdated":null}');
const _sfc_main = { name: "entities/earthjustice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="earthjustice" tabindex="-1">Earthjustice <a class="header-anchor" href="#earthjustice" aria-label="Permalink to &quot;Earthjustice&quot;">​</a></h1><p>Earthjustice is an environmental legal advocacy organization that opposed the <a href="/entities/trump-administration">Trump administration</a>&#39;s 2026 rescission of the <a href="/entities/environmental-protection-agency">EPA</a>&#39;s <a href="/concepts/endangerment-finding">endangerment finding</a>.[1]</p><h2 id="opposition-to-the-2026-rescission" tabindex="-1">Opposition to the 2026 rescission <a class="header-anchor" href="#opposition-to-the-2026-rescission" aria-label="Permalink to &quot;Opposition to the 2026 rescission&quot;">​</a></h2><p>Along with the <a href="/entities/environmental-defense-fund">Environmental Defense Fund</a>, Earthjustice strongly condemned the action as a major assault on federal climate policy, warning of increased pollution, thousands of premature deaths, higher health and fuel costs, and accelerated climate impacts, and pledged immediate court challenges based on settled science and Supreme Court precedent upholding the finding.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Fiesta of Fake Elections, Fake Files &amp; Fake Crises&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-05f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-05f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/earthjustice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const earthjustice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  earthjustice as default
};
