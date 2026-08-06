import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RT","description":"","frontmatter":{"title":"RT","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","russia","state-media","propaganda"],"sources":["raw/badlands-news-brief-3b2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rt.md","filePath":"entities/rt.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rt" tabindex="-1">RT <a class="header-anchor" href="#rt" aria-label="Permalink to &quot;RT&quot;">​</a></h1><p>RT is a Russian state-controlled international news television network funded by the Russian government.[1]</p><p>The outlet was the original source for October 2023 reporting of remarks by Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> criticizing United States policy in the Middle East following the <a href="/concepts/october-7-attacks">Hamas attack on southern Israel</a>.[1] RT carried Putin&#39;s statement that the crisis was &quot;a glaring example of the failures of the US Middle East policies,&quot; his claim that Washington had tried to monopolize the peace settlement while ignoring compromises acceptable to both parties, and his call to minimize harm to civilians on both sides of the Israeli-Palestinian conflict.[1] Those remarks, delivered during a Moscow meeting with Iraqi Prime Minister <a href="/entities/mohammed-shia-al-sudani">Mohammed al-Sudani</a>, were subsequently recirculated internationally, including by the Hindustan Times.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Peacemakers, Fake Kennedys &amp; Fear Mongers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rt as default
};
