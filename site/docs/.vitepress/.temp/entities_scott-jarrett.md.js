import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Scott Jarrett","description":"","frontmatter":{"title":"Scott Jarrett","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","arizona","maricopa-county","elections","official"],"sources":["raw/arizona-earthquake.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/scott-jarrett.md","filePath":"entities/scott-jarrett.md","lastUpdated":null}');
const _sfc_main = { name: "entities/scott-jarrett.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="scott-jarrett" tabindex="-1">Scott Jarrett <a class="header-anchor" href="#scott-jarrett" aria-label="Permalink to &quot;Scott Jarrett&quot;">​</a></h1><p>Scott Jarrett is the Director of Elections for <a href="/entities/maricopa-county">Maricopa County</a>, Arizona. He is named as a defendant, in his official capacity, in the election contest filed by <a href="/entities/kari-lake">Kari Lake</a> on December 9, 2022 following the <a href="/concepts/2022-united-states-midterm-elections">2022 midterm elections</a>.</p><h2 id="role-in-the-lake-contest" tabindex="-1">Role in the Lake contest <a class="header-anchor" href="#role-in-the-lake-contest" aria-label="Permalink to &quot;Role in the Lake contest&quot;">​</a></h2><p>Jarrett appears alongside <a href="/entities/katie-hobbs">Katie Hobbs</a>, county recorder <a href="/entities/stephen-richer">Stephen Richer</a>, and the members and body of the <a href="/entities/maricopa-county-board-of-supervisors">Maricopa County Board of Supervisors</a> in the caption of the suit. As the official directing Election Day operations, his department is the locus of the complaint&#39;s central Election Day allegations, described in <a href="/concepts/arizona-earthquake">&quot;Arizona Earthquake!&quot;</a>: that 59% of the county&#39;s 223 vote centers suffered printer and tabulator failures, that no fewer than 34 vote centers had tabulator breakdowns after 3 p.m. despite official claims that problems had been resolved by mid-afternoon, that &quot;Door 3&quot; ballots were co-mingled with tabulated ballots, and that voters were driven from long lines without casting ballots.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
