import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Forbes","description":"","frontmatter":{"title":"Forbes","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","business-press"],"sources":["raw/badlands-news-brief-0f0.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/forbes.md","filePath":"entities/forbes.md","lastUpdated":null}');
const _sfc_main = { name: "entities/forbes.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="forbes" tabindex="-1">Forbes <a class="header-anchor" href="#forbes" aria-label="Permalink to &quot;Forbes&quot;">​</a></h1><p>Forbes is an American business magazine and news outlet whose reporting has been aggregated in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="coverage-cited-by-badlands-media" tabindex="-1">Coverage cited by Badlands Media <a class="header-anchor" href="#coverage-cited-by-badlands-media" aria-label="Permalink to &quot;Coverage cited by Badlands Media&quot;">​</a></h2><p>In October 2023 Forbes profiled the frontrunners for the House speakership — <a href="/entities/tom-emmer">Tom Emmer</a>, <a href="/entities/kevin-hern">Kevin Hern</a>, <a href="/entities/byron-donalds">Byron Donalds</a> and Austin Scott — after House Republicans abruptly removed <a href="/entities/jim-jordan">Jim Jordan</a> as the conference&#39;s nominee.[1] The outlet reported that nearly a dozen House Republicans entered the race, setting up a high-stakes contest after three tumultuous weeks of infighting that had brought <a href="/entities/congress">Congress</a> to a halt, and covered the parallel effort by mainstream Republicans and Democrats to temporarily expand the authority of Speaker Pro Tempore <a href="/entities/patrick-mchenry">Patrick McHenry</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Escalation ... Acceleration ... and Biden&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0f0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0f0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/forbes.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const forbes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  forbes as default
};
