import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Black Death","description":"","frontmatter":{"title":"Black Death","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["pandemic","history","mortality","eschatology"],"sources":["raw/are-we-entering-the-millennial-reign.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"concepts/black-death.md","filePath":"concepts/black-death.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/black-death.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="black-death" tabindex="-1">Black Death <a class="header-anchor" href="#black-death" aria-label="Permalink to &quot;Black Death&quot;">​</a></h1><p>The Black Death was the pandemic that culminated around the year 1351 and which, according to the records cited in the Badlands Media feature <a href="/concepts/are-we-entering-the-millennial-reign">&quot;Are We Entering the Millennial Reign?&quot;</a>, killed anywhere from one tenth to one quarter of the global population.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p><a href="/entities/patriots-in-progress">Patriots in Progress</a> invokes the Black Death as the only event in recorded history that comes close to the mortality figures given in Revelation&#39;s fourth seal and sixth trumpet — the death of one quarter and one third of humanity respectively. The comparison serves two purposes in his argument. It establishes that mortality on that scale is historically conceivable, and it establishes that such mortality is not by itself decisive proof of the end times, since the Black Death &quot;obviously wasn&#39;t the end.&quot; This leads the article to ask what recent or future event could meet the threshold, and to propose counting the cumulative demographic effects of abortion, disease, sterilization, infertility, war, overdose, trafficking and the <a href="/concepts/covid-19-vaccines">Covid vaccine</a> campaign within a framework of <a href="/concepts/great-tribulation">Tribulation</a> judgment.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/are-we-entering-the-millennial-reign" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/black-death.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blackDeath = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blackDeath as default
};
