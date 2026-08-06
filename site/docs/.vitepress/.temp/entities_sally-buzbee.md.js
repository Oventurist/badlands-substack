import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sally Buzbee","description":"","frontmatter":{"title":"Sally Buzbee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","washington-post","journalism"],"sources":["raw/badlands-news-brief-3e8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sally-buzbee.md","filePath":"entities/sally-buzbee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sally-buzbee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sally-buzbee" tabindex="-1">Sally Buzbee <a class="header-anchor" href="#sally-buzbee" aria-label="Permalink to &quot;Sally Buzbee&quot;">​</a></h1><p>Sally Buzbee is an American journalist who served as the first female executive editor of <a href="/entities/washington-post">The Washington Post</a>, a role she had held since 2021.[1]</p><p>On Sunday, June 2, 2024, the paper announced that Buzbee had stepped down from the position.[1] She was to be succeeded on an interim basis by <a href="/entities/matthew-murray">Matthew Murray</a>, the former editor-in-chief of <a href="/entities/wall-street-journal">The Wall Street Journal</a>, who would serve as executive editor until after the 2024 presidential election, at which point <a href="/entities/robert-winnett">Robert Winnett</a>, then deputy editor at The Telegraph, would take over.[1]</p><p>The leadership change was paired with a complete restructuring of the newsroom at the <a href="/entities/jeff-bezos">Bezos</a>-owned publication, splitting it into a three-pronged operation: the main newsroom, the editorial page, and a &quot;third newsroom&quot; comprising service and social media journalism run separately from the core news operation.[1] The shakeup was reported by <a href="/entities/daily-caller">The Daily Caller</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fauci Squirms, Pollsters Panic &amp; Elections Erupt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3e8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3e8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sally-buzbee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sallyBuzbee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sallyBuzbee as default
};
