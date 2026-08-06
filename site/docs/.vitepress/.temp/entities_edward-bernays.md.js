import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edward Bernays","description":"","frontmatter":{"title":"Edward Bernays","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["propaganda","public-relations","consent","media"],"sources":["raw/badlands-news-brief-7c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/edward-bernays.md","filePath":"entities/edward-bernays.md","lastUpdated":null}');
const _sfc_main = { name: "entities/edward-bernays.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="edward-bernays" tabindex="-1">Edward Bernays <a class="header-anchor" href="#edward-bernays" aria-label="Permalink to &quot;Edward Bernays&quot;">​</a></h1><p>Edward Bernays was an American pioneer of public relations and propaganda theory, frequently cited in Badlands commentary as an articulator of elite management of mass opinion.[1]</p><p>Bernays famously wrote that &quot;the engineering of consent is the very essence of the democratic process, the freedom to persuade and suggest.&quot;[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> invoked the line while discussing <a href="/entities/klaus-schwab">Klaus Schwab</a>&#39;s departure from day-to-day management of the <a href="/entities/world-economic-forum">World Economic Forum</a>, presenting Bernays as an early expositor of the belief system she attributed to the global elite — a worldview she compared to the <em>Hunger Games</em> prequel&#39;s President Snow and his claim that &quot;the whole world is an arena.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump’s Defense Rests, but the Info War Accelerates&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/edward-bernays.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edwardBernays = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  edwardBernays as default
};
