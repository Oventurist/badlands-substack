import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Visa Inc.","description":"","frontmatter":{"title":"Visa Inc.","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["payments","antitrust","debit-cards","doj","corporations"],"sources":["raw/badlands-news-brief-13f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/visa-inc.md","filePath":"entities/visa-inc.md","lastUpdated":null}');
const _sfc_main = { name: "entities/visa-inc.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="visa-inc" tabindex="-1">Visa Inc. <a class="header-anchor" href="#visa-inc" aria-label="Permalink to &quot;Visa Inc.&quot;">​</a></h1><p>Visa Inc. is the operator of the largest payments network in the United States and the defendant in a federal antitrust action over its position in the US debit card market.[1]</p><h2 id="justice-department-antitrust-case" tabindex="-1">Justice Department antitrust case <a class="header-anchor" href="#justice-department-antitrust-case" aria-label="Permalink to &quot;Justice Department antitrust case&quot;">​</a></h2><p>In September 2024, reporting indicated that the <a href="/entities/justice-department">US Justice Department</a> planned to allege that Visa had illegally monopolized the US debit card market.[1] The department&#39;s antitrust division was set to file a lawsuit in federal court as soon as Tuesday, September 24, 2024, accusing Visa of a range of anticompetitive conduct.[1]</p><p>Antitrust enforcers were preparing to accuse Visa of taking steps to keep rivals from challenging its dominance in debit, including making exclusive agreements that hindered the expansion of competing networks and thwarting efforts by technology companies to enter the market.[1] Visa shares fell as much as 1.95 percent in post-market trading in New York after the news was reported.[1]</p><p>The case was carried as a bonus item in the <a href="/entities/badlands-media">Badlands Media</a> news brief for September 24, 2024, alongside other federal enforcement stories of the period.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fake News Attempts to Provoke Real Wars&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-13f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-13f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/visa-inc.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const visaInc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  visaInc as default
};
