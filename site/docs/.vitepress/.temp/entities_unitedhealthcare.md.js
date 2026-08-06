import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UnitedHealthcare","description":"","frontmatter":{"title":"UnitedHealthcare","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["healthcare","insurance","business"],"sources":["raw/badlands-news-brief-757.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/unitedhealthcare.md","filePath":"entities/unitedhealthcare.md","lastUpdated":null}');
const _sfc_main = { name: "entities/unitedhealthcare.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="unitedhealthcare" tabindex="-1">UnitedHealthcare <a class="header-anchor" href="#unitedhealthcare" aria-label="Permalink to &quot;UnitedHealthcare&quot;">​</a></h1><p>UnitedHealthcare is one of the largest health insurance companies in the United States and a subsidiary of United Health Group.[1]</p><h2 id="killing-of-its-chief-executive" tabindex="-1">Killing of its chief executive <a class="header-anchor" href="#killing-of-its-chief-executive" aria-label="Permalink to &quot;Killing of its chief executive&quot;">​</a></h2><p>On December 4, 2024, the company&#39;s chief executive, <a href="/entities/brian-thompson">brian-thompson</a>, was shot dead outside the Hilton hotel on Avenue of the Americas in midtown Manhattan, where he had arrived early for UnitedHealthcare&#39;s annual investor conference.[1] Police characterized the shooting as a premeditated and targeted attack rather than a random act of violence, and opened a manhunt for the masked gunman.[1] The event placed the insurer, and by extension the American health insurance industry, at the center of national attention during the transition period between the <a href="/entities/joe-biden">joe-biden</a> and <a href="/entities/donald-trump">donald-trump</a> administrations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pardon Me ... No, But Seriously. PLEASE Pardon Me.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-757" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-757</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/unitedhealthcare.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedhealthcare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedhealthcare as default
};
