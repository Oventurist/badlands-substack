import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sean Plankey","description":"","frontmatter":{"title":"Sean Plankey","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cisa","cybersecurity","nominations"],"sources":["raw/badlands-brief-7ed.md"],"confidence":"low"},"headers":[],"relativePath":"entities/sean-plankey.md","filePath":"entities/sean-plankey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sean-plankey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sean-plankey" tabindex="-1">Sean Plankey <a class="header-anchor" href="#sean-plankey" aria-label="Permalink to &quot;Sean Plankey&quot;">​</a></h1><p>Sean Plankey is the nominee put forward to lead the <a href="/entities/cisa">Cybersecurity and Infrastructure Security Agency</a>.[1] As of March 2026 his nomination remained stalled, leaving the agency under acting leadership.[1]</p><p>The vacancy contributed to a period of instability at CISA, during which <a href="/entities/nick-andersen">Nick Andersen</a> was named acting director in place of <a href="/entities/madhu-gottumukkala">Madhu Gottumukkala</a>, chief information officer <a href="/entities/robert-costello">Robert Costello</a> announced his departure, and acting chief human resources officer <a href="/entities/kevin-diana">Kevin Diana</a> received transfer orders.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Religious Regime Change, Sacked Security Sacked, &amp; More Medicare Malice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sean-plankey.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seanPlankey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seanPlankey as default
};
