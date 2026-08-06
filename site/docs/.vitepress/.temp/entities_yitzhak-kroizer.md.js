import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yitzhak Kroizer","description":"","frontmatter":{"title":"Yitzhak Kroizer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","knesset","gaza","controversy"],"sources":["raw/badlands-brief-739.md"],"confidence":"low"},"headers":[],"relativePath":"entities/yitzhak-kroizer.md","filePath":"entities/yitzhak-kroizer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yitzhak-kroizer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yitzhak-kroizer" tabindex="-1">Yitzhak Kroizer <a class="header-anchor" href="#yitzhak-kroizer" aria-label="Permalink to &quot;Yitzhak Kroizer&quot;">​</a></h1><p>Yitzhak Kroizer is a member of the Israeli parliament, the <a href="/entities/knesset">Knesset</a>, cited in May 2026 Badlands commentary over a video published online of remarks he delivered in the chamber.[1]</p><p>In the video, according to the commentary, Kroizer explicitly states that there are no innocent people in Palestine and that killing all the women and children there would be a fair price to pay to ensure <a href="/entities/israel">Israel</a>&#39;s security.[1] Badlands contributor GhostofBasedPatrickHenry presented the remarks alongside <a href="/entities/itamar-ben-gvir">Itamar Ben-Gvir</a>&#39;s publication of video showing handcuffed <a href="/concepts/global-sumud-flotilla">Global Sumud Flotilla</a> detainees as evidence of an increasingly common pattern of hubris among Israeli leaders.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yitzhak-kroizer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yitzhakKroizer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yitzhakKroizer as default
};
