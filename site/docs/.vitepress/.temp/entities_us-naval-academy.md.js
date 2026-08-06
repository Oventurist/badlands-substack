import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"US Naval Academy","description":"","frontmatter":{"title":"US Naval Academy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","navy","leadership","accountability"],"sources":["raw/badlands-news-brief-02f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-naval-academy.md","filePath":"entities/us-naval-academy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-naval-academy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="us-naval-academy" tabindex="-1">US Naval Academy <a class="header-anchor" href="#us-naval-academy" aria-label="Permalink to &quot;US Naval Academy&quot;">​</a></h1><p>The United States Naval Academy is the service academy responsible for commissioning officers into the US Navy and Marine Corps, and the institution whose brigade of midshipmen is led day-to-day by a commandant of midshipmen.[1]</p><h2 id="firing-of-the-commandant-november-2025" tabindex="-1">Firing of the commandant (November 2025) <a class="header-anchor" href="#firing-of-the-commandant-november-2025" aria-label="Permalink to &quot;Firing of the commandant (November 2025)&quot;">​</a></h2><p>On Monday, November 24, 2025, the Naval Academy fired the commandant of midshipmen, <a href="/entities/gilbert-clark-jr">Capt. Gilbert Clark Jr.</a>, citing a &quot;loss of confidence in his ability to effectively lead&quot; the brigade.[1] Clark had assumed the role only in June, meaning his removal came less than half a year into the post.[1]</p><p>The dismissal was carried out by Superintendent Lt. Gen. Michael Borgschulte.[1] In a statement, the Naval Academy said the &quot;naval service maintains the highest standards for leaders and holds them accountable when those standards are not met.&quot;[1] The school provided no further details about the reason for the dismissal; the US Navy commonly cites &quot;loss of confidence&quot; when firing senior leaders.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Lavish Courtships, Extremely Strong Relations, &amp; Fake Election Rituals&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-02f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-02f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-naval-academy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usNavalAcademy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usNavalAcademy as default
};
