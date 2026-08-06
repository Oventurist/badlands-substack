import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sam J. Myers","description":"","frontmatter":{"title":"Sam J. Myers","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","judiciary","2020-election","maricopa-county"],"sources":["raw/badlands-news-brief-7bf.md"],"confidence":"low"},"headers":[],"relativePath":"entities/sam-j-myers.md","filePath":"entities/sam-j-myers.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sam-j-myers.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sam-j-myers" tabindex="-1">Sam J. Myers <a class="header-anchor" href="#sam-j-myers" aria-label="Permalink to &quot;Sam J. Myers&quot;">​</a></h1><p>Sam J. Myers is a judge of the <a href="/entities/maricopa-county-superior-court">Maricopa County Superior Court</a> in Arizona.[1]</p><p>In a ruling filed with the court clerk on Monday, May 19, 2025, Myers ordered state prosecutors to send back to a grand jury the case in which Republicans had been charged the previous year over their alleged roles in trying to overturn the 2020 election, a decision that potentially jeopardized the high-profile indictments.[1] Myers sided with the Republican defendants, finding that prosecutors failed to provide the grand jury with the text of the 1887 <a href="/concepts/electoral-count-act">Electoral Count Act</a>, the federal law central to the defense.[1] The ruling was a major setback for Arizona Attorney General <a href="/entities/kris-mayes">Kris Mayes</a>, who promised to appeal so she could keep the prosecution going.[1] See <a href="/concepts/arizona-fake-electors-case">Arizona fake electors case</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Bilateral Bromance &amp; A Misled Grand Jury&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7bf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7bf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sam-j-myers.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const samJMyers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  samJMyers as default
};
