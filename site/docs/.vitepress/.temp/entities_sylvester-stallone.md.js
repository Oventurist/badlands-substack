import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sylvester Stallone","description":"","frontmatter":{"title":"Sylvester Stallone","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","hollywood","actor","trump-ally"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sylvester-stallone.md","filePath":"entities/sylvester-stallone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sylvester-stallone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sylvester-stallone" tabindex="-1">Sylvester Stallone <a class="header-anchor" href="#sylvester-stallone" aria-label="Permalink to &quot;Sylvester Stallone&quot;">​</a></h1><p>Sylvester Stallone is an American actor, writer and director best known for the <em>Rocky</em> and <em>Rambo</em> films. The Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a> names him as one of three &quot;ambassadors to Hollywood&quot; appointed by <a href="/entities/donald-trump">Donald Trump</a>, alongside <a href="/entities/jon-voight">Jon Voight</a> and <a href="/entities/mel-gibson">Mel Gibson</a>.</p><p>Stallone&#39;s characters also figure in the essay&#39;s personal narrative. <a href="/entities/erik-carlson">Erik Carlson</a> lists <em>Rocky III</em> and <em>Rambo</em> among the formative films of his adolescence, and describes intervening to save a man from being beaten by five attackers as a moment in which he &quot;became Dirty Harry, Johnny Rambo and Rocky all rolled into one.&quot; The article separately credits President <a href="/entities/ronald-reagan">Ronald Reagan</a> with pushing for films promoting strong American characters &quot;like Rambo.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sylvester-stallone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sylvesterStallone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sylvesterStallone as default
};
