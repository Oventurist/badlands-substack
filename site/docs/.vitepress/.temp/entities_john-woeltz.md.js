import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Woeltz","description":"","frontmatter":{"title":"John Woeltz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["crypto","crime","bitcoin","new-york"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-woeltz.md","filePath":"entities/john-woeltz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-woeltz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-woeltz" tabindex="-1">John Woeltz <a class="header-anchor" href="#john-woeltz" aria-label="Permalink to &quot;John Woeltz&quot;">​</a></h1><p>John Woeltz is a cryptocurrency investor charged in May 2025 with kidnapping, beating, and torturing a 28-year-old man over several weeks in a scheme to obtain his <a href="/concepts/bitcoin">Bitcoin</a> password.[1]</p><p>Woeltz, 37, was taken into custody on Friday, May 23, 2025, after the victim — also an investor — escaped from a luxury Manhattan townhouse and flagged down a police officer on the street, saying he had been held and repeatedly assaulted since May 6.[1] Officers went to the townhouse and arrested Woeltz on charges of assault, kidnapping, unlawful imprisonment, and criminal possession of a gun; he was arraigned on May 24, ordered held without bail, and faced a further hearing on May 28.[1]</p><p>Prosecutors said at the arraignment that the victim had been lured to the home on the promise of retrieving Bitcoin he had allegedly been forced to send Woeltz, at a time when one Bitcoin was worth more than $100,000.[1] According to prosecutors, the victim reported being shocked with electric wires, having his leg cut with a saw, and being forced to smoke crack cocaine in an effort to make him surrender the password.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-woeltz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnWoeltz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnWoeltz as default
};
