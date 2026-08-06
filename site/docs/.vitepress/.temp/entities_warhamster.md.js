import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WarHamster","description":"","frontmatter":{"title":"WarHamster","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["commentator","rumble","climate-narrative","badlands"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/warhamster.md","filePath":"entities/warhamster.md","lastUpdated":null}');
const _sfc_main = { name: "entities/warhamster.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="warhamster" tabindex="-1">WarHamster <a class="header-anchor" href="#warhamster" aria-label="Permalink to &quot;WarHamster&quot;">​</a></h1><p>WarHamster is an independent commentator with a Rumble channel who is described as a friend of the Badlands Media collective.[1]</p><p>In a February 2025 <a href="/concepts/badlands-news-brief">Badlands News Brief</a> entry on the <a href="/entities/us-department-of-the-treasury">Treasury Department</a>&#39;s withdrawal from the <a href="/entities/network-of-central-banks-and-supervisors-for-greening-the-financial-system">NGFS</a>, <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> recounted a conversation with WarHamster about the significance of the move.[1] According to WarHamster, the &quot;Four Horsemen of the Climate Cult&quot; were <a href="/entities/maurice-strong">Maurice Strong</a>, <a href="/entities/henry-kissinger">Henry Kissinger</a>, <a href="/entities/klaus-schwab">Klaus Schwab</a>, and <a href="/entities/zbigniew-brzezinski">Zbigniew Brzezinski</a>, men who since the 1970s had sought to kill the human spirit through psychological warfare rooted in the artificial scarcity thesis of <a href="/entities/thomas-malthus">Thomas Malthus</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/warhamster.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const warhamster = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  warhamster as default
};
