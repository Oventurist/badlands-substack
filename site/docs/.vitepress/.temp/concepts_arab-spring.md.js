import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Arab Spring","description":"","frontmatter":{"title":"Arab Spring","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["middle-east","color-revolution","qatar","media"],"sources":["raw/badlands-news-brief-69b.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/arab-spring.md","filePath":"concepts/arab-spring.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/arab-spring.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="arab-spring" tabindex="-1">Arab Spring <a class="header-anchor" href="#arab-spring" aria-label="Permalink to &quot;Arab Spring&quot;">​</a></h1><p>The Arab Spring refers to the wave of uprisings that swept the Middle East and North Africa beginning in 2011.[1]</p><h2 id="badlands-interpretation" tabindex="-1">Badlands interpretation <a class="header-anchor" href="#badlands-interpretation" aria-label="Permalink to &quot;Badlands interpretation&quot;">​</a></h2><p>Badlands Media treats the Arab Spring as a set of orchestrated &quot;revolutions&quot; rather than spontaneous popular movements.[1] In this account, the rest of the Middle East developed lasting bad blood with the Qataris after 2011, when it became obvious that <a href="/entities/qatar">Qatar</a> was connected to the engineered uprisings and its state-linked outlet <a href="/entities/al-jazeera">Al Jazeera</a> — described as a <a href="/entities/muslim-brotherhood">Muslim Brotherhood</a> platform and therefore, in the outlet&#39;s reading, probably tied to London as well — became &quot;the main cheerleader for the color revolutions.&quot;[1]</p><p>This framing underpins the later Gulf rupture: the 2017 Saudi-led embargo of Qatar, justified by <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a> on the grounds that Doha was a terrorist haven enabling psychological warfare operations through outlets such as Al Jazeera, is presented as downstream of Arab Spring grievances.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Calls for Peace as the World Heads Toward War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-69b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-69b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/arab-spring.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const arabSpring = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  arabSpring as default
};
