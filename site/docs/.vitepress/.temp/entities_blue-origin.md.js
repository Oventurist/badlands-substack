import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blue Origin","description":"","frontmatter":{"title":"Blue Origin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aerospace","spaceflight","jeff-bezos"],"sources":["raw/badlands-news-brief-471.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/blue-origin.md","filePath":"entities/blue-origin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/blue-origin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blue-origin" tabindex="-1">Blue Origin <a class="header-anchor" href="#blue-origin" aria-label="Permalink to &quot;Blue Origin&quot;">​</a></h1><p>Blue Origin is the private aerospace company owned by billionaire Jeff Bezos, best known in popular coverage for its short suborbital passenger flights.[1]</p><h2 id="_2025-all-female-crewed-flight" tabindex="-1">2025 all-female crewed flight <a class="header-anchor" href="#_2025-all-female-crewed-flight" aria-label="Permalink to &quot;2025 all-female crewed flight&quot;">​</a></h2><p>In April 2025, Blue Origin flew an all-female crew on a brief suborbital trip aboard one of Bezos&#39;s rockets.[1] The crew consisted of pop singer <a href="/entities/katy-perry">Katy Perry</a>, former NASA engineer Aisha Bowe, astronaut Amanda Nguyễn, CBS morning host <a href="/entities/gayle-king">Gayle King</a>, film producer Kerianne Flynn, and Lauren Sánchez, Bezos&#39;s fiancée.[1] The flight generated intense public backlash over its brevity and celebrity framing, and became the subject of mockery by podcaster <a href="/entities/joe-rogan">Joe Rogan</a>, who ridiculed Perry&#39;s on-board daisy stunt and the profundity she attributed to the experience.[1]</p><p>Badlands commentary treated the episode as emblematic of the performative character of contemporary space deployments generally, applying the same skepticism to commercial spaceflight publicity that it applies to other spectacle-driven news events.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Robot Runners, Prisoner Swaps, &amp; Control of Crimea&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-471" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-471</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/blue-origin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blueOrigin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blueOrigin as default
};
