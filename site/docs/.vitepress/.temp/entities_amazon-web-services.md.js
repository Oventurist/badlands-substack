import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amazon Web Services","description":"","frontmatter":{"title":"Amazon Web Services","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aws","amazon","cia","cloud","contracts"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amazon-web-services.md","filePath":"entities/amazon-web-services.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amazon-web-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amazon-web-services" tabindex="-1">Amazon Web Services <a class="header-anchor" href="#amazon-web-services" aria-label="Permalink to &quot;Amazon Web Services&quot;">​</a></h1><p><strong>Amazon Web Services (AWS)</strong> is the cloud computing division of <a href="/entities/amazon">Amazon</a>.<a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">[1]</a></p><h2 id="cia-contract" tabindex="-1">CIA contract <a class="header-anchor" href="#cia-contract" aria-label="Permalink to &quot;CIA contract&quot;">​</a></h2><p>According to <em>America Has a CIA-Run Economy</em>, one of AWS&#39;s first big contracts was with the <a href="/entities/cia">CIA</a>. In early 2013 Amazon was awarded the contract, valued at $600 million.<a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">[1]</a> <a href="/entities/erik-carlson">Erik Carlson</a> pairs this fact with <a href="/entities/jeff-bezos">Jeff Bezos</a>&#39;s August 2013 purchase of <em><a href="/entities/washington-post">The Washington Post</a></em> for $250 million, presenting the sequence as evidence of the intelligence community&#39;s entanglement with big tech commerce and media ownership.<a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;America Has a CIA-Run Economy&quot;, URL: <a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">https://badlands.substack.com/p/america-has-a-cia-run-economy</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amazon-web-services.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amazonWebServices = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amazonWebServices as default
};
