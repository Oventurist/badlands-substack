import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gonzalo Lira","description":"","frontmatter":{"title":"Gonzalo Lira","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["independent-media","ukraine","journalism"],"sources":["raw/a-bright-red-line.md"],"confidence":"low"},"headers":[],"relativePath":"entities/gonzalo-lira.md","filePath":"entities/gonzalo-lira.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gonzalo-lira.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gonzalo-lira" tabindex="-1">Gonzalo Lira <a class="header-anchor" href="#gonzalo-lira" aria-label="Permalink to &quot;Gonzalo Lira&quot;">​</a></h1><p>Gonzalo Lira, referred to in &quot;A Bright Red Line&quot; as &quot;the late Gonzalo Lira,&quot; is listed among the independent commentators whose individual efforts allowed Western audiences to see a perspective on the Ukraine war that had been conveniently omitted from Western media.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a> He appears alongside <a href="/entities/julian-assange">Julian Assange</a>, Tucker Carlson, Oliver Stone, Douglas Macgregor and Robert F. Kennedy Jr.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a> The article links his work in connection with <a href="/entities/victoria-nuland">Victoria Nuland</a>.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Bright Red Line&quot;, URL: <a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-bright-red-line</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gonzalo-lira.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gonzaloLira = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gonzaloLira as default
};
