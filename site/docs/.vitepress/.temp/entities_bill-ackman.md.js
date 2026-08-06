import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Ackman","description":"","frontmatter":{"title":"Bill Ackman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","corporate","immigration-enforcement"],"sources":["raw/badlands-brief-e3b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/bill-ackman.md","filePath":"entities/bill-ackman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-ackman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-ackman" tabindex="-1">Bill Ackman <a class="header-anchor" href="#bill-ackman" aria-label="Permalink to &quot;Bill Ackman&quot;">​</a></h1><p>Bill Ackman is an American hedge fund investor and shareholder in <a href="/entities/hilton-worldwide">Hilton</a>.[1]</p><p>Following Hilton&#39;s January 2026 termination of the Lakeville, Minnesota Hampton Inn franchise over allegations that the hotel denied rooms to federal immigration agents, Ackman publicly praised Hilton chief executive Chris Nassetta for his swift response in addressing what Ackman characterized as a &quot;rogue franchisee.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mad-Lad Maduro, Media Meltdowns &amp; Weapons of the Future&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-ackman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billAckman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billAckman as default
};
