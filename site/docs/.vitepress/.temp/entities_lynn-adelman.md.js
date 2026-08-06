import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lynn Adelman","description":"","frontmatter":{"title":"Lynn Adelman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","federal-courts","wisconsin"],"sources":["raw/badlands-brief-a9f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lynn-adelman.md","filePath":"entities/lynn-adelman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lynn-adelman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lynn-adelman" tabindex="-1">Lynn Adelman <a class="header-anchor" href="#lynn-adelman" aria-label="Permalink to &quot;Lynn Adelman&quot;">​</a></h1><p>Lynn Adelman is a United States federal judge who presided over the sentencing of former Milwaukee County Circuit Judge <a href="/entities/hannah-dugan">Hannah Dugan</a> in July 2026.[1]</p><p>Adelman sentenced Dugan to a $5,000 fine with no prison time following her felony conviction for obstructing a federal immigration arrest at her courthouse.[1] In explaining the sentence, Adelman said the punishment should reflect Dugan&#39;s lengthy record of public service and characterized the underlying incident as an isolated lapse in judgment.[1] The sentence departed sharply from the 15-to-21-month prison term prosecutors said federal sentencing guidelines supported.[1]</p><p>The leniency of the sentence drew criticism from commentators who viewed it as an example of asymmetrical justice in the federal courts, particularly when compared with harsher sentences imposed on defendants such as <a href="/entities/tina-peters">Tina Peters</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;FaKKKe Racists Plead Not Guilty &amp; You Can Expect More Dugans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a9f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a9f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lynn-adelman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lynnAdelman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lynnAdelman as default
};
