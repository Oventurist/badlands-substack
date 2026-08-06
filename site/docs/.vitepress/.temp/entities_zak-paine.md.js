import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zak Paine","description":"","frontmatter":{"title":"Zak Paine","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","host"],"sources":["raw/badlands-media-weekly-show-schedule-36d.md"],"confidence":"high"},"headers":[],"relativePath":"entities/zak-paine.md","filePath":"entities/zak-paine.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zak-paine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Zak Paine is a host on <a href="/entities/badlands-media">badlands-media</a>.[1] He hosts Baseless Conspiracies (Monday, 10:30pm ET), in which he &quot;takes Jon Herold to conspiracy theory school&quot; to explore a new conspiracy topic each week.[1] He also co-hosts Altered State (Wednesday, 9pm ET) with Brad Getz, examining &quot;the slow, engineered degradation of American Society&quot; through historical psyops and pointing toward &quot;a more sovereign and hopeful future.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Weekly Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zak-paine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zakPaine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zakPaine as default
};
