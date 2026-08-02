import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Guardian","description":"","frontmatter":{"title":"The Guardian","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["journalism","media"],"sources":["raw/a-family-affair.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/the-guardian.md","filePath":"entities/the-guardian.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-guardian.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-guardian" tabindex="-1">The Guardian <a class="header-anchor" href="#the-guardian" aria-label="Permalink to &quot;The Guardian&quot;">​</a></h1><p>The Guardian is a British daily newspaper founded in 1821, known for its liberal editorial stance and investigative journalism. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, The Guardian is cited as the source for details about <a href="/entities/mario-ruiz-massieu">mario-ruiz-massieu</a>&#39;s cash deposits at <a href="/entities/texas-commerce-bank">texas-commerce-bank</a>, his arrest in Newark, and the U.S. government&#39;s contention that nearly $10 million in drug proceeds had been deposited in Houston.</p><h2 id="key-citation" tabindex="-1">Key citation <a class="header-anchor" href="#key-citation" aria-label="Permalink to &quot;Key citation&quot;">​</a></h2><p>The article quotes The Guardian&#39;s reporting on Mario Ruiz Massieu&#39;s financial activities, including the initial $40,000 deposit in December 1993, the subsequent 25 cash deposits between December 1993 and February 1995, and the testimony of U.S. prosecutors that the $9.9 million accumulated was &quot;bribes paid by drug traffickers in exchange for immunity from prosecution.&quot; The Guardian also reported on Mario&#39;s arrest in Newark and his $46,000 in undeclared cash.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-guardian.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theGuardian = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theGuardian as default
};
