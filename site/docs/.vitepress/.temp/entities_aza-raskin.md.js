import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Aza Raskin","description":"","frontmatter":{"title":"Aza Raskin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["artificial-intelligence","technology-criticism","center-for-humane-technology"],"sources":["raw/artificial-intelligence.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/aza-raskin.md","filePath":"entities/aza-raskin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/aza-raskin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aza-raskin" tabindex="-1">Aza Raskin <a class="header-anchor" href="#aza-raskin" aria-label="Permalink to &quot;Aza Raskin&quot;">​</a></h1><p>Aza Raskin is a technologist affiliated with the <a href="/entities/center-for-humane-technology">Center for Humane Technology</a> and co-presenter, with <a href="/entities/tristan-harris">Tristan Harris</a>, of <em>The AI Dilemma</em>.[1]</p><p>Delivered on March 9, 2023 to a private San Francisco gathering of leading technologists and decision-makers with the ability to influence the future of large-language-model AI, and released publicly in March 2023 before the launch of GPT-4, the presentation held that existing <a href="/concepts/artificial-intelligence">artificial intelligence</a> capabilities already pose catastrophic risks to a functional society and that AI companies are racing to deploy without adequate safety measures.[1] Raskin and Harris closed by urging researchers to pause and slow public release of the technology.[1]</p><p>Raskin is cited jointly with Harris for the forecast that AI will shortly be able to perform dream mapping and dream interpretation using functional MRI data, reading brain activity and returning a visual or written representation of a subject&#39;s dreams — a development the Badlands treatment links to <a href="/concepts/reality-collapse">reality collapse</a> and compares to <em>Minority Report</em>.[1] He is also named, as &quot;Ava Raskin,&quot; among the signatories of the <a href="/concepts/ai-pause-open-letter">March 22, 2023 open letter</a> calling for a six-month pause on training systems more powerful than GPT-4.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Artificial Intelligence&quot;, URL: <a href="https://badlands.substack.com/p/artificial-intelligence" target="_blank" rel="noreferrer">https://badlands.substack.com/p/artificial-intelligence</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/aza-raskin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const azaRaskin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  azaRaskin as default
};
