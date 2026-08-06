import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Caitlin Johnstone","description":"","frontmatter":{"title":"Caitlin Johnstone","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","independent-media","foreign-policy","nato","ukraine"],"sources":["raw/badlands-news-brief-006.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/caitlin-johnstone.md","filePath":"entities/caitlin-johnstone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/caitlin-johnstone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="caitlin-johnstone" tabindex="-1">Caitlin Johnstone <a class="header-anchor" href="#caitlin-johnstone" aria-label="Permalink to &quot;Caitlin Johnstone&quot;">​</a></h1><p>Caitlin Johnstone is an independent writer and commentator whose work focuses on United States foreign policy, war propaganda and the conduct of Western military alliances.[1]</p><p>In September 2023, Johnstone published an item headlined &quot;NATO Chief Openly Admits Russia Invaded Ukraine Because Of NATO Expansion,&quot; reporting on remarks by <a href="/entities/jens-stoltenberg">Jens Stoltenberg</a> to the European Parliament&#39;s foreign affairs committee.[1] Her account reproduced Stoltenberg&#39;s statements that <a href="/entities/vladimir-putin">Vladimir Putin</a> had sought a written promise of no further <a href="/entities/nato">NATO</a> enlargement in the autumn of 2021 as a precondition for not invading Ukraine, that NATO refused, and that Putin consequently &quot;went to war to prevent NATO, more NATO, close to his borders.&quot;[1] The piece was carried as a bonus item in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;NATO Warmongers &amp; Google Searches for a Way Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-006" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-006</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/caitlin-johnstone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const caitlinJohnstone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  caitlinJohnstone as default
};
