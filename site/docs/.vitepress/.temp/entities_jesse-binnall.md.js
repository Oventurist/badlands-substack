import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jesse Binnall","description":"","frontmatter":{"title":"Jesse Binnall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law","media","defamation"],"sources":["raw/badlands-brief-625.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jesse-binnall.md","filePath":"entities/jesse-binnall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jesse-binnall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jesse-binnall" tabindex="-1">Jesse Binnall <a class="header-anchor" href="#jesse-binnall" aria-label="Permalink to &quot;Jesse Binnall&quot;">​</a></h1><p>Jesse Binnall is an American attorney cited in April 2026 disputing claims made by <a href="/entities/the-atlantic">The Atlantic</a> about <a href="/entities/fbi">FBI</a> Director <a href="/entities/kash-patel">Kash Patel</a>.[1]</p><p>An opinion article published by <a href="/entities/zerohedge">ZeroHedge</a> under the &quot;Tyler Durden&quot; pseudonym, credited to Matt Margolis via PJMedia, criticized The Atlantic&#39;s report and argued the magazine could face legal consequences, citing Binnall&#39;s statements alongside social-media responses attributed to Patel and other officials.[1] The Atlantic report alleged that Patel had a serious drinking problem that left him unreachable at times and intoxicated on the job.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mr. Nice Guy Leaves the Building (plus, Jewish Terrorism)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-625" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-625</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jesse-binnall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jesseBinnall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jesseBinnall as default
};
