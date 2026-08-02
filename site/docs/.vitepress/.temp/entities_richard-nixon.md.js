import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Richard Nixon","description":"","frontmatter":{"title":"Richard Nixon","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","president","gold-standard","monetary-policy"],"sources":["raw/a-week-to-remember.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/richard-nixon.md","filePath":"entities/richard-nixon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/richard-nixon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="richard-nixon" tabindex="-1">Richard Nixon <a class="header-anchor" href="#richard-nixon" aria-label="Permalink to &quot;Richard Nixon&quot;">​</a></h1><p>Richard Nixon was the 37th President of the United States, whose administration in the early 1970s severed the dollar&#39;s convertibility into gold and presided over the arrangements that gave rise to the <a href="/concepts/petrodollar">Petrodollar</a> system.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>The Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> recounts an episode in which France sought repayment of a loan owed by the United States. According to the article, &quot;Nixon&#39;s government said, &#39;no problem.&#39; They were going to just print up the money and send it to France.&quot; France, described in the source as &quot;aware of this ongoing scam,&quot; refused fiat dollars and demanded gold instead.</p><p>The essay claims this created a dilemma, &quot;as you can&#39;t just create gold out of thin air like you can fiat money,&quot; and that the U.S. government responded by passing an amendment making it illegal to pay foreign entities in gold. The author states this measure &quot;stood for 50 years, and was quietly repealed, ironically, a couple of years ago, when the <a href="/concepts/brics">BRICS</a> nations started talking about creating their own gold-backed currency.&quot;</p><p>The same period, the article notes, produced the Petrodollar agreement establishing that oil could be sold only in U.S. dollars — a transition the essay identifies as the point at which the United States &quot;transitioned into becoming a true economic juggernaut.&quot; Nixon thus appears in the corpus as the president under whom the modern fiat and dollar-hegemony arrangements were locked into place.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/richard-nixon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const richardNixon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  richardNixon as default
};
