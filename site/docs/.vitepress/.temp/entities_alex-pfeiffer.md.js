import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alex Pfeiffer","description":"","frontmatter":{"title":"Alex Pfeiffer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["trump-transition","communications","politics"],"sources":["raw/badlands-news-brief-757.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/alex-pfeiffer.md","filePath":"entities/alex-pfeiffer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/alex-pfeiffer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alex-pfeiffer" tabindex="-1">Alex Pfeiffer <a class="header-anchor" href="#alex-pfeiffer" aria-label="Permalink to &quot;Alex Pfeiffer&quot;">​</a></h1><p>Alex Pfeiffer served as a spokesman for the presidential transition of <a href="/entities/donald-trump">donald-trump</a> following the 2024 election.[1]</p><h2 id="statement-on-the-iranian-hack-of-kash-patel" tabindex="-1">Statement on the Iranian hack of Kash Patel <a class="header-anchor" href="#statement-on-the-iranian-hack-of-kash-patel" aria-label="Permalink to &quot;Statement on the Iranian hack of Kash Patel&quot;">​</a></h2><p>In December 2024, after CNN reported that FBI director nominee <a href="/entities/kash-patel">kash-patel</a> had been informed by the bureau that he was targeted in an Iranian hacking operation, Pfeiffer declined to comment specifically on the hack.[1] He instead issued a statement asserting that &quot;Kash Patel was a key part of the first Trump administration&#39;s efforts against the terrorist Iranian regime and will implement President Trump&#39;s policies to protect America from adversaries as the FBI Director.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pardon Me ... No, But Seriously. PLEASE Pardon Me.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-757" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-757</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/alex-pfeiffer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const alexPfeiffer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  alexPfeiffer as default
};
