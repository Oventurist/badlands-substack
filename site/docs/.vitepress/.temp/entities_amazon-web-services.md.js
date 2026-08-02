import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amazon Web Services","description":"","frontmatter":{"title":"Amazon Web Services","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["cloud-computing","intelligence-contracting","big-tech","corporate"],"sources":["raw/america-has-a-cia-run-economy.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/amazon-web-services.md","filePath":"entities/amazon-web-services.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amazon-web-services.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amazon-web-services" tabindex="-1">Amazon Web Services <a class="header-anchor" href="#amazon-web-services" aria-label="Permalink to &quot;Amazon Web Services&quot;">​</a></h1><p>Amazon Web Services (AWS) is the cloud computing division of <a href="/entities/amazon">amazon</a>. In the Badlands corpus it is cited as concrete, documented evidence for the broader claim that American technology companies are structurally entangled with the <a href="/entities/cia">Central Intelligence Agency</a>.</p><h2 id="the-cia-contract" tabindex="-1">The CIA contract <a class="header-anchor" href="#the-cia-contract" aria-label="Permalink to &quot;The CIA contract&quot;">​</a></h2><p>Erik Carlson&#39;s <a href="/concepts/america-has-a-cia-run-economy">America Has a CIA-Run Economy</a> states that one of AWS&#39;s first big contracts was with the CIA, and dates the award to early 2013 at a value of $600 million. The essay presents this alongside two other assertions of the same kind — that much of Facebook&#39;s early funding came from CIA shell companies, and that Google Earth originated as an old CIA satellite handed to the company — as instances in which intelligence capability was transferred into or purchased from the private technology sector.</p><p>The article draws particular attention to the timing: the contract was awarded in early 2013, and in August 2013 <a href="/entities/jeff-bezos">jeff-bezos</a> purchased <a href="/entities/washington-post">The Washington Post</a> for $250 million, a paper the essay describes as CIA-run.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/america-has-a-cia-run-economy" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
