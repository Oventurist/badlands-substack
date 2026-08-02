import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"King Salman","description":"","frontmatter":{"title":"King Salman","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["saudi-arabia","house-of-saud","monarchy","middle-east"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/king-salman.md","filePath":"entities/king-salman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/king-salman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="king-salman" tabindex="-1">King Salman <a class="header-anchor" href="#king-salman" aria-label="Permalink to &quot;King Salman&quot;">​</a></h1><p>Salman bin Abdulaziz Al Saud is the King of <a href="/entities/saudi-arabia">saudi-arabia</a> and the father of Crown Prince <a href="/entities/mohammed-bin-salman">mohammed-bin-salman</a>. He appears in the Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> chiefly in relation to the 2017 succession.</p><p>The source describes the moves made by MBS and his father to depose the would-be crown prince <a href="/entities/muhammad-bin-nayef">muhammad-bin-nayef</a> and the prince and minister then in charge of the Saudi military, both cousins of MBS, who were arrested and stripped of all powers. Nayef was charged with treason and later accused of plotting to murder King Salman.</p><p>The essay also emphasises the relationship between father and son. Drawing on reporting by <a href="/entities/ben-hubbard">ben-hubbard</a>, it states that the deaths of two of MBS&#39;s half-brothers between 2001 and 2002 brought the young prince and his father closer together, and portrays MBS as having rejected the globetrotting lifestyle of his relatives in favour of shadowing his father in order to learn about Arabia directly. King Salman is the son of Abdulaziz bin Abdul Rahman Al Saud, the founder of the modern kingdom, whose role the essay reserves for its promised sequel.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/king-salman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kingSalman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kingSalman as default
};
