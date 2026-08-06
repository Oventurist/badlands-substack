import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vermont","description":"","frontmatter":{"title":"Vermont","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["states","politics","elections","united-states"],"sources":["raw/badlands-news-brief-467.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/vermont.md","filePath":"entities/vermont.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vermont.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vermont" tabindex="-1">Vermont <a class="header-anchor" href="#vermont" aria-label="Permalink to &quot;Vermont&quot;">​</a></h1><p>Vermont is a U.S. state in New England. It is the only state in the union that imposes no age restriction on candidates for the office of governor, a quirk of state law that has repeatedly enabled minors to mount gubernatorial campaigns.[1]</p><h2 id="youth-candidacies" tabindex="-1">Youth candidacies <a class="header-anchor" href="#youth-candidacies" aria-label="Permalink to &quot;Youth candidacies&quot;">​</a></h2><p>In December 2025, 14-year-old high school freshman <a href="/entities/dean-roy">Dean Roy</a> announced a campaign for governor of Vermont, arguing against &quot;elder rule&quot; and describing Vermont as &quot;a dying state.&quot; If elected he would be the first U.S. governor under 18.[1] Roy&#39;s bid followed that of 13-year-old Ethan Sonneborn, who ran unsuccessfully in Vermont&#39;s Democratic gubernatorial primary in 2018.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands commentator <a href="/entities/ashe-in-america">Ashe in America</a> highlighted Vermont&#39;s unique absence of an age requirement and argued that the state is &quot;so corrupt it makes the nation fund <a href="/entities/bernie-sanders">Bernie Sanders</a>&#39; commie fever dreams,&quot; concluding that a teenage candidate &quot;couldn&#39;t possibly do worse than those who came before him.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Somali Scams, Munchausen Moms, &amp; Another Perfect Phone Call&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-467" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-467</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vermont.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vermont = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vermont as default
};
