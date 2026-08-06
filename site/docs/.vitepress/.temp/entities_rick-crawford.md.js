import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rick Crawford","description":"","frontmatter":{"title":"Rick Crawford","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","intelligence","hpsci","elections"],"sources":["raw/badlands-news-brief-795.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rick-crawford.md","filePath":"entities/rick-crawford.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rick-crawford.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rick-crawford" tabindex="-1">Rick Crawford <a class="header-anchor" href="#rick-crawford" aria-label="Permalink to &quot;Rick Crawford&quot;">​</a></h1><p>Rick Crawford is a Republican member of the <a href="/entities/us-house-of-representatives">US House of Representatives</a> and Chairman of the <a href="/entities/house-permanent-select-committee-on-intelligence">House Permanent Select Committee on Intelligence</a> (HPSCI).[1]</p><h2 id="election-monitoring-activity" tabindex="-1">Election monitoring activity <a class="header-anchor" href="#election-monitoring-activity" aria-label="Permalink to &quot;Election monitoring activity&quot;">​</a></h2><p>Badlands commentator <a href="/entities/canncon">CannCon</a> highlighted Crawford&#39;s pattern of personally observing foreign elections, noting that in April 2025 he &quot;monitored&quot; elections in <a href="/entities/guyana">Guyana</a>, Suriname and Barbados in person — jurisdictions CannCon described as key narcotrafficking hubs.[1]</p><p>That observation was raised in the context of the disputed November 2025 election in <a href="/entities/honduras">Honduras</a>, where congressmen from HPSCI traveled to &quot;monitor&quot; the vote.[1] CannCon argued the pattern suggested &quot;an attempt at regime placement in Honduras,&quot; noting that three weeks after the vote no winner had been certified and that the <a href="/entities/white-house">White House</a> had revoked or denied visas for two officials of the <a href="/entities/libre-party">LIBRE party</a> involved in the count.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Brennan Decries Judge Shopping &amp; JD Says It&#39;s Okay to Be White!&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-795" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-795</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rick-crawford.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rickCrawford = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rickCrawford as default
};
