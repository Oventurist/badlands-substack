import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mike Howell","description":"","frontmatter":{"title":"Mike Howell","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["oversight","foia","heritage-foundation","hur-investigation"],"sources":["raw/badlands-brief-1ae.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mike-howell.md","filePath":"entities/mike-howell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mike-howell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mike-howell" tabindex="-1">Mike Howell <a class="header-anchor" href="#mike-howell" aria-label="Permalink to &quot;Mike Howell&quot;">​</a></h1><p>Mike Howell is a conservative oversight advocate associated with the <a href="/entities/heritage-foundation">Heritage Foundation</a>&#39;s transparency litigation efforts. He was named as one of the parties to whom the <a href="/entities/department-of-justice">Justice Department</a> agreed to release redacted audio and transcripts from Special Counsel <a href="/entities/robert-hur">Robert Hur</a>&#39;s investigation into <a href="/entities/joe-biden">Joe Biden</a>&#39;s handling of classified documents.[1]</p><p>Biden intervened in the resulting litigation seeking to block release of the <a href="/entities/mark-zwonitzer">Zwonitzer</a> recordings, but a lower court denied a preliminary injunction and the <a href="/entities/us-court-of-appeals-for-the-dc-circuit">D.C. Circuit</a> rejected his emergency appeal in July 2026.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;DC Exposes Itself as the Middle East Gets Gloriously Strange&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mike-howell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mikeHowell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mikeHowell as default
};
