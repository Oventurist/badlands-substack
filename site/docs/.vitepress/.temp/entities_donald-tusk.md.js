import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Donald Tusk","description":"","frontmatter":{"title":"Donald Tusk","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["poland","europe","politics","diplomacy"],"sources":["raw/badlands-brief-05f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/donald-tusk.md","filePath":"entities/donald-tusk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/donald-tusk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="donald-tusk" tabindex="-1">Donald Tusk <a class="header-anchor" href="#donald-tusk" aria-label="Permalink to &quot;Donald Tusk&quot;">​</a></h1><p>Donald Tusk is the Prime Minister of Poland.[1]</p><h2 id="friction-with-the-u-s-embassy" tabindex="-1">Friction with the U.S. embassy <a class="header-anchor" href="#friction-with-the-u-s-embassy" aria-label="Permalink to &quot;Friction with the U.S. embassy&quot;">​</a></h2><p>In the run-up to February 2026, Tusk issued a rebuke after the U.S. ambassador to Poland criticized a Polish lawmaker over President <a href="/entities/donald-trump">Donald Trump</a>&#39;s Nobel nomination.[1] The incident was cited alongside other episodes — the U.S. embassy in Denmark removing flags honoring fallen Danish soldiers, U.S. agents providing Olympics security in Italy where Vice President <a href="/entities/jd-vance">JD Vance</a> was booed, and Trump&#39;s dismissal of <a href="/entities/nato">NATO</a> allies&#39; Afghanistan sacrifices — as evidence of a deepening transatlantic rift in which European officials increasingly view the United States as a rival.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Fiesta of Fake Elections, Fake Files &amp; Fake Crises&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-05f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-05f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/donald-tusk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const donaldTusk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  donaldTusk as default
};
