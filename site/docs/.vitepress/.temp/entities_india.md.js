import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"India","description":"","frontmatter":{"title":"India","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["india","geopolitics","south-asia","regime-change"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/india.md","filePath":"entities/india.md","lastUpdated":null}');
const _sfc_main = { name: "entities/india.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="india" tabindex="-1">India <a class="header-anchor" href="#india" aria-label="Permalink to &quot;India&quot;">​</a></h1><p>India appears in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> as a nuclear-armed South Asian power caught between the two factions of the Western ruling class.</p><p>The article asserts that after overthrowing the democratically elected government of <a href="/entities/imran-khan">imran-khan</a> in <a href="/entities/pakistan">pakistan</a>, <a href="/entities/joe-biden">joe-biden</a> &quot;then tried to regime change <a href="/entities/narendra-modi">Modi</a> in India,&quot; a pattern the author suggests can be viewed through the lens of a Biden partnership with <a href="/entities/china">china</a>. <a href="/entities/donald-trump">donald-trump</a>&#39;s relationship with Modi is described as the opposite — &quot;fantastic and growing&quot; — with Trump clearly wanting to build up India in order to create a wedge between it and China.</p><p>India is listed among the world&#39;s largest and most consequential countries that the Iran conflict could draw in, alongside the U.S. Chamber of Commerce companies, the major energy firms, <a href="/entities/qatar">qatar</a>, <a href="/entities/saudi-arabia">saudi-arabia</a>, <a href="/entities/russia">russia</a>, China and Pakistan. The article warns that missteps over <a href="/entities/iran">iran</a> could &quot;draw in nuclear-armed states like Pakistan and India.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/india.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const india = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  india as default
};
