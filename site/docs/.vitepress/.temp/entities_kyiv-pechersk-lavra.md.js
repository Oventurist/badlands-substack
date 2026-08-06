import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kyiv-Pechersk Lavra","description":"","frontmatter":{"title":"Kyiv-Pechersk Lavra","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["religion","ukraine","russia","monastery"],"sources":["raw/badlands-brief-7c0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kyiv-pechersk-lavra.md","filePath":"entities/kyiv-pechersk-lavra.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kyiv-pechersk-lavra.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kyiv-pechersk-lavra" tabindex="-1">Kyiv-Pechersk Lavra <a class="header-anchor" href="#kyiv-pechersk-lavra" aria-label="Permalink to &quot;Kyiv-Pechersk Lavra&quot;">​</a></h1><p>The Kyiv-Pechersk Lavra is the historic monastery complex in Kyiv that became the focal point of tensions cited by Russian Foreign Minister <a href="/entities/sergey-lavrov">Sergey Lavrov</a> in his April 2026 accusation that parts of the European Union promote &quot;rampant Satanism.&quot;[1] Ukrainian authorities have taken action at the site against clergy tied to Moscow, prompting Russian claims of religious persecution.[1]</p><p>Lavrov tied the Lavra dispute to what he described as more than a decade of persecution of the <a href="/entities/ukrainian-orthodox-church">Ukrainian Orthodox Church</a>, including churches forcibly taken over and vandalized and clergy and parishioners harassed.[1] <a href="/entities/ukraine">Ukraine</a> and its Western allies characterize the measures as national security steps taken during the war rather than religious repression.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Games of Chicken, Spirit Fails, &amp; Rampant Satanism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7c0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7c0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kyiv-pechersk-lavra.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kyivPecherskLavra = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kyivPecherskLavra as default
};
