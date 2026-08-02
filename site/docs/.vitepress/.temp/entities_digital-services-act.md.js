import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Digital Services Act","description":"","frontmatter":{"title":"Digital Services Act","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["legislation","european-union","censorship","regulation"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/digital-services-act.md","filePath":"entities/digital-services-act.md","lastUpdated":null}');
const _sfc_main = { name: "entities/digital-services-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="digital-services-act" tabindex="-1">Digital Services Act <a class="header-anchor" href="#digital-services-act" aria-label="Permalink to &quot;Digital Services Act&quot;">​</a></h1><p>The Digital Services Act (DSA) is a European Union regulation that establishes a framework for the governance of online platforms, imposing obligations on them to address illegal content. In the Badlands Media article &quot;A Glaring Double Standard,&quot; it is characterized as a repressive censorship framework.</p><h2 id="characterization-in-the-article" tabindex="-1">Characterization in the article <a class="header-anchor" href="#characterization-in-the-article" aria-label="Permalink to &quot;Characterization in the article&quot;">​</a></h2><p>The article states that &quot;the concept of &#39;protecting people from hate speech&#39; is the foundation of every censorship framework that the interagency, international blob has advocated for over the course of the last decade, and it&#39;s the exact same pretext used to justify the EU&#39;s highly repressive &#39;Digital Services Act.&#39;&quot; <a href="/entities/ryan-delarme">Ryan DeLarme</a>, the article&#39;s author, presents the DSA as an example of the international censorship apparatus that the source claims operates through the pretext of fighting &quot;hate speech.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/digital-services-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const digitalServicesAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  digitalServicesAct as default
};
