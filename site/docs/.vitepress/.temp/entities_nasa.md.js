import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NASA","description":"","frontmatter":{"title":"NASA","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["government-agency","space","public-relations","technology"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nasa.md","filePath":"entities/nasa.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nasa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nasa" tabindex="-1">NASA <a class="header-anchor" href="#nasa" aria-label="Permalink to &quot;NASA&quot;">​</a></h1><p>The National Aeronautics and Space Administration (NASA) is the civilian space agency of the United States government. In the Badlands corpus it appears as a contrast case in a discussion of how government-developed technology is presented to the public.</p><h2 id="the-tang-and-velcro-anecdote" tabindex="-1">The Tang and Velcro anecdote <a class="header-anchor" href="#the-tang-and-velcro-anecdote" aria-label="Permalink to &quot;The Tang and Velcro anecdote&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> recalls hearing as a child that Tang and Velcro were invented by NASA. The essay notes that in fact they were not, but that &quot;NASA wanted to seem more important to the American society, so they never really corrected people.&quot;</p><p>The point of the anecdote is comparative. NASA, Carlson argues, allowed the public to over-credit it in order to enhance its own standing. <a href="/entities/darpa">darpa</a>&#39;s creations, by contrast, &quot;have been sold to Americans much differently&quot; — attributed not to the agency at all but to private founders with carefully constructed origin stories. The difference in public relations strategy is used to support the essay&#39;s argument that the true provenance of major consumer technologies has been deliberately obscured.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nasa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nasa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nasa as default
};
