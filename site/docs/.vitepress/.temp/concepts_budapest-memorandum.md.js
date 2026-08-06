import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Budapest Memorandum","description":"","frontmatter":{"title":"Budapest Memorandum","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["ukraine","nuclear","disarmament","russia"],"sources":["raw/badlands-brief-fbb.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/budapest-memorandum.md","filePath":"concepts/budapest-memorandum.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/budapest-memorandum.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="budapest-memorandum" tabindex="-1">Budapest Memorandum <a class="header-anchor" href="#budapest-memorandum" aria-label="Permalink to &quot;Budapest Memorandum&quot;">​</a></h1><p>The Budapest Memorandum is the 1990s arrangement under which <a href="/entities/ukraine">Ukraine</a> relinquished the Soviet nuclear arsenal it inherited following the dissolution of the USSR.[1]</p><p>The memorandum was cited in February 2026 as the baseline fact undercutting <a href="/entities/russia">Russian</a> UN ambassador <a href="/entities/vasily-nebenzya">Vasily Nebenzya</a>&#39;s claim that the <a href="/entities/united-kingdom">United Kingdom</a> and <a href="/entities/france">France</a> were preparing to transfer nuclear weapons capabilities to Kyiv in circumvention of the <a href="/concepts/nuclear-non-proliferation-treaty">Nuclear Non-Proliferation Treaty</a>: Ukraine is a non-nuclear state by its own prior agreement, and no Western government had announced any plan to change that.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Unity, Patricide, &amp; Political Violence&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fbb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fbb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/budapest-memorandum.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const budapestMemorandum = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  budapestMemorandum as default
};
