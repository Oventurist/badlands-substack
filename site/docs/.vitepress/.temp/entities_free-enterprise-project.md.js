import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Free Enterprise Project","description":"","frontmatter":{"title":"Free Enterprise Project","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["esg","shareholder-activism","corporate-governance"],"sources":["raw/badlands-news-brief-7a7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/free-enterprise-project.md","filePath":"entities/free-enterprise-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/free-enterprise-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="free-enterprise-project" tabindex="-1">Free Enterprise Project <a class="header-anchor" href="#free-enterprise-project" aria-label="Permalink to &quot;Free Enterprise Project&quot;">​</a></h1><p>The Free Enterprise Project is a conservative shareholder activist program of the <a href="/entities/national-center-for-public-policy-research">National Center for Public Policy Research</a>, directed by <a href="/entities/scott-shepard">Scott Shepard</a>.[1]</p><p>The project uses shareholder pressure and litigation to push back against environmental, social, and governance (<a href="/concepts/esg">ESG</a>) commitments at large American corporations.[1] Its argument is that ESG has evolved from a set of voluntary guidelines into heavy-handed mandates advancing contested &quot;social justice&quot; ideologies, and that pursuing those mandates at shareholders&#39; expense can amount to a breach of fiduciary duty exposing companies to legal action — actions the organization had already begun filing by mid-2023.[1]</p><p>The group credited consumer boycotts of companies such as <a href="/entities/target">Target</a> and <a href="/entities/anheuser-busch-inbev">Anheuser-Busch</a> with supplying the leverage that made these legal challenges viable, since customer defections demonstrated concrete financial harm from activist corporate positioning.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump Defiant, Biden Protected &amp; Woke Worn&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/free-enterprise-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const freeEnterpriseProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  freeEnterpriseProject as default
};
