import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"World Trade Organization","description":"","frontmatter":{"title":"World Trade Organization","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["trade","globalization","sovereignty","unipolarity"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/world-trade-organization.md","filePath":"entities/world-trade-organization.md","lastUpdated":null}');
const _sfc_main = { name: "entities/world-trade-organization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="world-trade-organization" tabindex="-1">World Trade Organization <a class="header-anchor" href="#world-trade-organization" aria-label="Permalink to &quot;World Trade Organization&quot;">​</a></h1><p>The World Trade Organization (WTO) is the intergovernmental body governing international trade rules, established in 1995 as successor to the General Agreement on Tariffs and Trade. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, the WTO is named as one of the architectural components of the post-Cold War unipolar order.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> writes that the collapse of the Soviet system &quot;ushered in a unipolar world order with the <a href="/entities/european-union">European Union</a> and <a href="/concepts/nafta">NAFTA</a>, followed soon thereafter by the World Trade Organization and the 1999 destruction of <a href="/concepts/glass-steagall-act">Glass-Steagall</a>.&quot; Taken together, these institutions are said to have converted the trans-Atlantic world into &quot;a cage of &#39;post-sovereign nations&#39; that no longer had actual control of their own powers of credit generation.&quot;</p><p>The essay contrasts this free-trade architecture with &quot;a restoration of protectionism in the USA,&quot; which it presents as having seriously challenged NAFTA and, by extension, the assumptions of the WTO era.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/world-trade-organization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const worldTradeOrganization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  worldTradeOrganization as default
};
