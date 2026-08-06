import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Reimberg","description":"","frontmatter":{"title":"John Reimberg","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ecuador","security","law-enforcement"],"sources":["raw/badlands-brief-559.md"],"confidence":"low"},"headers":[],"relativePath":"entities/john-reimberg.md","filePath":"entities/john-reimberg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-reimberg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-reimberg" tabindex="-1">John Reimberg <a class="header-anchor" href="#john-reimberg" aria-label="Permalink to &quot;John Reimberg&quot;">​</a></h1><p>John Reimberg is Ecuador&#39;s interior minister under President <a href="/entities/daniel-noboa">Daniel Noboa</a>.[1]</p><p>Commenting on the opening of the first <a href="/entities/fbi">FBI</a> office in <a href="/entities/ecuador">Ecuador</a> in March 2026, Reimberg said the key change was the permanent presence of FBI agents working directly with a newly formed unit within Ecuador&#39;s national police.[1] The office is intended to expand cooperation on investigations involving drug and weapons trafficking, money laundering, and the financing of terrorism.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narrative Warfare For Your Safety&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-559" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-559</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-reimberg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnReimberg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnReimberg as default
};
