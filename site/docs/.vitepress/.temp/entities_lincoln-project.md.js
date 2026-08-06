import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lincoln Project","description":"","frontmatter":{"title":"Lincoln Project","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["political-action-committee","never-trump","campaign-finance"],"sources":["raw/badlands-news-brief-1d7.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/lincoln-project.md","filePath":"entities/lincoln-project.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lincoln-project.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lincoln-project" tabindex="-1">Lincoln Project <a class="header-anchor" href="#lincoln-project" aria-label="Permalink to &quot;Lincoln Project&quot;">​</a></h1><p>The Lincoln Project is an American political action committee associated with anti-Trump Republican operatives and heavily funded by liberal donors.[1] In Badlands Media coverage it appears principally as a recipient of political donations whose donor list occasionally intersects with criminal cases, illustrating what contributors describe as a two-tiered standard in how such associations are reported.[1]</p><h2 id="hackerman-donation" tabindex="-1">Hackerman donation <a class="header-anchor" href="#hackerman-donation" aria-label="Permalink to &quot;Hackerman donation&quot;">​</a></h2><p>In June 2023, reporting on the arrest of retired firefighter <a href="/entities/edward-hackerman">Edward Hackerman</a> — accused of starting the 2022 <a href="/concepts/oak-fire">Oak Fire</a> in California, which destroyed 127 homes and burned more than 19,000 acres — noted that Hackerman had donated to Democratic campaigns and to the Lincoln Project.[1] Badlands contributor <a href="/entities/johnny-q">Johnny Q</a> observed that although the donations were low in number, a comparable Republican donor profile would likely have generated &quot;domestic terrorism&quot; framing in mainstream coverage.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump&#39;s Support, Durham&#39;s Return &amp; Xi&#39;s Threats&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1d7" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1d7</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lincoln-project.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lincolnProject = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lincolnProject as default
};
