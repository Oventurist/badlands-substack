import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Kerry","description":"","frontmatter":{"title":"John Kerry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["state-department","obama","foreign-aid","badlands"],"sources":["raw/bad-actors.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-kerry.md","filePath":"entities/john-kerry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-kerry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-kerry" tabindex="-1">John Kerry <a class="header-anchor" href="#john-kerry" aria-label="Permalink to &quot;John Kerry&quot;">​</a></h1><p>John Kerry served as Secretary of State in the second term of the <a href="/entities/barack-obama">Obama</a> administration. In the Badlands Media article &quot;Bad Actors,&quot; his role is confined to a single decisive act: the authorisation, in the administration&#39;s final hours, of a $220.3 million disbursement to Gaza.[1]</p><h2 id="the-final-hours-gaza-disbursement" tabindex="-1">The final-hours Gaza disbursement <a class="header-anchor" href="#the-final-hours-gaza-disbursement" aria-label="Permalink to &quot;The final-hours Gaza disbursement&quot;">​</a></h2><p>The Independent reported that the House was informed by then-Secretary of State John Kerry hours before <a href="/entities/donald-trump">Donald Trump</a>&#39;s inauguration.[1] Acting <a href="/entities/state-department">State Department</a> spokesman Mark Toner told the paper: &quot;In a final act, then-Secretary of State John Kerry instructed USAID to release $220.3 million for Gaza recovery programs.&quot;[1] Obama had overruled <a href="/entities/congress">Congress</a> to permit the transfer, which was nominally intended to support good governance and humanitarian aid for the <a href="/entities/palestinian-authority">Palestinian Authority</a>.[1] The incoming Trump administration froze the package.[1]</p><p>Joe Lange questions whether the money was truly destined for humanitarian purposes or for the Palestinian Authority at all, noting that Kerry routed it through <a href="/entities/usaid">USAID</a>, which he characterises as a <a href="/entities/cia">CIA</a> front group and taxpayer slush fund.[1] In his reading, the disbursement was the mechanism by which a political debt owed to <a href="/entities/prince-alwaleed-bin-talal">Prince Alwaleed bin Talal</a> was settled with public money.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bad Actors&quot;, URL: <a href="https://badlands.substack.com/p/bad-actors" target="_blank" rel="noreferrer">https://badlands.substack.com/p/bad-actors</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-kerry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnKerry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnKerry as default
};
