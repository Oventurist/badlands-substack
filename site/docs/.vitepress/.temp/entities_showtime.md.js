import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Showtime","description":"","frontmatter":{"title":"Showtime","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","television","paramount","streaming"],"sources":["raw/a-new-hollywood.md"],"confidence":"low"},"headers":[],"relativePath":"entities/showtime.md","filePath":"entities/showtime.md","lastUpdated":null}');
const _sfc_main = { name: "entities/showtime.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="showtime" tabindex="-1">Showtime <a class="header-anchor" href="#showtime" aria-label="Permalink to &quot;Showtime&quot;">​</a></h1><p>Showtime is the American premium television network owned by <a href="/entities/paramount-global">Paramount Global</a>.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> In &quot;A New Hollywood,&quot; <a href="/entities/erik-carlson">Erik Carlson</a> cites the new Showtime drama <em>The Agency</em> — about a <a href="/entities/cia">CIA</a> officer who comes in from the cold and settles back into life after years undercover — as part of a cluster of recent intelligence-themed programming that prompted him to investigate who owns the network.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><p>Discovering that Showtime belongs to Paramount Global, run by <a href="/entities/sheri-redstone">Sheri Redstone</a> and merging with <a href="/entities/skydance-media">Skydance Media</a>, led Carlson to conclude that <a href="/entities/hollywood">Hollywood</a> output is being reshaped by Trump-aligned ownership.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New Hollywood&quot;, URL: <a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-hollywood</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/showtime.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const showtime = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  showtime as default
};
