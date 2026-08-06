import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sumner Redstone","description":"","frontmatter":{"title":"Sumner Redstone","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","paramount","executives","trump-ally"],"sources":["raw/a-new-hollywood.md"],"confidence":"low"},"headers":[],"relativePath":"entities/sumner-redstone.md","filePath":"entities/sumner-redstone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sumner-redstone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sumner-redstone" tabindex="-1">Sumner Redstone <a class="header-anchor" href="#sumner-redstone" aria-label="Permalink to &quot;Sumner Redstone&quot;">​</a></h1><p>Sumner Redstone was the media executive who controlled <a href="/entities/paramount-global">Paramount Global</a> before handing the company to his daughter <a href="/entities/sheri-redstone">Sheri Redstone</a> in 2016.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a> &quot;A New Hollywood&quot; describes him as a <a href="/entities/donald-trump">Trump</a> ally and records that he died in 2020.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><p>His significance in the article is as the origin of the Redstone family&#39;s control over <a href="/entities/cbs">CBS</a>, <a href="/entities/showtime">Showtime</a> and Paramount+, a lineage that <a href="/entities/erik-carlson">Erik Carlson</a> treats as one strand of Trump-aligned influence within <a href="/entities/hollywood">Hollywood</a>.<a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A New Hollywood&quot;, URL: <a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-new-hollywood</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sumner-redstone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sumnerRedstone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sumnerRedstone as default
};
