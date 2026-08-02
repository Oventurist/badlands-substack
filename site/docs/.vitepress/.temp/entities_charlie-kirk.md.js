import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charlie Kirk","description":"","frontmatter":{"title":"Charlie Kirk","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","conservative-activism","campus","free-speech"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/charlie-kirk.md","filePath":"entities/charlie-kirk.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charlie-kirk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charlie-kirk" tabindex="-1">Charlie Kirk <a class="header-anchor" href="#charlie-kirk" aria-label="Permalink to &quot;Charlie Kirk&quot;">​</a></h1><p>Charlie Kirk is a conservative American activist and founder of Turning Point USA, a youth-oriented political organization, and is described in the Badlands Media article &quot;A Glaring Double Standard&quot; as a prominent conservative campus figure of the late 2010s.</p><p>According to the article, Kirk — alongside <a href="/entities/ben-shapiro">Ben Shapiro</a> — was among the conservative personalities who, when they appeared on college campuses, were greeted with hostility and calls for universities to cancel their events in the name of creating &quot;safe spaces.&quot; The source states that Kirk had several speaking engagements canceled by universities in this period, framing him as one of the figures on the receiving end of the campus deplatforming dynamic that the article criticizes. The article uses this history to argue that the right&#39;s free speech advocacy was later abandoned when the targets of censorship shifted after October 7, 2023.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charlie-kirk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlieKirk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlieKirk as default
};
