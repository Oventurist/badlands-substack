import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LIBRE Party","description":"","frontmatter":{"title":"LIBRE Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["honduras","political-party","elections"],"sources":["raw/badlands-news-brief-795.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/libre-party.md","filePath":"entities/libre-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/libre-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libre-party" tabindex="-1">LIBRE Party <a class="header-anchor" href="#libre-party" aria-label="Permalink to &quot;LIBRE Party&quot;">​</a></h1><p>The LIBRE party is a Honduran political party that holds the legislative majority in <a href="/entities/honduras">Honduras</a>.[1]</p><h2 id="us-visa-restrictions-december-2025" tabindex="-1">US visa restrictions (December 2025) <a class="header-anchor" href="#us-visa-restrictions-december-2025" aria-label="Permalink to &quot;US visa restrictions (December 2025)&quot;">​</a></h2><p>In December 2025 two LIBRE party officials became the targets of US visa actions arising from the disputed November 2025 Honduran election.[1] The <a href="/entities/state-department">State Department</a> revoked the visa of Mario Morazán, a magistrate of the Electoral Justice Tribunal, and denied a visa to Marlon Ochoa, a member of the Honduras National Electoral Council, asserting that they had attempted to impede a special vote count.[1] The department invoked Section 221(i) of the <a href="/concepts/immigration-and-nationality-act">Immigration and Nationality Act</a>, which bars entry to persons whose activities may have serious adverse US foreign policy consequences.[1]</p><p>Badlands commentator <a href="/entities/canncon">CannCon</a> framed the visa actions — taken as the count remained uncertified three weeks after the vote — as part of what he described as an apparent attempt at &quot;regime placement&quot; in Honduras, alongside on-the-ground election monitoring by members of the <a href="/entities/house-permanent-select-committee-on-intelligence">House Permanent Select Committee on Intelligence</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Brennan Decries Judge Shopping &amp; JD Says It&#39;s Okay to Be White!&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-795" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-795</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/libre-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libreParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libreParty as default
};
