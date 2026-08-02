import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fox Business","description":"","frontmatter":{"title":"Fox Business","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["journalism","media","finance"],"sources":["raw/a-family-affair.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/fox-business.md","filePath":"entities/fox-business.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fox-business.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fox-business" tabindex="-1">Fox Business <a class="header-anchor" href="#fox-business" aria-label="Permalink to &quot;Fox Business&quot;">​</a></h1><p>Fox Business is an American cable and satellite business news television channel owned by Fox News Media. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, Fox Business is cited for detailed reporting on <a href="/entities/jeb-bush">jeb-bush</a>&#39;s advisory role at <a href="/entities/lehman-brothers">lehman-brothers</a> and his participation in &quot;Project Verde,&quot; the failed effort to secure a bailout from Mexican billionaire <a href="/entities/carlos-slim">carlos-slim</a> in 2008.</p><h2 id="key-citations" tabindex="-1">Key citations <a class="header-anchor" href="#key-citations" aria-label="Permalink to &quot;Key citations&quot;">​</a></h2><p>The article quotes Fox Business reporting that Jeb Bush &quot;apparently doesn&#39;t want people to know that he worked at Lehman Brothers,&quot; and that he earned more than $14 million as an adviser to Lehman and, after its 2008 bankruptcy, to <a href="/entities/barclays">barclays</a>. Fox Business reported that Bush took part in &quot;Project Green,&quot; Lehman&#39;s firm-wide effort to save the company, and that his specific piece, &quot;Project Verde,&quot; involved convincing Slim to make a potentially life-saving investment. On July 5, 2008, Bush reported that the meeting had been unsuccessful because Slim &quot;did not express interest in joint venture or stock purchase.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fox-business.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const foxBusiness = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  foxBusiness as default
};
