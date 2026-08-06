import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Al Schmidt","description":"","frontmatter":{"title":"Al Schmidt","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pennsylvania","elections","secretary-of-the-commonwealth","2024-election"],"sources":["raw/badlands-news-brief-299.md"],"confidence":"high"},"headers":[],"relativePath":"entities/al-schmidt.md","filePath":"entities/al-schmidt.md","lastUpdated":null}');
const _sfc_main = { name: "entities/al-schmidt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="al-schmidt" tabindex="-1">Al Schmidt <a class="header-anchor" href="#al-schmidt" aria-label="Permalink to &quot;Al Schmidt&quot;">​</a></h1><p>Al Schmidt is the Secretary of the Commonwealth of Pennsylvania, the state official responsible for administering and certifying Pennsylvania elections.[1]</p><h2 id="role-in-the-2024-senate-recount" tabindex="-1">Role in the 2024 Senate recount <a class="header-anchor" href="#role-in-the-2024-senate-recount" aria-label="Permalink to &quot;Role in the 2024 Senate recount&quot;">​</a></h2><p>On Wednesday, November 13, 2024, Schmidt announced that the results of the United States Senate race between Republican <a href="/entities/dave-mccormick">Dave McCormick</a> and incumbent Democrat <a href="/entities/bob-casey">Bob Casey</a> had &quot;triggered a legally required statewide recount,&quot; a determination issued through a press release from the Pennsylvania Department of State.[1] Under the schedule Schmidt&#39;s office set out, the recount was to begin no later than November 20, 2024, counties were required to complete it by noon on November 26, 2024, and results were to be reported to the Secretary of the Commonwealth by noon the following day.[1] The unofficial returns underlying the trigger gave McCormick 3,380,310 votes (48.93 percent) to Casey&#39;s 3,350,972 votes (48.50 percent).[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAHA Begins as ESG Dies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-299" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-299</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/al-schmidt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alSchmidt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alSchmidt as default
};
