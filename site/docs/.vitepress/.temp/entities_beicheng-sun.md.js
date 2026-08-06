import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Beicheng Sun","description":"","frontmatter":{"title":"Beicheng Sun","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["xenotransplantation","china","medicine","research"],"sources":["raw/badlands-news-brief-42c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/beicheng-sun.md","filePath":"entities/beicheng-sun.md","lastUpdated":null}');
const _sfc_main = { name: "entities/beicheng-sun.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="beicheng-sun" tabindex="-1">Beicheng Sun <a class="header-anchor" href="#beicheng-sun" aria-label="Permalink to &quot;Beicheng Sun&quot;">​</a></h1><p>Dr. Beicheng Sun is president of the First Affiliated Hospital of Anhui Medical University in <a href="/entities/china">China</a> and a co-author of a 2025 peer-reviewed study reporting the first published case of a genetically modified pig liver transplanted into a living human.[1]</p><h2 id="pig-liver-transplant-study" tabindex="-1">Pig liver transplant study <a class="header-anchor" href="#pig-liver-transplant-study" aria-label="Permalink to &quot;Pig liver transplant study&quot;">​</a></h2><p>Doctors in China reported transplanting a genetically modified pig liver into a 71-year-old man who lived 171 days after the procedure, 38 of those days with the pig organ in place — the first such case published in a peer-reviewed journal.[1]</p><p>Commenting on the result, Sun said, &quot;Everyone always says, &#39;oh, liver is too complicated to transplant, compared to the heart or kidney,&#39; but after this, in the future, I think people will think differently. I think liver is good if we can get enough human genes in the pig.&quot;[1] Researchers in <a href="/concepts/xenotransplantation">xenotransplantation</a> had previously succeeded with genetically modified pig kidneys and hearts in humans and with pig livers in brain-dead recipients, but had expressed doubts about the liver as a candidate because it is large, has a dual blood supply and performs multiple functions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Palisades Patsy, A Gazan Golden Age, &amp; African Espionage&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-42c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-42c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/beicheng-sun.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const beichengSun = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  beichengSun as default
};
