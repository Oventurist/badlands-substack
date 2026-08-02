import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Digital Dollar Project","description":"","frontmatter":{"title":"Digital Dollar Project","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","cbdc","crypto","nonprofit"],"sources":["raw/are-cbdcs-the-path-to-fear-or-freedom.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/digital-dollar-project.md","filePath":"entities/digital-dollar-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/digital-dollar-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="digital-dollar-project" tabindex="-1">Digital Dollar Project <a class="header-anchor" href="#digital-dollar-project" aria-label="Permalink to &quot;Digital Dollar Project&quot;">​</a></h1><p>The Digital Dollar Project is a nonprofit organization founded by <a href="/entities/j-christopher-giancarlo">J. Christopher Giancarlo</a>, former chairman of the <a href="/entities/commodity-futures-trading-commission">Commodity Futures Trading Commission</a>, to &quot;advance exploration of a United States Central Bank Digital Currency.&quot; It is described in these terms, quoting Wikipedia, in <a href="/entities/joe-lange">Joe Lange</a>&#39;s article <a href="/concepts/are-cbdcs-the-path-to-fear-or-freedom">&quot;Are CBDCs The Path To Fear, or Freedom?&quot;</a>.</p><p>The article treats the project as the public vehicle for the American position in what Giancarlo called &quot;the fight for the future of money.&quot; In a Forbes interview quoted in the piece, Giancarlo explained that the project was launched because a free society must have a say in the values encoded into digital money, whether non-sovereign money such as Diem or sovereign money in the form of a digital dollar. The values he enumerated — free enterprise, free economic activity, individual privacy, and freedom from government censorship of lawful activity — are presented by Lange as the constitutional protections that <a href="/entities/donald-trump">Donald Trump</a> is said to be defending behind the scenes in the design of a <a href="/concepts/central-bank-digital-currency">CBDC</a>.</p><p>Giancarlo&#39;s work through the project is placed in the article alongside <a href="/entities/jared-kushner">jared-kushner</a>&#39;s private advocacy to Treasury Secretary <a href="/entities/steven-mnuchin">Steven Mnuchin</a> as the two prongs of an American digital dollar effort said to predate the wider global rush.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-cbdcs-the-path-to-fear-or-freedom" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/digital-dollar-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const digitalDollarProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  digitalDollarProject as default
};
