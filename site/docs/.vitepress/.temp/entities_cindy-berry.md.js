import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cindy Berry","description":"","frontmatter":{"title":"Cindy Berry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["michigan","elections","local-government","litigation"],"sources":["raw/badlands-news-brief-8fd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/cindy-berry.md","filePath":"entities/cindy-berry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cindy-berry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cindy-berry" tabindex="-1">Cindy Berry <a class="header-anchor" href="#cindy-berry" aria-label="Permalink to &quot;Cindy Berry&quot;">​</a></h1><p><strong>Cindy Berry</strong> is the clerk of Chesterfield Township, Michigan, and a plaintiff in the December 2025 lawsuit over the handling of absentee ballots with mismatched identification numbers.[1]</p><p>Berry joined the <a href="/entities/republican-national-committee">Republican National Committee</a> and the <a href="/entities/michigan-republican-party">Michigan Republican Party</a> in arguing that ballots whose stub identification number does not exactly match the number on the return envelope must be rejected, subject to an opportunity for the voter to cure the defect.[1] A Michigan judge ruled in their favor, finding that election inspectors have authority to count absentee ballots only where the numbers match and rejecting the contrary guidance defended by Secretary of State <a href="/entities/jocelyn-benson">Jocelyn Benson</a> and Director of Elections <a href="/entities/jonathan-brater">Jonathan Brater</a>.[1] See <a href="/concepts/michigan-absentee-ballot-id-match-ruling">the Michigan absentee ballot ID match ruling</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manic Midterms, Menopausal Marxists, &amp; Musical Pipe Bombs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cindy-berry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cindyBerry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cindyBerry as default
};
