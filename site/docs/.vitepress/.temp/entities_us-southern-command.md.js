import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Southern Command","description":"","frontmatter":{"title":"US Southern Command","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pentagon","military","combatant-commands","latin-america"],"sources":["raw/badlands-news-brief-763.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-southern-command.md","filePath":"entities/us-southern-command.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-southern-command.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-southern-command" tabindex="-1">US Southern Command <a class="header-anchor" href="#us-southern-command" aria-label="Permalink to &quot;US Southern Command&quot;">​</a></h1><p>US Southern Command (SOUTHCOM) is the unified combatant command responsible for United States military operations in Central America, South America and the Caribbean.[1] Together with <a href="/entities/united-states-northern-command">US Northern Command</a>, it currently holds responsibility for military operations across the Western Hemisphere.[1]</p><h2 id="proposed-consolidation" tabindex="-1">Proposed consolidation <a class="header-anchor" href="#proposed-consolidation" aria-label="Permalink to &quot;Proposed consolidation&quot;">​</a></h2><p>Under the <a href="/entities/pentagon">Pentagon</a> overhaul drafted in December 2025 and driven by Secretary of War <a href="/entities/pete-hegseth">Pete Hegseth</a>, Southern Command and Northern Command would be placed under a newly created <a href="/entities/us-americas-command">US Americas Command</a>, reported as &quot;Americom.&quot;[1] The wider plan would also downgrade <a href="/entities/us-central-command">Central Command</a>, <a href="/entities/united-states-european-command">European Command</a> and <a href="/entities/us-africa-command">Africa Command</a> beneath a new <a href="/entities/us-international-command">US International Command</a>, reducing the number of four-star generals and reshaping the balance of influence among senior officers.[1]</p><p>Badlands commentary read the emergent two-pole structure — one international, one domestic — as evidence that the US military will increasingly be directed at homeland defence and at cartels operating in the hemisphere.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Ice Maiden, A Command Overhaul, &amp; A Thrice Jewish President&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-763" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-763</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-southern-command.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usSouthernCommand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usSouthernCommand as default
};
