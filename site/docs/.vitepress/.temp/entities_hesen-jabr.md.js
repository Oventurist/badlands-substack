import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hesen Jabr","description":"","frontmatter":{"title":"Hesen Jabr","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","healthcare","israel","free-speech"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/hesen-jabr.md","filePath":"entities/hesen-jabr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hesen-jabr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hesen-jabr" tabindex="-1">Hesen Jabr <a class="header-anchor" href="#hesen-jabr" aria-label="Permalink to &quot;Hesen Jabr&quot;">​</a></h1><p>Hesen Jabr is an American nurse who worked at NYU Langone Health. In the Badlands Media article &quot;A Glaring Double Standard,&quot; her firing is cited as an example of an American terminated for dissenting views on Israel.</p><h2 id="termination" tabindex="-1">Termination <a class="header-anchor" href="#termination" aria-label="Permalink to &quot;Termination&quot;">​</a></h2><p>The article states Jabr was fired for &quot;comparing the ethnic cleansing of Gaza by Israel to the ethnic cleansing of European Jews by the Nazi party.&quot; It identifies <a href="/entities/stopantisemitism">StopAntisemitism</a> as the primary group pressuring her employer to fire her.</p><h2 id="use-in-the-article-s-argument" tabindex="-1">Use in the article&#39;s argument <a class="header-anchor" href="#use-in-the-article-s-argument" aria-label="Permalink to &quot;Use in the article&#39;s argument&quot;">​</a></h2><p><a href="/entities/ryan-delarme">Ryan DeLarme</a>, the article&#39;s author, lists Jabr among individuals who faced job termination for dissenting views on Israel&#39;s military actions in Gaza, arguing that none of the right-wing free speech advocates who protested cases like <a href="/entities/gina-carano">Gina Carano</a>&#39;s &quot;warned of cancel culture&#39;s dangers, as they had when the PC police came for people and ideas they agreed with.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hesen-jabr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hesenJabr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hesenJabr as default
};
