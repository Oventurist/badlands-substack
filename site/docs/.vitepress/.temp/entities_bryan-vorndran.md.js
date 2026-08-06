import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bryan A. Vorndran","description":"","frontmatter":{"title":"Bryan A. Vorndran","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["fbi","cybersecurity","revolving-door","microsoft"],"sources":["raw/badlands-brief-739.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bryan-vorndran.md","filePath":"entities/bryan-vorndran.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bryan-vorndran.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bryan-a-vorndran" tabindex="-1">Bryan A. Vorndran <a class="header-anchor" href="#bryan-a-vorndran" aria-label="Permalink to &quot;Bryan A. Vorndran&quot;">​</a></h1><p>Bryan A. Vorndran is a former <a href="/entities/fbi">Federal Bureau of Investigation</a> cyber official named in the May 2026 <a href="/entities/american-accountability-foundation">American Accountability Foundation</a> referral to the <a href="/entities/department-of-justice">Justice Department</a>.[1] He is cited as one of several former Biden administration cybersecurity officials who subsequently took jobs with <a href="/entities/microsoft">Microsoft</a> or firms connected to the company.[1]</p><p>The foundation asked departmental inspectors general to determine whether Vorndran and similarly situated officials violated ethics, recusal, or revolving-door restrictions in connection with the government&#39;s handling of Microsoft cybersecurity matters.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bryan-vorndran.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bryanVorndran = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bryanVorndran as default
};
