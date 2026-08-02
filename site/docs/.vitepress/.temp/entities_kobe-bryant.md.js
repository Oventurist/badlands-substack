import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kobe Bryant","description":"","frontmatter":{"title":"Kobe Bryant","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["basketball","aviation-accident","celebrity"],"sources":["raw/a-mysterious-masterclass-in-multi.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/kobe-bryant.md","filePath":"entities/kobe-bryant.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kobe-bryant.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kobe-bryant" tabindex="-1">Kobe Bryant <a class="header-anchor" href="#kobe-bryant" aria-label="Permalink to &quot;Kobe Bryant&quot;">​</a></h1><p>Kobe Bryant was an American professional basketball player who died in a helicopter crash in January 2020. He is referenced briefly in the <a href="/entities/badlands-media">Badlands Media</a> essay <a href="/concepts/a-mysterious-masterclass-in-multi">&quot;A Mysterious Masterclass in Multi Sensory Deception&quot;</a>, which cites his fatal crash — along with that of <a href="/entities/jfk-jr">John F. Kennedy Jr.</a> — as an example of an accident attributed to <a href="/concepts/spatial-disorientation">spatial disorientation</a>, the condition in which a pilot&#39;s sensory perception of attitude and direction conflicts with reality.</p><p>The reference serves the essay&#39;s argument that the failure to trust instruments over instinct can be fatal, a principle the author extends by analogy to the discernment of information in the <a href="/concepts/information-war">information war</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-mysterious-masterclass-in-multi" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kobe-bryant.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kobeBryant = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kobeBryant as default
};
