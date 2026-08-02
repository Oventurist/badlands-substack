import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Horowitz","description":"","frontmatter":{"title":"Michael Horowitz","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","inspector-general","department-of-justice","oversight"],"sources":["raw/america-for-sale-part-2.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/michael-horowitz.md","filePath":"entities/michael-horowitz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-horowitz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-horowitz" tabindex="-1">Michael Horowitz <a class="header-anchor" href="#michael-horowitz" aria-label="Permalink to &quot;Michael Horowitz&quot;">​</a></h1><p>Michael Horowitz is the Inspector General of the United States <a href="/entities/department-of-justice">Department of Justice</a>. In the Badlands Media essay <a href="/concepts/america-for-sale-part-2">America for Sale — Part 2</a>, he is presented as the investigative half of a two-part strategy devised by Attorney General <a href="/entities/jeff-sessions">Jeff Sessions</a> to work around a compromised <a href="/entities/fbi">FBI</a> and Justice Department.</p><p>The article states that Sessions assigned Horowitz to conduct investigations instead of the FBI, stressing that the Inspector General&#39;s office is independent, that an IG office oversees every federal agency, and that IGs have &quot;a broad reach to investigate all corruption involving our government.&quot; Q drop 1517 is quoted for the formulation &quot;IG started long before Huber setting stage&quot; and &quot;Think: IG = FBI.&quot;</p><p>Breitbart, quoted in the essay, reported that Horowitz was working with U.S. Attorney <a href="/entities/john-huber">John Huber</a> and commanded a staff of 470 investigators, giving Huber access to investigative resources far exceeding those of any special counsel. Sessions&#39; March 29 letter to Congress is cited for two points about the scope of that jurisdiction: it includes &quot;actions taken by former employees after they have left government service,&quot; and it extends &quot;not only to allegations of legal violations, but also to allegations that Department employees violated established practices as well&quot; — meaning an IG report can hold officials accountable for conduct that violates no specific statute.</p><p>The author&#39;s broader claim, that this arrangement produced hundreds of thousands of sealed indictments awaiting a future prosecution phase, is interpretive and contested.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-for-sale-part-2" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-horowitz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelHorowitz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelHorowitz as default
};
