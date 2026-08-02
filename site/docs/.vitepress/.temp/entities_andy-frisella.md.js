import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andy Frisella","description":"","frontmatter":{"title":"Andy Frisella","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","outlet"],"sources":["raw/a-communist-plot-to-take-over-america.md"],"confidence":"low","contested":true},"headers":[],"relativePath":"entities/andy-frisella.md","filePath":"entities/andy-frisella.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andy-frisella.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andy-frisella" tabindex="-1">Andy Frisella <a class="header-anchor" href="#andy-frisella" aria-label="Permalink to &quot;Andy Frisella&quot;">​</a></h1><p>Andy Frisella is an entrepreneur and commentator whose analysis of corporate &quot;wokeness&quot; is cited in the Badlands Media corpus.^[raw/a-communist-plot-to-take-over-america.md]</p><h2 id="corporate-wokeness-and-communist-strategy" tabindex="-1">Corporate Wokeness and Communist Strategy <a class="header-anchor" href="#corporate-wokeness-and-communist-strategy" aria-label="Permalink to &quot;Corporate Wokeness and Communist Strategy&quot;">​</a></h2><p>In the June 2023 article &quot;<a href="/concepts/a-communist-plot-to-take-over-america">A Communist Plot to Take Over America</a>,&quot; author <a href="/entities/erik-carlson">Erik Carlson</a> references a video clip by Frisella advancing the theory that woke corporate policies are not merely the result of ideological capture but may represent a deliberate Communist strategy to destroy brands that represent American culture. Frisella argued that boycotts of woke companies—while seemingly effective—may be unwittingly serving deep state objectives by eliminating culturally significant American corporations.^[raw/a-communist-plot-to-take-over-america.md]</p><p>Frisella suggested that Americans are being coerced into destroying companies tied to American culture, thereby removing the middle class and ushering in a communist state in which elites exercise total control. Carlson notes that he found Frisella&#39;s reframe embarrassingly unconsidered, acknowledging that the simplest explanation was not the only factor at play.^[raw/a-communist-plot-to-take-over-america.md]</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-communist-plot-to-take-over-america" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andy-frisella.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andyFrisella = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andyFrisella as default
};
