import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charles Manson","description":"","frontmatter":{"title":"Charles Manson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["manson-family","cults","crime","california"],"sources":["raw/badlands-news-brief-153.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/charles-manson.md","filePath":"entities/charles-manson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charles-manson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charles-manson" tabindex="-1">Charles Manson <a class="header-anchor" href="#charles-manson" aria-label="Permalink to &quot;Charles Manson&quot;">​</a></h1><p><strong>Charles Manson</strong> was an American cult leader whose followers carried out the 1969 Tate-LaBianca murders in California.[1] Among those followers was <a href="/entities/patricia-krenwinkel">Patricia Krenwinkel</a>, who was convicted of seven counts of first-degree murder for her role in the killings, including the murder of pregnant actress Sharon Tate.[1]</p><h2 id="legacy-in-parole-disputes" tabindex="-1">Legacy in parole disputes <a class="header-anchor" href="#legacy-in-parole-disputes" aria-label="Permalink to &quot;Legacy in parole disputes&quot;">​</a></h2><p>Manson&#39;s control over his followers has remained a recurring factor in California parole proceedings decades after the crimes. Krenwinkel&#39;s legal team emphasized &quot;the abuse she suffered&quot; under Manson&#39;s control in arguing for her release, and a 2017 investigation acknowledged her history of victimization.[1] Governor <a href="/entities/gavin-newsom">Gavin Newsom</a> nonetheless blocked her parole in October 2025, concluding that she remained an &quot;unreasonable danger to society.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Very Productive Phone Calls &amp; Presidential Memorandums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-153" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-153</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charles-manson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlesManson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlesManson as default
};
