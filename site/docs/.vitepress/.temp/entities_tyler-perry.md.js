import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tyler Perry","description":"","frontmatter":{"title":"Tyler Perry","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["entertainment","hollywood","litigation"],"sources":["raw/badlands-news-brief-467.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tyler-perry.md","filePath":"entities/tyler-perry.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tyler-perry.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tyler-perry" tabindex="-1">Tyler Perry <a class="header-anchor" href="#tyler-perry" aria-label="Permalink to &quot;Tyler Perry&quot;">​</a></h1><p>Tyler Perry is an American filmmaker, producer and studio owner who has faced multiple civil lawsuits from aspiring actors alleging sexual misconduct.[1]</p><h2 id="rodriguez-lawsuit-december-2025" tabindex="-1">Rodriguez lawsuit (December 2025) <a class="header-anchor" href="#rodriguez-lawsuit-december-2025" aria-label="Permalink to &quot;Rodriguez lawsuit (December 2025)&quot;">​</a></h2><p>In late December 2025, model Mario Rodriguez sued Perry for $77 million, alleging sexual assault, sexual battery and intentional infliction of emotional distress.[1] Perry&#39;s lawyer responded in a statement characterizing the suit as another &quot;failed money grab.&quot;[1]</p><p>Perry had previously denied similar claims brought by actor Derek Dixon, who is represented by the same attorney as Rodriguez.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Somali Scams, Munchausen Moms, &amp; Another Perfect Phone Call&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-467" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-467</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tyler-perry.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tylerPerry = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tylerPerry as default
};
