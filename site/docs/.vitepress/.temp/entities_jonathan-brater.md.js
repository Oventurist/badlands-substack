import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jonathan Brater","description":"","frontmatter":{"title":"Jonathan Brater","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["michigan","elections","state-government"],"sources":["raw/badlands-news-brief-8fd.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jonathan-brater.md","filePath":"entities/jonathan-brater.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jonathan-brater.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jonathan-brater" tabindex="-1">Jonathan Brater <a class="header-anchor" href="#jonathan-brater" aria-label="Permalink to &quot;Jonathan Brater&quot;">​</a></h1><p><strong>Jonathan Brater</strong> is Michigan&#39;s Director of Elections, serving under Secretary of State <a href="/entities/jocelyn-benson">Jocelyn Benson</a>.[1]</p><p>In the December 2025 litigation over absentee ballots with mismatched identification numbers, Brater and Benson argued that decades-long administrative guidance allowed such ballots to be counted as &quot;challenged ballots&quot; rather than being rejected outright.[1] The court rejected that position, holding that election inspectors may tabulate absentee ballots only when the stub and envelope identification numbers match, and that long-standing administrative practice cannot override the Legislature&#39;s 2024 strengthening of the matching requirement.[1] The case is covered at <a href="/concepts/michigan-absentee-ballot-id-match-ruling">the Michigan absentee ballot ID match ruling</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manic Midterms, Menopausal Marxists, &amp; Musical Pipe Bombs&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jonathan-brater.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jonathanBrater = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jonathanBrater as default
};
