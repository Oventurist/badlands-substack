import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jon Voight","description":"","frontmatter":{"title":"Jon Voight","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","hollywood","actor","trump-ally"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jon-voight.md","filePath":"entities/jon-voight.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jon-voight.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jon-voight" tabindex="-1">Jon Voight <a class="header-anchor" href="#jon-voight" aria-label="Permalink to &quot;Jon Voight&quot;">​</a></h1><p>Jon Voight is an American actor identified in the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a> as one of three figures recently appointed by <a href="/entities/donald-trump">Donald Trump</a> as &quot;ambassadors to Hollywood,&quot; alongside <a href="/entities/sylvester-stallone">Sylvester Stallone</a> and <a href="/entities/mel-gibson">Mel Gibson</a>.</p><p><a href="/entities/erik-carlson">Erik Carlson</a> treats the appointment as evidence that Trump regards Hollywood as redeemable rather than irredeemably hostile: &quot;Why would he do this unless he thought Hollywood has been and could be again an important part of what makes America America?&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jon-voight.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jonVoight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jonVoight as default
};
