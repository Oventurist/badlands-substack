import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Barrasso","description":"","frontmatter":{"title":"John Barrasso","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["senate","republicans","wyoming","nominations","nuclear-option"],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-barrasso.md","filePath":"entities/john-barrasso.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-barrasso.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-barrasso" tabindex="-1">John Barrasso <a class="header-anchor" href="#john-barrasso" aria-label="Permalink to &quot;John Barrasso&quot;">​</a></h1><p>John Barrasso is a Republican United States Senator from Wyoming who, in September 2025, served as Senate Majority Whip.[1]</p><h2 id="role-in-the-september-2025-confirmations" tabindex="-1">Role in the September 2025 confirmations <a class="header-anchor" href="#role-in-the-september-2025-confirmations" aria-label="Permalink to &quot;Role in the September 2025 confirmations&quot;">​</a></h2><p>On Thursday, 18 September 2025, Senate Republicans used newly adopted confirmation rules to confirm 48 of President <a href="/entities/donald-trump">Donald Trump</a>&#39;s nominees along party lines, many of them undersecretary or assistant secretary positions across federal agencies as well as ambassadorships.[1] Speaking on the Senate floor during the effort, Barrasso framed the change as a necessary response to Democratic tactics: &quot;Why has not a single nominee been confirmed by voice vote or by unanimous consent? We know why... It&#39;s Democrat obstruction.&quot;[1]</p><p>The rules change had been enacted the previous week when Senate Republicans went &quot;nuclear&quot; after a last-minute deal with Democrats collapsed, permitting confirmation of unlimited nominees in en bloc batches by simple majority — though still requiring procedural steps and 30 hours of debate.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-barrasso.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnBarrasso = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnBarrasso as default
};
