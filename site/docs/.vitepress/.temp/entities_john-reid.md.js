import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Reid","description":"","frontmatter":{"title":"John Reid","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["virginia","republican-party","elections","scandal"],"sources":["raw/badlands-news-brief-8dc.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-reid.md","filePath":"entities/john-reid.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-reid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-reid" tabindex="-1">John Reid <a class="header-anchor" href="#john-reid" aria-label="Permalink to &quot;John Reid&quot;">​</a></h1><p>John Reid is a Virginia Republican who in 2025 was the party&#39;s nominee for lieutenant governor of Virginia and became the center of a scandal over an allegedly linked social media account containing nude photographs of men.[1]</p><h2 id="_2025-lieutenant-governor-controversy" tabindex="-1">2025 lieutenant governor controversy <a class="header-anchor" href="#_2025-lieutenant-governor-controversy" aria-label="Permalink to &quot;2025 lieutenant governor controversy&quot;">​</a></h2><p>In early May 2025, Virginia Governor <a href="/entities/glenn-youngkin">Glenn Youngkin</a> asked Reid to withdraw from the lieutenant governor race amid allegations that he operated a social media page filled with naked pictures of men.[1] Reid, who is gay and married, denied that the page belonged to him and refused to resign from the ticket.[1] He asserted that the account had been fabricated by hardline Republicans seeking to sabotage his candidacy.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands commentary treated the episode as characteristic of internal Republican Party conflict, framing the possibilities as either that Reid is a populist candidate targeted for destruction by the party establishment, or that the affair reflects broader hypocrisy within the GOP.[1] Commentators also dismissed the framing of Youngkin — a former head of the Carlyle Group — as a presidential heir apparent to <a href="/entities/donald-trump">Donald Trump</a>, attributing that narrative to the <a href="/entities/lincoln-project">Lincoln Project</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Gazan Seizures &amp; Gay Porn Scandals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8dc" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8dc</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-reid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnReid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnReid as default
};
