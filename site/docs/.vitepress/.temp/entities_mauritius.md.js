import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mauritius","description":"","frontmatter":{"title":"Mauritius","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["geopolitics","indian-ocean","sovereignty","badlands-brief"],"sources":["raw/badlands-brief-25c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mauritius.md","filePath":"entities/mauritius.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mauritius.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mauritius" tabindex="-1">Mauritius <a class="header-anchor" href="#mauritius" aria-label="Permalink to &quot;Mauritius&quot;">​</a></h1><p>Mauritius is a small island nation near Madagascar in the Indian Ocean and the prospective sovereign of the <a href="/entities/chagos-islands">Chagos Archipelago</a>.[1]</p><p>In May 2025 the United Kingdom approved a plan to hand the Chagos Islands to Mauritius while signing a 99-year lease retaining access to the joint UK–US base at <a href="/entities/diego-garcia">Diego Garcia</a>.[1] The sovereignty dispute had been shaped by a 2019 advisory opinion of the <a href="/entities/international-court-of-justice">International Court of Justice</a> finding that the UK&#39;s 1965 separation of the islands from Mauritius was unlawful.[1]</p><p>According to a <em>Telegraph</em> report cited by RT, U.S. officials have discussed a proposal to purchase the Chagos Islands from Mauritius once the transfer from Britain is complete.[1] Mauritius has not confirmed receiving any formal offer; RT, citing Reuters, reported that the Mauritian government said it had not received an official proposal and reiterated that its sovereignty over the archipelago is &quot;non-negotiable.&quot;[1]</p><p><a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> framed a direct US–Mauritius transaction as a move that would bypass London entirely and leave the British sidelined.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Elections are Fake; as is Trump&#39;s Friendship with Bibi&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-25c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-25c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mauritius.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mauritius = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mauritius as default
};
