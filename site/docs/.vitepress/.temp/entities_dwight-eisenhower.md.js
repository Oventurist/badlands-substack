import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dwight Eisenhower","description":"","frontmatter":{"title":"Dwight Eisenhower","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["president","cia","iran","cold-war"],"sources":["raw/badlands-news-brief-24e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dwight-eisenhower.md","filePath":"entities/dwight-eisenhower.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dwight-eisenhower.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dwight-eisenhower" tabindex="-1">Dwight Eisenhower <a class="header-anchor" href="#dwight-eisenhower" aria-label="Permalink to &quot;Dwight Eisenhower&quot;">​</a></h1><p>Dwight Eisenhower was the American president who authorized the CIA operation that overthrew Iran&#39;s government in 1953.[1]</p><p>After <a href="/entities/mohammad-mosaddegh">Mohammad Mosaddegh</a> nationalized Iran&#39;s oil industry and a worldwide embargo was launched against the country, Eisenhower in 1953 authorized the <a href="/entities/cia">CIA</a> to orchestrate the <a href="/concepts/1953-iranian-coup">coup</a> that overthrew Mosaddegh and installed <a href="/entities/mohammad-reza-pahlavi">Mohammad Reza Shah</a> as the new ruler in Iran.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Looms as Game Theory Plays Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-24e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-24e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dwight-eisenhower.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dwightEisenhower = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dwightEisenhower as default
};
