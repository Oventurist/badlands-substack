import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Robert Winnett","description":"","frontmatter":{"title":"Robert Winnett","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","washington-post","journalism"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/robert-winnett.md","filePath":"entities/robert-winnett.md","lastUpdated":null}');
const _sfc_main = { name: "entities/robert-winnett.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="robert-winnett" tabindex="-1">Robert Winnett <a class="header-anchor" href="#robert-winnett" aria-label="Permalink to &quot;Robert Winnett&quot;">​</a></h1><p>Robert Winnett is a British journalist who was, as of June 2024, the deputy editor of The Telegraph.[1]</p><p>Under the leadership plan announced by <a href="/entities/washington-post">The Washington Post</a> on June 2, 2024, Winnett was designated to become executive editor of the paper after the 2024 presidential election, succeeding interim executive editor <a href="/entities/matthew-murray">Matthew Murray</a>, who himself replaced the departing <a href="/entities/sally-buzbee">Sally Buzbee</a>.[1] The succession was announced alongside a three-part restructuring of the <a href="/entities/jeff-bezos">Bezos</a>-owned newsroom.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/robert-winnett.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const robertWinnett = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  robertWinnett as default
};
