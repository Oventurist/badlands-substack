import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Senate Armed Services Committee","description":"","frontmatter":{"title":"Senate Armed Services Committee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","defense","ukraine"],"sources":["raw/badlands-news-brief-627.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/senate-armed-services-committee.md","filePath":"entities/senate-armed-services-committee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/senate-armed-services-committee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="senate-armed-services-committee" tabindex="-1">Senate Armed Services Committee <a class="header-anchor" href="#senate-armed-services-committee" aria-label="Permalink to &quot;Senate Armed Services Committee&quot;">​</a></h1><p>The Senate Armed Services Committee is the standing committee of the United States Senate with jurisdiction over the Department of Defense and military policy.[1]</p><p>In September 2023 the committee unanimously approved allowing the Department of Defense to send long-range missiles to Ukraine, a step that immediately preceded a letter from Senators <a href="/entities/tom-cotton">Tom Cotton</a>, <a href="/entities/roger-wicker">Roger Wicker</a>, <a href="/entities/susan-collins">Susan Collins</a> and <a href="/entities/lindsey-graham">Lindsey Graham</a> pressing President <a href="/entities/joe-biden">Joe Biden</a> to transfer <a href="/concepts/atacms">MGM-140 Army Tactical Missile Systems</a> to Kyiv.[1] Badlands commentary cited the episode as evidence of the continued strength of the <a href="/concepts/military-industrial-complex">Military-Industrial Congressional Complex</a> within the Republican caucus.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Kennedy Assassins, Justice Wins &amp; More&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-627" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-627</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/senate-armed-services-committee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const senateArmedServicesCommittee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  senateArmedServicesCommittee as default
};
