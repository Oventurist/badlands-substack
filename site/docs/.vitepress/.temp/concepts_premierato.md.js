import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Premierato","description":"","frontmatter":{"title":"Premierato","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["italy","constitutional-reform","meloni","governance"],"sources":["raw/badlands-brief-b24.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/premierato.md","filePath":"concepts/premierato.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/premierato.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="premierato" tabindex="-1">Premierato <a class="header-anchor" href="#premierato" aria-label="Permalink to &quot;Premierato&quot;">​</a></h1><p>The Premierato is a proposed set of Italian constitutional reforms championed by Prime Minister <a href="/entities/giorgia-meloni">Giorgia Meloni</a> that would modify Italy&#39;s traditional parliamentary system so that the prime minister is elected directly by the people to a five-year term.[1]</p><h2 id="purpose" tabindex="-1">Purpose <a class="header-anchor" href="#purpose" aria-label="Permalink to &quot;Purpose&quot;">​</a></h2><p>Under the existing system, the prime minister is appointed by the president on the basis of coalition support within Parliament — support that can be withdrawn at any time, triggering new elections. Badlands analysis attributes to this volatility the fact that Italian governments do not typically survive longer than a year or two before collapsing.[1] The Premierato is intended to deliver greater political stability, described as a hallmark of Meloni&#39;s administration, which took office on October 22, 2022 and became the second longest-serving government in post-WWII Italian republican history in May 2026.[1]</p><h2 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h2><p>The Premierato is pursued in parallel with the <a href="/concepts/nordio-reforms">Nordio Reforms</a> on judicial career separation, which failed at referendum in March 2026.[1] Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> argued that President <a href="/entities/donald-trump">Donald Trump</a>&#39;s public taunting of Meloni ahead of the <a href="/concepts/2026-ankara-nato-summit">Ankara NATO summit</a> effectively made her a martyr, boosting her support inside Italy and across Europe and strengthening the mandate she could apply to constitutional reform.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Diplomatic Trolling &amp; Colombian Election Denial&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b24" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b24</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/premierato.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const premierato = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  premierato as default
};
