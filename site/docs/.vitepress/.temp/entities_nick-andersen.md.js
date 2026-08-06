import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nick Andersen","description":"","frontmatter":{"title":"Nick Andersen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cisa","dhs","cybersecurity"],"sources":["raw/badlands-brief-7ed.md"],"confidence":"low"},"headers":[],"relativePath":"entities/nick-andersen.md","filePath":"entities/nick-andersen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nick-andersen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nick-andersen" tabindex="-1">Nick Andersen <a class="header-anchor" href="#nick-andersen" aria-label="Permalink to &quot;Nick Andersen&quot;">​</a></h1><p>Nick Andersen is a US cybersecurity official who was named acting director of the <a href="/entities/cisa">Cybersecurity and Infrastructure Security Agency</a> in early 2026, replacing former acting director <a href="/entities/madhu-gottumukkala">Madhu Gottumukkala</a>.[1]</p><p>His appointment came during a period of broad leadership churn at the agency, which also saw chief information officer <a href="/entities/robert-costello">Robert Costello</a> announce his departure after 18 years at the <a href="/entities/department-of-homeland-security">Department of Homeland Security</a> and acting chief human resources officer <a href="/entities/kevin-diana">Kevin Diana</a> receive transfer orders.[1] The nomination of <a href="/entities/sean-plankey">Sean Plankey</a> to lead CISA on a permanent basis remained stalled at the time.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Religious Regime Change, Sacked Security Sacked, &amp; More Medicare Malice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nick-andersen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nickAndersen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nickAndersen as default
};
