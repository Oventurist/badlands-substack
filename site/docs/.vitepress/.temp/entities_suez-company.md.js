import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Suez Company","description":"","frontmatter":{"title":"Suez Company","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["shipping","trade","europe","finance","geopolitics"],"sources":["raw/badlands-brief-ec9.md"],"confidence":"low"},"headers":[],"relativePath":"entities/suez-company.md","filePath":"entities/suez-company.md","lastUpdated":null}');
const _sfc_main = { name: "entities/suez-company.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="suez-company" tabindex="-1">Suez Company <a class="header-anchor" href="#suez-company" aria-label="Permalink to &quot;Suez Company&quot;">​</a></h1><p>The Suez Company is described in Badlands commentary as a Paris-based interest, together with its affiliates in the <a href="/entities/city-of-london">City of London</a>, representing the &quot;old guard&quot; of European control over global freight and maritime trade.[1]</p><p>In analysing President <a href="/entities/donald-trump">Donald Trump</a>&#39;s announcement of the <a href="/concepts/trump-route-for-international-peace-and-prosperity">Trump Route for International Peace and Prosperity</a>, contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> argued that Trump appears to be signaling a move that firmly aligns him with <a href="/entities/vladimir-putin">Vladimir Putin</a> and <a href="/entities/xi-jinping">Xi Jinping</a> against that old guard — specifically the Parisian-based Suez Company and its City of London affiliates.[1] The strategic stake is the <a href="/concepts/north-south-transport-corridor">North-South Transport Corridor</a>, which is expected to compete with the Suez Canal for traffic and freight moving between Asia and Europe.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Carefree Midterms, Space Networks, &amp; Turned Tables&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-ec9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-ec9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/suez-company.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const suezCompany = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  suezCompany as default
};
