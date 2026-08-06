import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Scott Jarrett","description":"","frontmatter":{"title":"Scott Jarrett","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","maricopa-county","elections","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"low"},"headers":[],"relativePath":"entities/scott-jarrett.md","filePath":"entities/scott-jarrett.md","lastUpdated":null}');
const _sfc_main = { name: "entities/scott-jarrett.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scott-jarrett" tabindex="-1">Scott Jarrett <a class="header-anchor" href="#scott-jarrett" aria-label="Permalink to &quot;Scott Jarrett&quot;">​</a></h1><p>Scott Jarrett is the Director of Elections for <a href="/entities/maricopa-county">Maricopa County</a>, Arizona. He was named in his official capacity as a defendant in the election contest filed by <a href="/entities/kari-lake">Kari Lake</a> on December 9, 2022, alongside <a href="/entities/katie-hobbs">Katie Hobbs</a>, County Recorder <a href="/entities/stephen-richer">Stephen Richer</a>, the individual members of the <a href="/entities/maricopa-county-board-of-supervisors">Maricopa County Board of Supervisors</a>, and the Board itself.[1]</p><p>As elections director, Jarrett&#39;s office was responsible for the Election Day operation at the center of the complaint: the county&#39;s 223 vote centers, of which the suit alleged 59 percent suffered printer and tabulator failures, and the handling of the uncounted &quot;<a href="/concepts/door-3-ballots">Door 3</a>&quot; ballots that the complaint said were co-mingled with already-tabulated ballots.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Arizona Earthquake!&quot;, URL: <a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arizona-earthquake</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/scott-jarrett.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const scottJarrett = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  scottJarrett as default
};
