import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Dimona","description":"","frontmatter":{"title":"Dimona","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","nuclear","iran","deterrence"],"sources":["raw/badlands-brief-7ed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/dimona.md","filePath":"entities/dimona.md","lastUpdated":null}');
const _sfc_main = { name: "entities/dimona.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="dimona" tabindex="-1">Dimona <a class="header-anchor" href="#dimona" aria-label="Permalink to &quot;Dimona&quot;">​</a></h1><p>Dimona is the site of <a href="/entities/israel">Israel</a>&#39;s nuclear facility in the Negev desert.[1] Israel neither confirms nor denies possessing nuclear weapons tied to the facility.[1]</p><p>In March 2026 the facility was named as an explicit Iranian retaliation target: according to Iran&#39;s semi-official ISNA news agency, citing an Iranian military official, <a href="/entities/iran">Iran</a> would strike Dimona if the United States and Israel attempted to force regime change in the Islamic Republic.[1] The threat was issued amid the succession process that followed the death of supreme leader <a href="/entities/ali-khamenei">Ali Khamenei</a> during Israeli strikes on Iranian nuclear facilities, and alongside <a href="/entities/donald-trump">Donald Trump</a>&#39;s stated intention to be involved in choosing Iran&#39;s next leader.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Religious Regime Change, Sacked Security Sacked, &amp; More Medicare Malice&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/dimona.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dimona = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dimona as default
};
