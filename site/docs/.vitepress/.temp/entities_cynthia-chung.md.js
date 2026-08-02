import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cynthia Chung","description":"","frontmatter":{"title":"Cynthia Chung","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["author","historian","jesuits","canadian-patriot"],"sources":["raw/a-new-american-renaissance.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/cynthia-chung.md","filePath":"entities/cynthia-chung.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cynthia-chung.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cynthia-chung" tabindex="-1">Cynthia Chung <a class="header-anchor" href="#cynthia-chung" aria-label="Permalink to &quot;Cynthia Chung&quot;">​</a></h1><p>Cynthia Chung is an author cited in the Badlands Media essay <a href="/concepts/a-new-american-renaissance">A New American Renaissance</a> for her book <em>The Shaping of a World Religion: From Jesuits, Freemasons and Anthropologists to the Ghost Dance Religion</em>, published through the Canadian Patriot platform associated with <a href="/entities/matthew-ehret">Matthew Ehret</a>.</p><p>Ehret invokes Chung&#39;s work in the context of <a href="/concepts/penn-treaty-of-1682">Penn&#39;s Treaty of 1682</a>, and specifically its fourth article requiring that neither Christians nor Indians believe false rumors about the other without first inquiring as brethren. He argues the clause was a countermeasure against intelligence operations — above all those he attributes to the <a href="/entities/jesuits">Jesuits</a> — that conducted slanders and promoted gossip to inflame hostilities between settlers and native peoples, and that in some cases manipulated native groups from Canada and Quebec into carrying out massacres by means of what he characterizes as &quot;very, very high level MK Ultra brainwashing operations&quot; of the kind Chung&#39;s book documents.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-american-renaissance" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cynthia-chung.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cynthiaChung = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cynthiaChung as default
};
