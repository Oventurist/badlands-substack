import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Georgia Senate","description":"","frontmatter":{"title":"Georgia Senate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["georgia","state-legislature","oversight","fani-willis","lawfare"],"sources":["raw/badlands-news-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/georgia-senate.md","filePath":"entities/georgia-senate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/georgia-senate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="georgia-senate" tabindex="-1">Georgia Senate <a class="header-anchor" href="#georgia-senate" aria-label="Permalink to &quot;Georgia Senate&quot;">​</a></h1><p>The Georgia Senate is the upper chamber of the Georgia General Assembly. In January 2024 the Republican-led chamber acted to open a legislative investigation into the Fulton County prosecutor pursuing the state&#39;s election interference case against <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><h2 id="resolution-to-investigate-fani-willis" tabindex="-1">Resolution to Investigate Fani Willis <a class="header-anchor" href="#resolution-to-investigate-fani-willis" aria-label="Permalink to &quot;Resolution to Investigate Fani Willis&quot;">​</a></h2><p>On Friday, January 26, 2024, the Senate approved a resolution establishing a committee to investigate Fulton County District Attorney <a href="/entities/fani-willis">Fani Willis</a>, who the previous year had brought an election interference case against Trump and eighteen co-defendants.[1] The measure passed 30-19 along party lines, permitting a special committee to investigate Willis amid misconduct allegations.[1]</p><p>The resolution stated that the alleged misconduct &quot;includes the ongoing expenditure of significant public funds for the purpose of hiring a special assistant district attorney with whom District Attorney Willis had, and may yet have, an ongoing romantic relationship.&quot;[1] The panel was to consist of no more than nine members, including at least three Democrats.[1]</p><p>The item appeared as the designated &quot;bonus item&quot; in the January 29, 2024 Badlands News Brief, presented without accompanying commentary.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Battle Lines Drawn in All Theaters&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/georgia-senate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const georgiaSenate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  georgiaSenate as default
};
