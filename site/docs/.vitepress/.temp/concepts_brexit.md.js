import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brexit","description":"","frontmatter":{"title":"Brexit","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["united-kingdom","european-union","referendum","sovereignty","badlands-brief"],"sources":["raw/badlands-brief-3d4.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/brexit.md","filePath":"concepts/brexit.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/brexit.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brexit" tabindex="-1">Brexit <a class="header-anchor" href="#brexit" aria-label="Permalink to &quot;Brexit&quot;">​</a></h1><p>Brexit was the United Kingdom&#39;s 2016 referendum decision to leave the European Union, and in Badlands coverage it functions primarily as the reference case invoked in disputes over secession referendums elsewhere.[1]</p><h2 id="the-2016-vote-and-its-aftermath" tabindex="-1">The 2016 vote and its aftermath <a class="header-anchor" href="#the-2016-vote-and-its-aftermath" aria-label="Permalink to &quot;The 2016 vote and its aftermath&quot;">​</a></h2><p><a href="/entities/mark-carney">Mark Carney</a> served as governor of the <a href="/entities/bank-of-england">Bank of England</a> during the 2016 vote and was one of the most prominent establishment voices warning Britain against leaving; pro-Brexit conservatives accused him at the time of running &quot;Project Fear.&quot;[1] Carney has since argued that many Britons were told they could vote for a &quot;soft&quot; exit and negotiate the terms afterward, only to face years of political and economic fallout.[1]</p><h2 id="use-as-precedent-in-canada" tabindex="-1">Use as precedent in Canada <a class="header-anchor" href="#use-as-precedent-in-canada" aria-label="Permalink to &quot;Use as precedent in Canada&quot;">​</a></h2><p>In 2026 Carney, by then Canadian prime minister, invoked Brexit directly as a warning to <a href="/concepts/alberta-separatism">Alberta separatists</a>, describing the notion that separation is merely a negotiating tactic as a &quot;dangerous bluff.&quot;[1] The intervention followed Premier <a href="/entities/danielle-smith">Danielle Smith</a>&#39;s announcement of an October referendum on beginning the legal process toward a binding independence vote.[1] Alberta conservatives responded by reprising the Project Fear critique, arguing that federal elites were again attempting to frighten voters away from asserting sovereignty.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Canadian Separatists &amp; Guerilla Campaigns&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-3d4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-3d4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/brexit.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brexit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brexit as default
};
