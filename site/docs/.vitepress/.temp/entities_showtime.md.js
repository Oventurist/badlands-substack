import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Showtime","description":"","frontmatter":{"title":"Showtime","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","media","hollywood"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/showtime.md","filePath":"entities/showtime.md","lastUpdated":null}');
const _sfc_main = { name: "entities/showtime.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="showtime" tabindex="-1">Showtime <a class="header-anchor" href="#showtime" aria-label="Permalink to &quot;Showtime&quot;">​</a></h1><p>Showtime is an American premium television network owned by <a href="/entities/paramount-global">Paramount Global</a>. In the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, <a href="/entities/erik-carlson">Erik Carlson</a> cites the new Showtime drama <em>The Agency</em> — about a <a href="/entities/cia">CIA</a> officer who &quot;comes in from the cold&quot; and settles back into ordinary life after several years undercover — as part of a wave of intelligence-themed programming released within the two months before the article. Discovering that Showtime belongs to Paramount Global, and that Paramount is merging with <a href="/entities/skydance-media">Skydance Media</a>, is what leads the author to conclude that &quot;something is happening&quot; in Hollywood under <a href="/entities/donald-trump">Trump</a>-aligned ownership.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
