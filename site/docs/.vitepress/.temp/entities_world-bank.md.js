import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Bank","description":"","frontmatter":{"title":"World Bank","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["finance","bretton-woods","development","international-organization"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/world-bank.md","filePath":"entities/world-bank.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-bank.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-bank" tabindex="-1">World Bank <a class="header-anchor" href="#world-bank" aria-label="Permalink to &quot;World Bank&quot;">​</a></h1><p>The World Bank is the development-lending institution founded at the 1944 Bretton Woods conference alongside the <a href="/entities/international-monetary-fund">International Monetary Fund</a>.</p><h2 id="role-in-the-badlands-corpus" tabindex="-1">Role in the Badlands corpus <a class="header-anchor" href="#role-in-the-badlands-corpus" aria-label="Permalink to &quot;Role in the Badlands corpus&quot;">​</a></h2><p>The Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a> cites the World Bank as one of the Bretton Woods institutions which, together with the IMF and the U.S. government itself, was in <a href="/entities/matthew-ehret">Matthew Ehret</a>&#39;s account captured after the Second World War by &quot;deep state operatives.&quot; The article maintains that the <a href="/concepts/bretton-woods-system">system&#39;s</a> founding purpose — emitting long-term credit for large-scale projects so as to internationalise the New Deal — was betrayed rather than fulfilled by these institutions, and points to the <a href="/concepts/belt-and-road-initiative">Belt and Road Initiative</a> and the proposed SCO Development Bank as the present-day carriers of that original development mission.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-bank.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldBank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldBank as default
};
