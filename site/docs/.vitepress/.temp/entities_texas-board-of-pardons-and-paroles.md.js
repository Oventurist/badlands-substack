import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Texas Board of Pardons and Paroles","description":"","frontmatter":{"title":"Texas Board of Pardons and Paroles","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","clemency","perry-case","criminal-justice"],"sources":["raw/badlands-news-brief-09d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/texas-board-of-pardons-and-paroles.md","filePath":"entities/texas-board-of-pardons-and-paroles.md","lastUpdated":null}');
const _sfc_main = { name: "entities/texas-board-of-pardons-and-paroles.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="texas-board-of-pardons-and-paroles" tabindex="-1">Texas Board of Pardons and Paroles <a class="header-anchor" href="#texas-board-of-pardons-and-paroles" aria-label="Permalink to &quot;Texas Board of Pardons and Paroles&quot;">​</a></h1><p>The Texas Board of Pardons and Paroles is the state clemency body whose unanimous recommendation preceded Governor <a href="/entities/greg-abbott">Greg Abbott</a>&#39;s May 16, 2024 pardon of former U.S. Army Sgt. <a href="/entities/daniel-perry">Daniel Perry</a>.[1]</p><p>In a statement issued earlier that day, the board said it had &quot;delved into the intricacies&quot; of Perry&#39;s case, including reviewing police reports, court records, witness statements, and interviews with people linked to the case, and that it &quot;voted unanimously to recommend a full pardon and restoration of firearm rights.&quot;[1] Abbott responded that he thanked the board &quot;for its thorough investigation&quot; and approved its recommendation.[1]</p><p>Travis County District Attorney <a href="/entities/jose-garza">Jose Garza</a>, whose office had prosecuted Perry, called the board&#39;s decision and the ensuing pardon a &quot;mockery of our legal system.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Iranian Crashes, Israeli Maneuvers &amp; Trumpian Rhetoric&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/texas-board-of-pardons-and-paroles.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const texasBoardOfPardonsAndParoles = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  texasBoardOfPardonsAndParoles as default
};
