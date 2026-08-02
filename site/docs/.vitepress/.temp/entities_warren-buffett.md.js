import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Warren Buffett","description":"","frontmatter":{"title":"Warren Buffett","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["plutocracy","finance","investment"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/warren-buffett.md","filePath":"entities/warren-buffett.md","lastUpdated":null}');
const _sfc_main = { name: "entities/warren-buffett.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="warren-buffett" tabindex="-1">Warren Buffett <a class="header-anchor" href="#warren-buffett" aria-label="Permalink to &quot;Warren Buffett&quot;">​</a></h1><p>Warren Buffett is an American investor and chairman of Berkshire Hathaway. He appears in the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a> as one of the plutocrats <a href="/entities/chrystia-freeland">Chrystia Freeland</a> is said to have counted among the ideologically compatible wing of the new global elite.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p>Summarizing Freeland&#39;s 2011 Atlantic essay <em>The Rise of the New Global Elite</em>, <a href="/entities/matthew-ehret">Matthew Ehret</a> groups &quot;Bill Gates, Warren Buffet, George Soros, et al&quot; — see <a href="/entities/bill-gates">Bill Gates</a> and <a href="/entities/george-soros">George Soros</a> — as the &quot;good, technocratic friendly plutocrats&quot; aligned with what he calls the New World Order of depopulation, in contrast to plutocrats such as <a href="/entities/donald-trump">Donald Trump</a> who reject that program.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/warren-buffett.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const warrenBuffett = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  warrenBuffett as default
};
