import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Barbara Lee","description":"","frontmatter":{"title":"Barbara Lee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","california","democrats","elections"],"sources":["raw/badlands-news-brief-70d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/barbara-lee.md","filePath":"entities/barbara-lee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/barbara-lee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="barbara-lee" tabindex="-1">Barbara Lee <a class="header-anchor" href="#barbara-lee" aria-label="Permalink to &quot;Barbara Lee&quot;">​</a></h1><p><strong>Barbara Lee</strong> is a Democratic member of the United States House of Representatives from California.[1]</p><h2 id="_2024-senate-race" tabindex="-1">2024 Senate race <a class="header-anchor" href="#_2024-senate-race" aria-label="Permalink to &quot;2024 Senate race&quot;">​</a></h2><p>Following Senator <a href="/entities/dianne-feinstein">Dianne Feinstein</a>&#39;s February 14, 2023 announcement that she would retire from Congress at the end of 2024, Lee was reported to have expressed interest in running for the seat, alongside fellow House Democrats <a href="/entities/katie-porter">Katie Porter</a> and <a href="/entities/adam-schiff">Adam Schiff</a>, who had already announced 2024 campaign bids.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Firing Squads, Purebloods and Woke&#39;s Decline&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-70d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-70d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/barbara-lee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const barbaraLee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  barbaraLee as default
};
