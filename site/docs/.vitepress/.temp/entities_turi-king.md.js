import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Turi King","description":"","frontmatter":{"title":"Turi King","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["genetics","academia","united-kingdom"],"sources":["raw/badlands-news-brief-066.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/turi-king.md","filePath":"entities/turi-king.md","lastUpdated":null}');
const _sfc_main = { name: "entities/turi-king.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="turi-king" tabindex="-1">Turi King <a class="header-anchor" href="#turi-king" aria-label="Permalink to &quot;Turi King&quot;">​</a></h1><p>Turi King is a geneticist and professor at the University of Bath in the United Kingdom, known for identifying the remains of King Richard III.[1]</p><h2 id="hitler-dna-research" tabindex="-1">Hitler DNA research <a class="header-anchor" href="#hitler-dna-research" aria-label="Permalink to &quot;Hitler DNA research&quot;">​</a></h2><p>King led a research project, lasting more than four years, that analyzed a DNA sample believed to belong to <a href="/entities/adolf-hitler">Adolf Hitler</a>.[1] She said she verified that material taken from a couch in the Berlin bunker where Hitler shot himself in 1945 was soaked in the dictator&#39;s blood by comparing DNA recovered from the blood against a sample from a confirmed Hitler relative.[1]</p><p>The team&#39;s most striking finding, as presented in a documentary released in November 2025, was a mutation on the PROK2 gene.[1] King said variants in this gene cause Kallmann syndrome and congenital hypogonadotropic hypogonadism, conditions that in boys can delay puberty and cause undescended testicles.[1] She characterized them as producing low testosterone levels and either absent or partial puberty, adding that about 5% of cases are associated with a micropenis.[1] The findings were reported by CNN and were treated skeptically by Badlands commentators.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Amplified Antagonism, Phantom Palestinians, &amp; Hitler&#39;s Micropenis&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-066" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-066</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/turi-king.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const turiKing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  turiKing as default
};
