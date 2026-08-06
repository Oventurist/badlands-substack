import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John P. Carlin","description":"","frontmatter":{"title":"John P. Carlin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","cybersecurity","revolving-door","microsoft"],"sources":["raw/badlands-brief-739.md"],"confidence":"low"},"headers":[],"relativePath":"entities/john-p-carlin.md","filePath":"entities/john-p-carlin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-p-carlin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-p-carlin" tabindex="-1">John P. Carlin <a class="header-anchor" href="#john-p-carlin" aria-label="Permalink to &quot;John P. Carlin&quot;">​</a></h1><p>John P. Carlin is a former <a href="/entities/department-of-justice">Justice Department</a> official named in a May 2026 referral filed by the <a href="/entities/american-accountability-foundation">American Accountability Foundation</a>.[1] The complaint cites Carlin among several former Biden administration cybersecurity officials who later took positions with <a href="/entities/microsoft">Microsoft</a> or with firms connected to the company, offering that pattern as evidence of a revolving-door relationship between federal cyber enforcement and the software vendor.[1]</p><p>The referral&#39;s central target was former Deputy Attorney General <a href="/entities/lisa-monaco">Lisa Monaco</a>, but it asked inspectors general to examine whether Carlin and other officials violated ethics, recusal, or revolving-door restrictions.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-p-carlin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnPCarlin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnPCarlin as default
};
