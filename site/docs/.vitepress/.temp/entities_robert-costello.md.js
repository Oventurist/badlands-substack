import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Costello","description":"","frontmatter":{"title":"Robert Costello","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cisa","dhs","cybersecurity","cio"],"sources":["raw/badlands-brief-7ed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-costello.md","filePath":"entities/robert-costello.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-costello.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-costello" tabindex="-1">Robert Costello <a class="header-anchor" href="#robert-costello" aria-label="Permalink to &quot;Robert Costello&quot;">​</a></h1><p>Robert Costello is a US government technology executive who served as chief information officer of the <a href="/entities/cisa">Cybersecurity and Infrastructure Security Agency</a>.[1] He announced on Tuesday, March 3, 2026, that he was leaving the agency, ending an 18-year career at the <a href="/entities/department-of-homeland-security">Department of Homeland Security</a>.[1]</p><p>As CISA&#39;s CIO, Costello helped address internal vulnerabilities, promoted new tools to enhance agency services, and advocated for increased use of artificial intelligence within the agency.[1]</p><p>His final months were marked by turbulence. Conflicting reports circulated over whether former acting CISA director <a href="/entities/madhu-gottumukkala">Madhu Gottumukkala</a> had attempted to push him out of his role, and in the week before his announcement Costello received transfer orders for possible reassignment.[1] House Homeland Security Chairman <a href="/entities/andrew-garbarino">Andrew Garbarino</a> had said the previous month that it was &quot;good&quot; that an earlier reported attempt to move Costello out of the CIO position had failed.[1] His exit coincided with wider leadership changes at CISA, including the naming of <a href="/entities/nick-andersen">Nick Andersen</a> as acting director and transfer orders issued to acting chief human resources officer <a href="/entities/kevin-diana">Kevin Diana</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Religious Regime Change, Sacked Security Sacked, &amp; More Medicare Malice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-costello.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertCostello = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertCostello as default
};
