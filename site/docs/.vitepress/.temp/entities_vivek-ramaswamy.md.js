import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vivek Ramaswamy","description":"","frontmatter":{"title":"Vivek Ramaswamy","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","politics","tech","education"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/vivek-ramaswamy.md","filePath":"entities/vivek-ramaswamy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vivek-ramaswamy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vivek-ramaswamy" tabindex="-1">Vivek Ramaswamy <a class="header-anchor" href="#vivek-ramaswamy" aria-label="Permalink to &quot;Vivek Ramaswamy&quot;">​</a></h1><p>Vivek Ramaswamy is an American entrepreneur and political figure cited as a foil in the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>. <a href="/entities/erik-carlson">Erik Carlson</a> writes that, &quot;unlike Vivek Ramaswamy,&quot; he does not believe most young children should be dreaming of someday writing software code or winning math contests.</p><p>Carlson&#39;s counter-position is that young children should dream &quot;about being brave and selfless&quot; — pulling a person out of a burning building, fighting off an invading army, standing up for someone being bullied, or scoring a 90-yard touchdown — without ruling out later careers at Microsoft or Google. The disagreement is presented not as a dispute about the value of technical achievement but about the proper imaginative life of a six-year-old, who in Carlson&#39;s view &quot;should still be dreamers and not overly pragmatic.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vivek-ramaswamy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vivekRamaswamy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vivekRamaswamy as default
};
