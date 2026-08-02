import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mar-a-Lago","description":"","frontmatter":{"title":"Mar-a-Lago","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["place","florida","trump","campaign"],"sources":["raw/all-assets-deployed.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/mar-a-lago.md","filePath":"entities/mar-a-lago.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mar-a-lago.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mar-a-lago" tabindex="-1">Mar-a-Lago <a class="header-anchor" href="#mar-a-lago" aria-label="Permalink to &quot;Mar-a-Lago&quot;">​</a></h1><p>Mar-a-Lago is the private club and residence of <a href="/entities/donald-trump">Donald Trump</a> in Palm Beach, Florida, which has functioned since the end of his presidency as his principal base of operations and the venue for major political announcements.</p><h2 id="the-november-2022-announcement" tabindex="-1">The November 2022 announcement <a class="header-anchor" href="#the-november-2022-announcement" aria-label="Permalink to &quot;The November 2022 announcement&quot;">​</a></h2><p>On November 15, 2022, Trump formally announced his candidacy for the 2024 presidential election in a speech delivered at Mar-a-Lago. The Badlands Media essay <a href="/concepts/all-assets-deployed">All Assets Deployed</a>, written the following day by <a href="/entities/burning-bright">Burning Bright</a>, treats the venue and the audience as central to interpreting the speech: the author argues that it would have been strategically absurd to expect Trump to conduct an audit of the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a> on stage &quot;in front of a highly-partisan audience the very Media Industrial Complex that has been tearing at him for the better part of eight years has already branded as election-denying extremists,&quot; or to announce the arrest of the sitting president.</p><p>The essay characterizes the speech as containing no &quot;massive BOOMs&quot; but several notable statements, including Trump&#39;s declaration that &quot;The voting will be much, much different in 2024&quot; and his warning to a &quot;somber audience&quot; that things will get &quot;much worse [before people] see clearly.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/all-assets-deployed" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mar-a-lago.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const marALago = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  marALago as default
};
