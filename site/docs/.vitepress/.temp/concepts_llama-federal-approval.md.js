import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Llama Federal Approval","description":"","frontmatter":{"title":"Llama Federal Approval","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["artificial-intelligence","federal-procurement","meta","gsa"],"sources":["raw/badlands-news-brief-8ce.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/llama-federal-approval.md","filePath":"concepts/llama-federal-approval.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/llama-federal-approval.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="llama-federal-approval" tabindex="-1">Llama Federal Approval <a class="header-anchor" href="#llama-federal-approval" aria-label="Permalink to &quot;Llama Federal Approval&quot;">​</a></h1><p>The Llama federal approval refers to the September 2025 decision by the <a href="/entities/general-services-administration">General Services Administration</a> to add <a href="/entities/meta-platforms">Meta</a>&#39;s artificial intelligence system Llama to its list of AI platforms approved for use by United States government agencies.[1] The move came as the <a href="/entities/trump-administration">Trump administration</a> expanded efforts to integrate commercial AI tools across federal operations.[1]</p><p>The GSA, which oversees federal procurement, made the addition after determining that Llama meets government security and legal standards, as confirmed by procurement lead Josh Gruenbaum.[1] The system is offered free by Meta and can process text, video, images, and audio.[1]</p><p>The approval followed GSA clearances in preceding months for AI products from <a href="/entities/xai">xAI</a>, Amazon, Microsoft, Google, <a href="/entities/anthropic">Anthropic</a>, and OpenAI, with those companies agreeing to provide steep discounts while adhering to federal requirements.[1] Gruenbaum said the goal is to give agencies tools to streamline contract reviews, troubleshoot IT issues faster, and improve efficiency across departments, adding: &quot;It&#39;s not about currying favor. It&#39;s about that recognition of how do we all lock in arms and make this country the best country it could possibly be.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Palestinian Promises, Venezuelan Ventures, &amp; Kazakh Considerations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8ce" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8ce</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/llama-federal-approval.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const llamaFederalApproval = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  llamaFederalApproval as default
};
