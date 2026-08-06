import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hope Has No Borders","description":"","frontmatter":{"title":"Hope Has No Borders","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","migrants","charity","denver"],"sources":["raw/badlands-news-brief-0c1.md"],"confidence":"low"},"headers":[],"relativePath":"entities/hope-has-no-borders.md","filePath":"entities/hope-has-no-borders.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hope-has-no-borders.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hope-has-no-borders" tabindex="-1">Hope Has No Borders <a class="header-anchor" href="#hope-has-no-borders" aria-label="Permalink to &quot;Hope Has No Borders&quot;">​</a></h1><p>Hope Has No Borders is a charity operating in Colorado that pairs migrant workers and their families with local residents willing to host them in their homes.[1]</p><h2 id="activity" tabindex="-1">Activity <a class="header-anchor" href="#activity" aria-label="Permalink to &quot;Activity&quot;">​</a></h2><p>The organisation began pairing migrants with hosts in Colorado in late 2023.[1] By May 2024, with assistance from United Way, the pairing process had been simplified to a single phone call: prospective hosts in <a href="/entities/denver">Denver</a> could dial 211 and register the amount of space they could provide.[1] The arrangement was publicised by local television coverage that profiled a Denver single mother who took in a family of four migrants after learning that new arrivals were sleeping in airports and on the streets because shelters had reached capacity.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands Media presented the hotline critically, characterising it as an invitation to quarter arrivals in private homes after a short vetting process, and situating it alongside Denver&#39;s reallocation of $89.9 million away from police and fire funding toward newcomer support programmes.[1] The brief also noted that similar host-a-migrant efforts had appeared in several other US cities.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Biden Bungles Rafah as Trump Trials Collapse&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0c1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0c1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hope-has-no-borders.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hopeHasNoBorders = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hopeHasNoBorders as default
};
