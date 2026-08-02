import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"European Union","description":"","frontmatter":{"title":"European Union","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["europe","supranational","sovereignty","unipolarity"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/european-union.md","filePath":"entities/european-union.md","lastUpdated":null}');
const _sfc_main = { name: "entities/european-union.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="european-union" tabindex="-1">European Union <a class="header-anchor" href="#european-union" aria-label="Permalink to &quot;European Union&quot;">​</a></h1><p>The European Union is the supranational political and economic union of European states. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, the EU is treated as one of the principal institutional instruments of the post-Soviet unipolar order.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that the collapse of the Soviet system in the early 1990s &quot;ushered in a unipolar world order with the European Union and <a href="/concepts/nafta">NAFTA</a>, followed soon thereafter by the <a href="/entities/world-trade-organization">World Trade Organization</a> and the 1999 destruction of <a href="/concepts/glass-steagall-act">Glass-Steagall</a>.&quot; Through these mechanisms, he argues, &quot;the trans-Atlantic at last was converted into a cage of &#39;post-sovereign nations&#39; that no longer had actual control of their own powers of credit generation,&quot; with <a href="/entities/nato">NATO</a> subjecting even national militaries to technocratic control.</p><p>The EU also figures in the article&#39;s account of Ukraine: <a href="/entities/viktor-yanukovych">Viktor Yanukovych</a> is described as having declined &quot;to sacrifice Ukraine on the altar of the collapsing European Union,&quot; choosing instead the <a href="/entities/eurasian-economic-union">Eurasian Economic Union</a> in October 2013.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/european-union.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const europeanUnion = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  europeanUnion as default
};
