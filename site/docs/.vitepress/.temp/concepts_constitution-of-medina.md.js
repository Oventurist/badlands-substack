import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Constitution of Medina","description":"","frontmatter":{"title":"Constitution of Medina","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["islam","religious-freedom","arabian-history","medina"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"concepts/constitution-of-medina.md","filePath":"concepts/constitution-of-medina.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/constitution-of-medina.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="constitution-of-medina" tabindex="-1">Constitution of Medina <a class="header-anchor" href="#constitution-of-medina" aria-label="Permalink to &quot;Constitution of Medina&quot;">​</a></h1><p>The Constitution of Medina was a document written by <a href="/entities/prophet-muhammad">Muhammad</a> in the year 622. The Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> describes it as historic and corroborated by multiple sources, and treats it as the strongest available refutation of the modern narrative that Islam is inherently hostile to other faiths.</p><p>The source characterises it as a formalised agreement between Muhammad&#39;s followers and the Jewish clans that had historically ruled Medina. It established Medina as a <em>haram</em> — a sanctuary — prohibiting violence between clans and guaranteeing religious freedom for all non-Muslims, and specifically for Jews.</p><p>The article states that Muhammad later established similar laws in Jerusalem, where Jews had previously been banned from worship by the ruling Christian authorities. It concedes that Muhammad&#39;s successors, &quot;especially under <a href="/concepts/wahhabism">wahhabism</a>,&quot; adopted a far less tolerant disposition, and presents the deterioration of relations between Islam and the other Abrahamic faiths as a later development rather than an original feature — a proposition the essay promises to examine further in relation to twentieth-century narrative construction.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/constitution-of-medina.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const constitutionOfMedina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  constitutionOfMedina as default
};
