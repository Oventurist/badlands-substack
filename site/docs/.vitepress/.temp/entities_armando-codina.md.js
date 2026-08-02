import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Armando Codina","description":"","frontmatter":{"title":"Armando Codina","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["real-estate","miami","bush-family"],"sources":["raw/a-family-affair.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/armando-codina.md","filePath":"entities/armando-codina.md","lastUpdated":null}');
const _sfc_main = { name: "entities/armando-codina.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="armando-codina" tabindex="-1">Armando Codina <a class="header-anchor" href="#armando-codina" aria-label="Permalink to &quot;Armando Codina&quot;">​</a></h1><p>Armando Codina is a Coral Gables Cuban-American real estate investor identified in the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a> as one of <a href="/entities/george-hw-bush">george-hw-bush</a>&#39;s earliest financial supporters and as the business partner who gave <a href="/entities/jeb-bush">jeb-bush</a> his start in Florida real estate without requiring any capital contribution.</p><h2 id="partnership-with-jeb-bush" tabindex="-1">Partnership with Jeb Bush <a class="header-anchor" href="#partnership-with-jeb-bush" aria-label="Permalink to &quot;Partnership with Jeb Bush&quot;">​</a></h2><p>According to <a href="/entities/tampa-bay-times">tampa-bay-times</a>, Codina was so close to President George H.W. Bush that he gave Jeb Bush &quot;more than his first job in Florida.&quot; Codina put Bush&#39;s name on the company and gave him 40 percent of its profits. The article highlights the discrepancy between Jeb&#39;s lack of real estate experience and his immediate 40 percent stake in Codina&#39;s firm, arguing that the Bush name was the asset being purchased.</p><h2 id="real-estate-deals" tabindex="-1">Real estate deals <a class="header-anchor" href="#real-estate-deals" aria-label="Permalink to &quot;Real estate deals&quot;">​</a></h2><p>In 1984, Bush invested $1,000 in the Museum Tower office building and sold his stake for approximately $346,000 by 1990. Similar deals followed, all facilitated by Codina. The article notes that Bush&#39;s political connections &quot;intersected nicely with his business ventures,&quot; citing the 1997 sale of IBM&#39;s Boca Raton office park—assessed at $100 million but sold for $46.1 million to a group including Republican fundraiser <a href="/entities/mark-guzzetta">mark-guzzetta</a>—as an example of insider dealing benefiting Bush associates. The Codina Bush firm refused to disclose its commission on the IBM deal.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/armando-codina.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const armandoCodina = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  armandoCodina as default
};
