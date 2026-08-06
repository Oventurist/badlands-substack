import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kevin Diana","description":"","frontmatter":{"title":"Kevin Diana","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cisa","dhs","personnel"],"sources":["raw/badlands-brief-7ed.md"],"confidence":"low"},"headers":[],"relativePath":"entities/kevin-diana.md","filePath":"entities/kevin-diana.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kevin-diana.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kevin-diana" tabindex="-1">Kevin Diana <a class="header-anchor" href="#kevin-diana" aria-label="Permalink to &quot;Kevin Diana&quot;">​</a></h1><p>Kevin Diana is a US government human-resources official who served as acting chief human resources officer at the <a href="/entities/cisa">Cybersecurity and Infrastructure Security Agency</a>.[1] In early 2026 he received transfer orders as part of a broader wave of leadership changes at the agency.[1]</p><p>Those changes included the departure of chief information officer <a href="/entities/robert-costello">Robert Costello</a>, who also received transfer orders before announcing his exit, and the naming of <a href="/entities/nick-andersen">Nick Andersen</a> as acting director in place of <a href="/entities/madhu-gottumukkala">Madhu Gottumukkala</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Religious Regime Change, Sacked Security Sacked, &amp; More Medicare Malice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kevin-diana.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kevinDiana = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kevinDiana as default
};
