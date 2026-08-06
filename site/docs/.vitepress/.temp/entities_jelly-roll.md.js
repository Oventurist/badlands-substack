import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jelly Roll","description":"","frontmatter":{"title":"Jelly Roll","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["music","christianity","culture"],"sources":["raw/badlands-brief-ac2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jelly-roll.md","filePath":"entities/jelly-roll.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jelly-roll.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jelly-roll" tabindex="-1">Jelly Roll <a class="header-anchor" href="#jelly-roll" aria-label="Permalink to &quot;Jelly Roll&quot;">​</a></h1><p>Jelly Roll is an American musician who used his acceptance speech at the <a href="/concepts/68th-annual-grammy-awards">68th Annual Grammy Awards</a> in February 2026 to preach the Gospel of Jesus Christ, declaring that &quot;Jesus is for everybody.&quot;[1]</p><p><a href="/entities/ashe-in-america">Ashe in America</a> described the moment as the third of three encouraging developments at the ceremony — alongside <a href="/entities/bill-maher">Bill Maher</a>&#39;s mockery of celebrity virtue signaling and <a href="/entities/joy-villa">Joy Villa</a>&#39;s protest against <a href="/entities/scientology">Scientology</a> — characterizing the speech as gospel proclaimed &quot;into that place of great darkness.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;NeoCon Goggles &amp; Phantom Whistleblowers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-ac2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-ac2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jelly-roll.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jellyRoll = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jellyRoll as default
};
