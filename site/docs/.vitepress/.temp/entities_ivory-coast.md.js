import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ivory Coast","description":"","frontmatter":{"title":"Ivory Coast","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["west-africa","ecowas","sahel","geopolitics"],"sources":["raw/badlands-brief-e8d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ivory-coast.md","filePath":"entities/ivory-coast.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ivory-coast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ivory-coast" tabindex="-1">Ivory Coast <a class="header-anchor" href="#ivory-coast" aria-label="Permalink to &quot;Ivory Coast&quot;">​</a></h1><p>Ivory Coast (Côte d&#39;Ivoire) is a West African state that Badlands analysts identify as one of two centers of power within <a href="/entities/ecowas">ECOWAS</a>, alongside <a href="/entities/nigeria">Nigeria</a>.[1]</p><p>In the framing advanced by <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a>, while Nigeria functions as the political and economic center of ECOWAS, the Ivory Coast appears to operate as a paramilitary proxy hub used to launch insurgency operations against the <a href="/entities/alliance-of-sahel-states">Alliance of Sahel States</a>.[1]</p><p>In early January 2026, the government of <a href="/entities/burkina-faso">Burkina Faso</a> reported that it had foiled a coup attempt against President <a href="/entities/ibrahim-traore">Ibrahim Traoré</a> that was allegedly run out of the Ivory Coast, with the intent of installing former leader Lt. Colonel <a href="/entities/paul-henri-sandaogo-damiba">Paul-Henri Sandaogo Damiba</a>, who has repeatedly been accused of plotting against Traoré while allegedly operating from Ivorian territory.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Miraflores New Tenant, Walz Awakens, &amp; Kelly&#39;s Court Martial&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e8d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e8d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ivory-coast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ivoryCoast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ivoryCoast as default
};
