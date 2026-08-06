import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"International Maritime Organization","description":"","frontmatter":{"title":"International Maritime Organization","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["shipping","united-nations","maritime-security","hormuz"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/international-maritime-organization.md","filePath":"entities/international-maritime-organization.md","lastUpdated":null}');
const _sfc_main = { name: "entities/international-maritime-organization.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="international-maritime-organization" tabindex="-1">International Maritime Organization <a class="header-anchor" href="#international-maritime-organization" aria-label="Permalink to &quot;International Maritime Organization&quot;">​</a></h1><p>The International Maritime Organization (IMO) is the international body responsible for regulating maritime shipping, described in Badlands Brief reporting as having worked closely with the United States, <a href="/entities/iran">Iran</a>, and the Gulf States to create the two-lane traffic pattern governing transits of the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a> during the 2026 ceasefire period.[1]</p><p>All parties reportedly agreed that these lanes would be the sole routes used during the 60-day window stipulated in the memorandum of understanding intended to end the U.S.–Iran conflict, a period during which Iran also paused the collection of transit fees.[1] Badlands commentary noted that the tanker Ever Lovely instead took what was described as a &quot;UN-backed route&quot; along the Omani coast, outside the normal traffic pattern, alongside five other tankers; when Iranian authorities ordered the ships to turn back, the other five complied while the Ever Lovely&#39;s AIS tracker stopped transmitting.[1] The author argued that Iran likely interpreted this as a deliberate attempt to undermine the agreement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/international-maritime-organization.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const internationalMaritimeOrganization = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  internationalMaritimeOrganization as default
};
