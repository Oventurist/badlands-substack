import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chevening Programme","description":"","frontmatter":{"title":"Chevening Programme","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["united-kingdom","soft-power","scholarships","syria"],"sources":["raw/badlands-news-brief-373.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/chevening-programme.md","filePath":"entities/chevening-programme.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chevening-programme.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chevening-programme" tabindex="-1">Chevening Programme <a class="header-anchor" href="#chevening-programme" aria-label="Permalink to &quot;Chevening Programme&quot;">​</a></h1><p>The Chevening Program is a prestigious United Kingdom government international scholarship scheme, described in reporting on the case of <a href="/entities/mahmoud-khalil">Mahmoud Khalil</a> as part of Britain&#39;s &quot;flagship soft power policy.&quot;[1]</p><h2 id="syria-chevening-program" tabindex="-1">Syria Chevening Program <a class="header-anchor" href="#syria-chevening-program" aria-label="Permalink to &quot;Syria Chevening Program&quot;">​</a></h2><p>A dedicated Syria stream of the scheme was administered through the Syria Office of the British embassy in Beirut.[1] According to online records reviewed by <a href="/entities/middle-east-eye">Middle East Eye</a>, Khalil — the Palestinian Columbia University graduate later detained by US immigration authorities — worked as a local manager for the Syria Chevening Program between 2018 and 2022, alongside work for the <a href="/entities/conflict-stability-and-security-fund">Conflict, Stability, and Security Fund</a>.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> cited Khalil&#39;s Chevening work, together with his associated British security clearance and Syrian NGO projects, as grounds to doubt the portrayal of him as an ordinary student activist.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Shutdown Show Down &amp; British Spies for Palestine&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-373" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-373</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chevening-programme.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cheveningProgramme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cheveningProgramme as default
};
