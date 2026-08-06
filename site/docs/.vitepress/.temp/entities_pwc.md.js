import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PwC","description":"","frontmatter":{"title":"PwC","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["consulting","artificial-intelligence","corporate"],"sources":["raw/artificial-intelligence.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pwc.md","filePath":"entities/pwc.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pwc.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pwc" tabindex="-1">PwC <a class="header-anchor" href="#pwc" aria-label="Permalink to &quot;PwC&quot;">​</a></h1><p>PwC (PricewaterhouseCoopers) is a global professional-services and consulting firm cited by Badlands Media as one of the institutional actors advancing <a href="/concepts/artificial-intelligence">artificial intelligence</a> adoption during 2023 despite contemporaneous calls for a development pause.[1]</p><p>In a June 2023 statement quoted in the article, PwC wrote: &quot;AI isn&#39;t just a new set of tools. It&#39;s the new world. From automation to augmentation, generative AI and beyond, AI is changing everything. $15.7 trillion—that&#39;s the global economic growth that AI will provide by 2030, according to PwC research. Who will get the biggest share of this prize? Those who take the lead now.&quot; The firm described itself as already a veteran at helping clients navigate AI safely and strategically, institutionalizing and deploying AI across organizations and applications in a way that is explainable, secure, and robust.[1]</p><p>Badlands groups PwC with the <a href="/entities/united-nations">United Nations</a>, the <a href="/entities/world-economic-forum">World Economic Forum</a>, and <a href="/entities/mckinsey-and-company">McKinsey &amp; Company</a> as evidence that there is no pause in what it calls the globalist machine — that all these entities are proceeding full steam ahead on AI research while public access to consumer tools such as <a href="/entities/chatgpt">ChatGPT</a> is framed as the threat to the future of humanity.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Artificial Intelligence&quot;, URL: <a href="https://badlands.substack.com/p/artificial-intelligence" target="_blank" rel="noreferrer">https://badlands.substack.com/p/artificial-intelligence</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pwc.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pwc = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pwc as default
};
