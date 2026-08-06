import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mopani Mining","description":"","frontmatter":{"title":"Mopani Mining","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["zambia","copper","mining","glencore","uae"],"sources":["raw/badlands-news-brief-1ba.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mopani-mining.md","filePath":"entities/mopani-mining.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mopani-mining.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mopani-mining" tabindex="-1">Mopani Mining <a class="header-anchor" href="#mopani-mining" aria-label="Permalink to &quot;Mopani Mining&quot;">​</a></h1><p>Mopani Mining is a copper mining operation in the Zambia region directly adjacent to Katanga in the <a href="/entities/democratic-republic-of-the-congo">Democratic Republic of Congo</a>.[1]</p><p>As part of a 2022 settlement deal arising from corruption litigation against <a href="/entities/glencore">Glencore</a>, the United Arab Emirates acquired Mopani Mining from Glencore in a forced sale.[1] Badlands commentary framed the transfer as an early instance of a broader pattern, predicting that Glencore would likely face similar judgements affecting its other African subsidiaries given its record of contested business dealings.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: TrumpaMania Reigns ... with a Russian Twist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ba" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ba</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mopani-mining.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mopaniMining = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mopaniMining as default
};
