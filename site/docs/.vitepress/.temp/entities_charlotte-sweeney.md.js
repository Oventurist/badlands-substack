import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charlotte Sweeney","description":"","frontmatter":{"title":"Charlotte Sweeney","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["judiciary","federal-judge","colorado","litigation"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/charlotte-sweeney.md","filePath":"entities/charlotte-sweeney.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charlotte-sweeney.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charlotte-sweeney" tabindex="-1">Charlotte Sweeney <a class="header-anchor" href="#charlotte-sweeney" aria-label="Permalink to &quot;Charlotte Sweeney&quot;">​</a></h1><p>Charlotte Sweeney is a United States District Judge serving on the <a href="/entities/us-district-court-for-the-district-of-colorado">United States District Court for the District of Colorado</a>. She presided over <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a>, the voter-intimidation suit brought against the <a href="/entities/useip">United States Election Integrity Plan</a> and individual canvassers.</p><p>In the essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a>, defendant <a href="/entities/ashe-in-america">Ashe in America</a> quotes two of Judge Sweeney&#39;s findings from the July 2024 trial. On the sufficiency of the plaintiffs&#39; evidence, she stated: &quot;In sum, plaintiffs have failed to introduce any evidence that can remotely be perceived as intimidating or threatening on behalf of the three defendants.&quot; On the origin of the key affidavit, she found: &quot;It was upon suggestion apparently from plaintiffs&#39; counsel that USEIP was the group canvassing in her county that she got – at which point she adopted that position and included it in her affidavit.&quot;</p><p>Judge Sweeney ended the scheduled five-day trial after three days, entering a Judgment Based on Partial Findings under Rule 52(c) of the Federal Rules of Civil Procedure and awarding costs to the defendants.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charlotte-sweeney.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlotteSweeney = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlotteSweeney as default
};
