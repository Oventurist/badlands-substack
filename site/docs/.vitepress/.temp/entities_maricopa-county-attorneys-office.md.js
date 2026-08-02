import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse(`{"title":"Maricopa County Attorney's Office","description":"","frontmatter":{"title":"Maricopa County Attorney's Office","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["institution","arizona","maricopa-county","legal","elections"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/maricopa-county-attorneys-office.md","filePath":"entities/maricopa-county-attorneys-office.md","lastUpdated":null}`);
const _sfc_main = { name: "entities/maricopa-county-attorneys-office.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="maricopa-county-attorney-s-office" tabindex="-1">Maricopa County Attorney&#39;s Office <a class="header-anchor" href="#maricopa-county-attorney-s-office" aria-label="Permalink to &quot;Maricopa County Attorney&#39;s Office&quot;">​</a></h1><p>The Maricopa County Attorney&#39;s Office is the prosecuting and civil legal authority for <a href="/entities/maricopa-county">Maricopa County</a>, Arizona. Its Civil Division represents the county and its officials in non-criminal matters, including election administration disputes.</p><h2 id="role-in-the-2022-election-dispute" tabindex="-1">Role in the 2022 election dispute <a class="header-anchor" href="#role-in-the-2022-election-dispute" aria-label="Permalink to &quot;Role in the 2022 election dispute&quot;">​</a></h2><p>During and after the November 2022 general election the Civil Division was headed by <a href="/entities/tom-liddy">Tom Liddy</a>. The office was the recipient of the November 19, 2022 letter from Assistant Attorney General <a href="/entities/jennifer-wright">Jennifer Wright</a> of the Arizona Attorney General&#39;s Election Integrity Unit, which relayed hundreds of citizen complaints about the county&#39;s compliance with Arizona election law and demanded detailed documentation on ballot-on-demand printer failures, election-day check-out procedures, and the handling of <a href="/concepts/door-3-ballots">&quot;Door 3&quot;</a> ballots before the county&#39;s canvass was submitted to the <a href="/entities/arizona-secretary-of-state">Secretary of State</a>.</p><p>The office also fielded inquiries from campaign representatives. <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> cites a November 18, 2022 post by the Kari Lake War Room account — &quot;We&#39;ve asked Maricopa County for answers. This is what we get in return&quot; — publicizing Liddy&#39;s reply to a <a href="/entities/kari-lake">Kari Lake</a> volunteer, an exchange that drew national coverage and accusations that Lake&#39;s side had been threatened or, conversely, that Lake&#39;s lawyer had threatened Liddy.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/maricopa-county-attorneys-office.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maricopaCountyAttorneysOffice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maricopaCountyAttorneysOffice as default
};
