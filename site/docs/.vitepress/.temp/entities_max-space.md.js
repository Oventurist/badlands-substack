import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Max Space","description":"","frontmatter":{"title":"Max Space","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["space","technology","startups"],"sources":["raw/badlands-news-brief-467.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/max-space.md","filePath":"entities/max-space.md","lastUpdated":null}');
const _sfc_main = { name: "entities/max-space.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="max-space" tabindex="-1">Max Space <a class="header-anchor" href="#max-space" aria-label="Permalink to &quot;Max Space&quot;">​</a></h1><p>Max Space is a startup developing expandable, inflatable space habitats intended as an alternative to the segment-by-segment assembly model used to build the International Space Station.[1]</p><p>The ISS was painstakingly assembled piece by piece, requiring many expensive and logistically complex rocket launches. Max Space and similar ventures instead propose launching habitats that inflate like balloons once in orbit, creating far more interior room for astronauts and maximizing the orbital real estate claimed with a single launch.[1]</p><h2 id="thunderbird-station" tabindex="-1">Thunderbird Station <a class="header-anchor" href="#thunderbird-station" aria-label="Permalink to &quot;Thunderbird Station&quot;">​</a></h2><p>Max Space unveiled plans for a private space habitat named Thunderbird Station, which can expand to roughly 12,300 cubic feet — about a third of the volume of the International Space Station — while requiring only a single launch aboard a <a href="/entities/spacex">SpaceX</a> Falcon 9 rocket.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Somali Scams, Munchausen Moms, &amp; Another Perfect Phone Call&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-467" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-467</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/max-space.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maxSpace = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  maxSpace as default
};
