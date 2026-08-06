import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mykhailo Fedorov","description":"","frontmatter":{"title":"Mykhailo Fedorov","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","government","drones","technology"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mykhailo-fedorov.md","filePath":"entities/mykhailo-fedorov.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mykhailo-fedorov.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mykhailo-fedorov" tabindex="-1">Mykhailo Fedorov <a class="header-anchor" href="#mykhailo-fedorov" aria-label="Permalink to &quot;Mykhailo Fedorov&quot;">​</a></h1><p>Mykhailo Fedorov is a Ukrainian government official cited in June 2026 reporting on <a href="/entities/ukraine">Ukraine</a>&#39;s intensifying campaign against <a href="/entities/russia">Russia</a>.[1]</p><p>Fedorov said in June that Russian logistics were being disrupted by Ukrainian strikes and that Crimea was being increasingly isolated.[1] His remarks accompanied continued Ukrainian drone strikes on targets inside Russia, including energy and refinery infrastructure, and the announcement by President <a href="/entities/volodymyr-zelensky">Volodymyr Zelenskyy</a> of a 40-day &quot;influence operation&quot; to be run by the <a href="/entities/security-service-of-ukraine">Security Service of Ukraine</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mykhailo-fedorov.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mykhailoFedorov = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mykhailoFedorov as default
};
