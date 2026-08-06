import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Omnicom","description":"","frontmatter":{"title":"Omnicom","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["advertising","media","antitrust","ftc","censorship"],"sources":["raw/badlands-news-brief-899.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/omnicom.md","filePath":"entities/omnicom.md","lastUpdated":null}');
const _sfc_main = { name: "entities/omnicom.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="omnicom" tabindex="-1">Omnicom <a class="header-anchor" href="#omnicom" aria-label="Permalink to &quot;Omnicom&quot;">​</a></h1><p>Omnicom is one of the largest advertising and media-buying holding companies in the world, counted among the industry&#39;s &quot;Big Six&quot; firms.[1]</p><h2 id="merger-with-interpublic-group" tabindex="-1">Merger with Interpublic Group <a class="header-anchor" href="#merger-with-interpublic-group" aria-label="Permalink to &quot;Merger with Interpublic Group&quot;">​</a></h2><p>In June 2025 the <a href="/entities/federal-trade-commission">Federal Trade Commission</a> approved Omnicom&#39;s merger with <a href="/entities/interpublic-group">Interpublic Group</a> (IPG), a combination that together accounts for roughly a third of the global &quot;Big Six&quot; advertising sector.[1] FTC Chairman <a href="/entities/andrew-ferguson">Andrew Ferguson</a> announced that as part of the approval the two firms agreed not to enter into or maintain any practice discriminating against media outlets on the basis of political or ideological viewpoint.[1]</p><h2 id="garm-and-advertiser-blacklisting" tabindex="-1">GARM and advertiser blacklisting <a class="header-anchor" href="#garm-and-advertiser-blacklisting" aria-label="Permalink to &quot;GARM and advertiser blacklisting&quot;">​</a></h2><p>The FTC noted that Omnicom was a founding member of <a href="/concepts/global-alliance-for-responsible-media">GARM</a>, a cross-industry initiative through which, according to the agency, advertisers colluded to blacklist center-right outlets including Breitbart News, Fox News, and the Daily Wire.[1] Ferguson characterized the history of collusion in the media-buying market, combined with the increased post-merger potential for it, as justifying a behavioral remedy — an unusual step in merger review.[1]</p><p>Commentators in the Badlands orbit described the arrangement as a &quot;massive win&quot; for outlets that had been demonetized for reporting outside official narratives, contingent on actual compliance.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Daddy Issues &amp; Damage Assessments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-899" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-899</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/omnicom.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const omnicom = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  omnicom as default
};
