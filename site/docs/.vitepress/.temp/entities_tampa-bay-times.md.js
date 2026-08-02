import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tampa Bay Times","description":"","frontmatter":{"title":"Tampa Bay Times","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["journalism","media"],"sources":["raw/a-family-affair.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/tampa-bay-times.md","filePath":"entities/tampa-bay-times.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tampa-bay-times.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tampa-bay-times" tabindex="-1">Tampa Bay Times <a class="header-anchor" href="#tampa-bay-times" aria-label="Permalink to &quot;Tampa Bay Times&quot;">​</a></h1><p>The Tampa Bay Times is an American daily newspaper published in St. Petersburg, Florida, known for investigative journalism and local political reporting. In the Badlands Media article <a href="/concepts/a-family-affair">a-family-affair</a>, the Tampa Bay Times is cited for detailed reporting on <a href="/entities/miguel-recarey">miguel-recarey</a>&#39;s Medicare fraud scheme and <a href="/entities/jeb-bush">jeb-bush</a>&#39;s involvement, as well as on Jeb Bush&#39;s Florida real estate dealings with <a href="/entities/richard-lawless">richard-lawless</a> and <a href="/entities/armando-codina">armando-codina</a>.</p><h2 id="key-citations" tabindex="-1">Key citations <a class="header-anchor" href="#key-citations" aria-label="Permalink to &quot;Key citations&quot;">​</a></h2><p>The article quotes Tampa Bay Times reporting on Miguel Recarey&#39;s HMO International Medical Centers, which received nearly $1 billion from Medicare between 1980 and 1987. The Times reported that Recarey &quot;contributed to Democrats and Republicans and hired well-connected lobbyists,&quot; and that <a href="/entities/jeb-bush">jeb-bush</a> &quot;not only did business with Recarey, but also intervened on his behalf when a federal agency was about to crack down on him.&quot; The Times also reported on Bush&#39;s real estate deals, including his partnership with Armando Codina and the 1997 sale of IBM&#39;s Boca Raton office park.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-family-affair" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tampa-bay-times.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tampaBayTimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tampaBayTimes as default
};
