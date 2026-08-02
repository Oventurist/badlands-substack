import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mel Gibson","description":"","frontmatter":{"title":"Mel Gibson","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","hollywood","actor","trump-ally"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mel-gibson.md","filePath":"entities/mel-gibson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mel-gibson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mel-gibson" tabindex="-1">Mel Gibson <a class="header-anchor" href="#mel-gibson" aria-label="Permalink to &quot;Mel Gibson&quot;">​</a></h1><p>Mel Gibson is an American-Australian actor and director named in the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a> as one of three &quot;ambassadors to Hollywood&quot; recently appointed by <a href="/entities/donald-trump">Donald Trump</a>, together with <a href="/entities/jon-voight">Jon Voight</a> and <a href="/entities/sylvester-stallone">Sylvester Stallone</a>.</p><p>The article uses the appointments to argue that Trump sees the film industry as salvageable — that he recognizes &quot;the destructive force Hollywood has become&quot; yet declines to &quot;burn it to the ground,&quot; because he understands that it can again be used &quot;to inspire and shape while entertaining.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mel-gibson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const melGibson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  melGibson as default
};
