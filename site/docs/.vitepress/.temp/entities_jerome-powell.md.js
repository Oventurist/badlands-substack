import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jerome Powell","description":"","frontmatter":{"title":"Jerome Powell","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","central-banking","federal-reserve","monetary-policy"],"sources":["raw/a-week-to-remember.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jerome-powell.md","filePath":"entities/jerome-powell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jerome-powell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jerome-powell" tabindex="-1">Jerome Powell <a class="header-anchor" href="#jerome-powell" aria-label="Permalink to &quot;Jerome Powell&quot;">​</a></h1><p>Jerome Powell became chairman of the <a href="/entities/federal-reserve">Federal Reserve</a> in 2018, appointed by <a href="/entities/donald-trump">Donald Trump</a> to succeed <a href="/entities/janet-yellen">Janet Yellen</a>.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>The Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> treats Powell&#39;s tenure as a phase in the forced normalisation of an economy the author considers artificially sustained. According to the source, &quot;Trump-elected-Jerome Powell took over as the Fed Chairman, and started raising interest rates aggressively to the displeasure of Trump.&quot; The essay links this tightening to a 20% stock market decline in the autumn of 2018, followed by rate cuts in 2019 that restored the market.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> frames the episode as vindicating Trump&#39;s position rather than Powell&#39;s: &quot;Trump knew rates needed to come up, but it had to be gradual. He was right, as he always seems to be.&quot; Powell also features implicitly in the article&#39;s account of the COVID-19 period, when the author says Trump &quot;forced the Fed to print money at a rate never seen before&quot; in order to keep the economy alive — described as fighting the <a href="/concepts/cabal">Cabal</a> &quot;with their own weapon, the Federal Reserve.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jerome-powell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeromePowell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeromePowell as default
};
