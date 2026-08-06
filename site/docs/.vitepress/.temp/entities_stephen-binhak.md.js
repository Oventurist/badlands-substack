import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Stephen Binhak","description":"","frontmatter":{"title":"Stephen Binhak","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","law","2020-election","attorneys"],"sources":["raw/badlands-news-brief-7bf.md"],"confidence":"low"},"headers":[],"relativePath":"entities/stephen-binhak.md","filePath":"entities/stephen-binhak.md","lastUpdated":null}');
const _sfc_main = { name: "entities/stephen-binhak.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="stephen-binhak" tabindex="-1">Stephen Binhak <a class="header-anchor" href="#stephen-binhak" aria-label="Permalink to &quot;Stephen Binhak&quot;">​</a></h1><p>Stephen Binhak is a defense attorney who spearheaded the effort to send Arizona&#39;s 2020 Republican electors case back to a grand jury.[1]</p><p>Following Maricopa County Superior Court Judge Sam J. Myers&#39;s May 2025 ruling that prosecutors had failed to present the grand jury with the text of the 1887 <a href="/concepts/electoral-count-act">Electoral Count Act</a>, Binhak said, &quot;We are extremely pleased with the court&#39;s ruling, and we think the judge got it exactly right.&quot;[1] The decision was described as a major setback for Arizona Attorney General <a href="/entities/kris-mayes">Kris Mayes</a>, who pledged to appeal in order to keep the prosecution alive.[1] Attorneys in the matter said the ruling would require Mayes to assemble a new grand jury and present the case together with a copy of the statute; the initial presentation had taken weeks.[1] See <a href="/concepts/arizona-fake-electors-case">Arizona fake electors case</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Bilateral Bromance &amp; A Misled Grand Jury&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7bf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7bf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/stephen-binhak.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const stephenBinhak = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  stephenBinhak as default
};
