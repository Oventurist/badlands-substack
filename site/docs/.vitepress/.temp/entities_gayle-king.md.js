import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gayle King","description":"","frontmatter":{"title":"Gayle King","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","spaceflight"],"sources":["raw/badlands-news-brief-471.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/gayle-king.md","filePath":"entities/gayle-king.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gayle-king.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gayle-king" tabindex="-1">Gayle King <a class="header-anchor" href="#gayle-king" aria-label="Permalink to &quot;Gayle King&quot;">​</a></h1><p>Gayle King is an American broadcast journalist and CBS morning show host.[1]</p><h2 id="blue-origin-spaceflight" tabindex="-1">Blue Origin spaceflight <a class="header-anchor" href="#blue-origin-spaceflight" aria-label="Permalink to &quot;Blue Origin spaceflight&quot;">​</a></h2><p>In April 2025, King was among the six passengers on the all-female <a href="/entities/blue-origin">Blue Origin</a> suborbital flight, riding alongside singer <a href="/entities/katy-perry">Katy Perry</a>, former NASA engineer Aisha Bowe, astronaut Amanda Nguyễn, film producer Kerianne Flynn, and Lauren Sánchez, fiancée of Jeff Bezos.[1] The flight drew intense backlash over its brevity and celebrity character, and was mocked publicly by podcaster <a href="/entities/joe-rogan">Joe Rogan</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Robot Runners, Prisoner Swaps, &amp; Control of Crimea&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-471" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-471</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gayle-king.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gayleKing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gayleKing as default
};
