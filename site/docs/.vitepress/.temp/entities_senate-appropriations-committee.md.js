import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Senate Appropriations Committee","description":"","frontmatter":{"title":"Senate Appropriations Committee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","senate","appropriations","federal-spending","oversight"],"sources":["raw/badlands-news-brief-1c8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/senate-appropriations-committee.md","filePath":"entities/senate-appropriations-committee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/senate-appropriations-committee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="senate-appropriations-committee" tabindex="-1">Senate Appropriations Committee <a class="header-anchor" href="#senate-appropriations-committee" aria-label="Permalink to &quot;Senate Appropriations Committee&quot;">​</a></h1><p>The <strong>Senate Appropriations Committee</strong> is the <a href="/entities/united-states-senate">Senate</a> panel responsible for drafting legislation that allocates federal funds.[1]</p><h2 id="_2025-impoundment-confrontation" tabindex="-1">2025 impoundment confrontation <a class="header-anchor" href="#_2025-impoundment-confrontation" aria-label="Permalink to &quot;2025 impoundment confrontation&quot;">​</a></h2><p>In March 2025 the committee&#39;s leadership publicly challenged the <a href="/entities/trump-administration">Trump administration</a>&#39;s refusal to spend appropriated money.[1] Chairwoman <a href="/entities/susan-collins">Susan Collins</a>, Republican of Maine, initiated a letter to the <a href="/entities/white-house">White House</a> — co-signed by Senator Patty Murray of Washington, the panel&#39;s senior Democrat — asserting that the administration had violated the six-month spending law enacted earlier that month by withholding $2.9 billion.[1]</p><p>The appropriators argued that the statute requires the administration to spend all emergency money or none of it, and does not allow the president to select which appropriated funds to release.[1] The clash was characterized as an early salvo in a broader struggle between <a href="/entities/us-congress">Congress</a> and the executive over ultimate control of federal spending.[1] See <a href="/concepts/2025-emergency-spending-impoundment-dispute">2025 emergency spending impoundment dispute</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Myanmar&#39;s Mayhem, Musk&#39;s Marxists, &amp; the Military&#39;s Secret Memo&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/senate-appropriations-committee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const senateAppropriationsCommittee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  senateAppropriationsCommittee as default
};
