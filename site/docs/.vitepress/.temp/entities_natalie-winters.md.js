import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Natalie Winters","description":"","frontmatter":{"title":"Natalie Winters","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","war-room","fauci","investigations"],"sources":["raw/badlands-brief-414.md"],"confidence":"low"},"headers":[],"relativePath":"entities/natalie-winters.md","filePath":"entities/natalie-winters.md","lastUpdated":null}');
const _sfc_main = { name: "entities/natalie-winters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="natalie-winters" tabindex="-1">Natalie Winters <a class="header-anchor" href="#natalie-winters" aria-label="Permalink to &quot;Natalie Winters&quot;">​</a></h1><p>Natalie Winters is an investigative reporter associated with the populist-right media ecosystem, known for research into pandemic-era officials and institutional corruption.[1]</p><h2 id="reporting-on-fauci-s-biotech-ties" tabindex="-1">Reporting on Fauci&#39;s biotech ties <a class="header-anchor" href="#reporting-on-fauci-s-biotech-ties" aria-label="Permalink to &quot;Reporting on Fauci&#39;s biotech ties&quot;">​</a></h2><p>Following <a href="/entities/anthony-fauci">Anthony Fauci</a>&#39;s July 2026 Senate testimony on Covid origins, Winters reported that &quot;Anthony Fauci quietly joined a stealth mRNA vaccine startup in 2023. Then the Biden administration awarded it more than $28 million to develop vaccines for viruses with pandemic potential. Now <a href="/entities/eli-lilly">Eli Lilly</a> is buying it for up to $1.55 billion.&quot;[1]</p><p>Badlands writer <a href="/entities/ashe-in-america">Ashe in America</a> cited the reporting as evidence that Fauci&#39;s &quot;portfolio of crime is thick,&quot; arguing it strengthened the case for prosecution independent of the contempt-of-Congress question raised by Senator <a href="/entities/rand-paul">Rand Paul</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narcissistic Sociopathy &amp; Rebranded Sex Robots For Kids&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-414" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-414</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/natalie-winters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const natalieWinters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  natalieWinters as default
};
