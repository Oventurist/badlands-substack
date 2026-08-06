import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anton Gerashchenko","description":"","frontmatter":{"title":"Anton Gerashchenko","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","information-war","social-media"],"sources":["raw/badlands-news-brief-3f8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/anton-gerashchenko.md","filePath":"entities/anton-gerashchenko.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anton-gerashchenko.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anton-gerashchenko" tabindex="-1">Anton Gerashchenko <a class="header-anchor" href="#anton-gerashchenko" aria-label="Permalink to &quot;Anton Gerashchenko&quot;">​</a></h1><p>Anton Gerashchenko is an adviser to Ukraine&#39;s minister of internal affairs and a prolific poster of war-related video and commentary on social media, where his account functions as a widely cited conduit for Ukrainian information operations.[1]</p><p>In July 2023 Gerashchenko posted to <a href="/entities/twitter">Twitter</a> a video of Belarusian leader <a href="/entities/alexander-lukashenko">Alexander Lukashenko</a> telling <a href="/entities/vladimir-putin">Vladimir Putin</a> that <a href="/entities/wagner-group">Wagner</a> fighters were asking to &quot;go to the West&quot; and proposing an &quot;excursion to Warsaw and Rzeszow.&quot;[1] The clip was the primary source for international coverage of the remarks, illustrating the role such accounts play in seeding and amplifying escalatory narratives.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;X&#39; Marks the Spot &amp; Vineyard Mysteries Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anton-gerashchenko.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const antonGerashchenko = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  antonGerashchenko as default
};
