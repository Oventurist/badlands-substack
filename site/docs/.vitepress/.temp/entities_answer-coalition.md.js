import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ANSWER Coalition","description":"","frontmatter":{"title":"ANSWER Coalition","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["activism","antiwar","socialism","funding-networks"],"sources":["raw/badlands-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/answer-coalition.md","filePath":"entities/answer-coalition.md","lastUpdated":null}');
const _sfc_main = { name: "entities/answer-coalition.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="answer-coalition" tabindex="-1">ANSWER Coalition <a class="header-anchor" href="#answer-coalition" aria-label="Permalink to &quot;ANSWER Coalition&quot;">​</a></h1><p>The ANSWER Coalition is a US antiwar and activist coalition named as a downstream beneficiary in the alleged <a href="/entities/neville-roy-singham">Neville Roy Singham</a> funding network.[1]</p><h2 id="position-in-the-network" tabindex="-1">Position in the network <a class="header-anchor" href="#position-in-the-network" aria-label="Permalink to &quot;Position in the network&quot;">​</a></h2><p>According to the 2026 grand jury coverage, six Singham-linked nonprofits funnelled at least $223 million, plus additional support, into a broader global network that included the People&#39;s Welfare Association — a 501(c)(4) channeling grants worldwide — the ANSWER Coalition, the <a href="/entities/party-for-socialism-and-liberation">Party for Socialism and Liberation</a>, and various unidentified groups.[1] The coalition has historically been associated with the organizing network of longtime activist <a href="/entities/brian-becker">Brian Becker</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Condemnation, Calibration, &amp; Constitutional Boxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/answer-coalition.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const answerCoalition = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  answerCoalition as default
};
