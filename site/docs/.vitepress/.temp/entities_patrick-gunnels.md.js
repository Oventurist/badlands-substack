import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Patrick Gunnels","description":"","frontmatter":{"title":"Patrick Gunnels","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","badlands-media","podcast","citizen-journalism"],"sources":["raw/anthony-fauci.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/patrick-gunnels.md","filePath":"entities/patrick-gunnels.md","lastUpdated":null}');
const _sfc_main = { name: "entities/patrick-gunnels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="patrick-gunnels" tabindex="-1">Patrick Gunnels <a class="header-anchor" href="#patrick-gunnels" aria-label="Permalink to &quot;Patrick Gunnels&quot;">​</a></h1><p>Patrick Gunnels is a <a href="/entities/badlands-media">Badlands Media</a> host and commentator. He is identified in <a href="/concepts/anthony-fauci">J.B. White&#39;s December 2022 column</a> as the co-host, alongside <a href="/entities/j-b-white">J.B. White</a>, of the Badlands programme Trash Talk.</p><h2 id="reading-epic-threads" tabindex="-1">Reading Epic Threads <a class="header-anchor" href="#reading-epic-threads" aria-label="Permalink to &quot;Reading Epic Threads&quot;">​</a></h2><p>Before their Badlands collaboration, Gunnels produced a Twitter-focused video series called Reading Epic Threads, in which he read long Twitter threads aloud and commented on them. White records that Gunnels read one of his own 70-post threads — on what White called the new kind of war being waged against Americans — in an instalment of roughly 26 minutes, archived on the video platform Odysee. White describes Gunnels in that context as his &quot;future Trash Talk co-host,&quot; indicating that the reading predated their formal partnership at the outlet.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/anthony-fauci" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/patrick-gunnels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const patrickGunnels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  patrickGunnels as default
};
