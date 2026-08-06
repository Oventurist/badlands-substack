import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Labor Relations Board","description":"","frontmatter":{"title":"National Labor Relations Board","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["independent-agency","labor","separation-of-powers","litigation"],"sources":["raw/badlands-news-brief-02a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-labor-relations-board.md","filePath":"entities/national-labor-relations-board.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-labor-relations-board.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-labor-relations-board" tabindex="-1">National Labor Relations Board <a class="header-anchor" href="#national-labor-relations-board" aria-label="Permalink to &quot;National Labor Relations Board&quot;">​</a></h1><p>The National Labor Relations Board (NLRB) is an independent federal labor board whose membership became a test case for presidential removal power during the second Trump administration.[1]</p><h2 id="_2025-removal-litigation" tabindex="-1">2025 removal litigation <a class="header-anchor" href="#_2025-removal-litigation" aria-label="Permalink to &quot;2025 removal litigation&quot;">​</a></h2><p>President <a href="/entities/donald-trump">Donald Trump</a> fired NLRB member <a href="/entities/gwynne-wilcox">Gwynne Wilcox</a>, and a federal district court voided the removal and restored her to the board.[1] The <a href="/entities/department-of-justice">Justice Department</a> asked the <a href="/entities/supreme-court-of-the-united-states">Supreme Court</a> on April 9, 2025 to block that decision along with a parallel ruling reinstating <a href="/entities/cathy-harris">Cathy Harris</a> at the <a href="/entities/merit-systems-protection-board">Merit Systems Protection Board</a>, and Chief Justice <a href="/entities/john-roberts">John Roberts</a> issued an administrative stay allowing both removals to go back into effect while the Court weighed the request.[1] Solicitor General <a href="/entities/d-john-sauer">D. John Sauer</a> framed the reinstatements as an injury to the president and to the separation of powers.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: World Wealth Whiplash &amp; The Most Secure Memorandum in History&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-labor-relations-board.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalLaborRelationsBoard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalLaborRelationsBoard as default
};
