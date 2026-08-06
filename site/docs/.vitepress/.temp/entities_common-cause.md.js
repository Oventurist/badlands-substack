import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Common Cause","description":"","frontmatter":{"title":"Common Cause","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","lawfare","elections","colorado"],"sources":["raw/badlands-news-brief-523.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/common-cause.md","filePath":"entities/common-cause.md","lastUpdated":null}');
const _sfc_main = { name: "entities/common-cause.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="common-cause" tabindex="-1">Common Cause <a class="header-anchor" href="#common-cause" aria-label="Permalink to &quot;Common Cause&quot;">​</a></h1><p>Common Cause is an American advocacy organization active in election-related litigation and testimony, described in <a href="/entities/badlands-media">Badlands Media</a> commentary as a &quot;leftist lawfare outfit.&quot;[1]</p><h2 id="role-in-the-griswold-impeachment-hearing" tabindex="-1">Role in the Griswold impeachment hearing <a class="header-anchor" href="#role-in-the-griswold-impeachment-hearing" aria-label="Permalink to &quot;Role in the Griswold impeachment hearing&quot;">​</a></h2><p>During the April 2024 <a href="/entities/colorado">Colorado</a> House committee hearing on the attempted impeachment of Secretary of State <a href="/entities/jena-griswold">Jena Griswold</a>, two of Griswold&#39;s four witnesses came from Common Cause.[1] One of those two had served as an attorney for the petitioners in the ballot-disqualification case that the <a href="/entities/supreme-court-of-the-united-states">U.S. Supreme Court</a> decided 9-0 in favor of keeping <a href="/entities/donald-trump">Donald Trump</a> on the ballot.[1]</p><p><a href="/entities/ashe-in-america">Ashe in America</a>, who attended the hearing in person, noted that Griswold&#39;s witnesses &quot;patted themselves on the back for being nonpartisan&quot; despite that direct involvement in the underlying litigation, and that no one testified under oath during the proceeding.[1] The episode is presented as an illustration of how nominally neutral civil-society organizations function as participants in <a href="/concepts/lawfare">lawfare</a> campaigns.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Russia Makes a Move, Garland Threatens &amp; Zelenskyy Stalls&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-523" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-523</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/common-cause.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonCause = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonCause as default
};
