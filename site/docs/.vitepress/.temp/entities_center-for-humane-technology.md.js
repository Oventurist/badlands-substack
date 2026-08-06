import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Center for Humane Technology","description":"","frontmatter":{"title":"Center for Humane Technology","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["artificial-intelligence","technology-criticism","advocacy"],"sources":["raw/artificial-intelligence.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/center-for-humane-technology.md","filePath":"entities/center-for-humane-technology.md","lastUpdated":null}');
const _sfc_main = { name: "entities/center-for-humane-technology.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="center-for-humane-technology" tabindex="-1">Center for Humane Technology <a class="header-anchor" href="#center-for-humane-technology" aria-label="Permalink to &quot;Center for Humane Technology&quot;">​</a></h1><p>The Center for Humane Technology is an advocacy organization focused on the societal effects of technology, associated with <a href="/entities/tristan-harris">Tristan Harris</a> and <a href="/entities/aza-raskin">Aza Raskin</a>.[1]</p><p>In March 2023 the Center released <em>The AI Dilemma</em>, a recorded presentation by Harris and Raskin given at a private gathering in San Francisco on March 9, 2023 with leading technologists and decision-makers with the ability to influence the future of large-language-model <a href="/concepts/artificial-intelligence">artificial intelligence</a>. The presentation preceded the launch of GPT-4.[1] Its description states that existing AI capabilities already pose catastrophic risks to a functional society, that AI companies are caught in a race to deploy as quickly as possible without adequate safety measures, and asks what it would mean to upgrade institutions for a post-AI world; viewers are encouraged to call their political representatives to advocate for hearings on AI risk and adequate guardrails.[1]</p><p>Badlands&#39; analysis reads the Center&#39;s objective as two-fold: to raise the collective understanding of the AI researchers present and of the more than 2.7 million people who watched the presentation online, and to frame the public conversation in a societally constructive way.[1] The concluding call to pause and slow public release is characterized as naïve, because it presumes a rewrite of human nature — and, in the author&#39;s reading, the practical effect of such calls is to restrict public access to tools like <a href="/entities/chatgpt">ChatGPT</a> while governments, tech R&amp;D firms, and defense contractors continue unimpeded.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Artificial Intelligence&quot;, URL: <a href="https://badlands.substack.com/p/artificial-intelligence" target="_blank" rel="noreferrer">https://badlands.substack.com/p/artificial-intelligence</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/center-for-humane-technology.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const centerForHumaneTechnology = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  centerForHumaneTechnology as default
};
