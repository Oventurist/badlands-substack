import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Washington Post","description":"","frontmatter":{"title":"The Washington Post","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["journalism","media"],"sources":["raw/a-family-affair.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/the-washington-post.md","filePath":"entities/the-washington-post.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-washington-post.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-washington-post" tabindex="-1">The Washington Post <a class="header-anchor" href="#the-washington-post" aria-label="Permalink to &quot;The Washington Post&quot;">​</a></h1><p>The Washington Post is an American daily newspaper founded in 1877, known for its investigative journalism and political reporting. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, The Washington Post is cited as the source for the Mexican court verdict convicting <a href="/entities/raul-salinas">raul-salinas</a> as the intellectual author of the September 1994 murder of <a href="/entities/jose-francisco-ruiz-massieu">jose-francisco-ruiz-massieu</a>, and for details about <a href="/entities/mario-ruiz-massieu">mario-ruiz-massieu</a>&#39;s role as special prosecutor and subsequent cover-up.</p><h2 id="key-citations" tabindex="-1">Key citations <a class="header-anchor" href="#key-citations" aria-label="Permalink to &quot;Key citations&quot;">​</a></h2><p>The article quotes The Washington Post&#39;s reporting on the verdict of Federal Judge Ricardo Ojeda Bohorquez, who stated that evidence &quot;logically and judicially interwoven&quot; proved Raul Salinas was the intellectual author of the killing. The Post is also cited for reporting on Mario Ruiz Massieu&#39;s appointment as special prosecutor, his resignation claiming investigation blockage, and the subsequent evidence that he had altered witness statements to protect Raul Salinas.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-washington-post.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theWashingtonPost = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theWashingtonPost as default
};
