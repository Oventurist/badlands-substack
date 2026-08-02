import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mickey Cohen","description":"","frontmatter":{"title":"Mickey Cohen","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["mickey-cohen","jewish-mafia","hollywood","organized-crime"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mickey-cohen.md","filePath":"entities/mickey-cohen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mickey-cohen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mickey-cohen" tabindex="-1">Mickey Cohen <a class="header-anchor" href="#mickey-cohen" aria-label="Permalink to &quot;Mickey Cohen&quot;">​</a></h1><p>Mickey Cohen was an American gangster described in the Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> as the Jewish Mafia figure who &quot;ran Hollywood&quot; beneath <a href="/entities/meyer-lansky">Meyer Lansky</a>.</p><p>The article assigns Cohen a specific role in the making of <em>The Godfather</em>: it states that &quot;Jewish gangster Mickey Cohen&#39;s men even staged the shooting of the movie producer&#39;s car to make it seem that the Mafia didn&#39;t want the movie made.&quot; <a href="/entities/erik-carlson">Erik Carlson</a> treats the staging as self-evident from its outcome, reasoning that if the Mafia had genuinely opposed the film, neither it nor its sequels would have been produced, and the producer &quot;certainly wouldn&#39;t have survived the shotgun attack unscathed.&quot;</p><p>In the source&#39;s framework, the staged attack was part of a deliberate publicity and misdirection operation whose effect was to make the Italian Mafia synonymous with organized crime while the Jewish Mafia — and, above it, the <a href="/entities/cia">CIA</a> — disappeared from public view.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mickey-cohen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mickeyCohen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mickeyCohen as default
};
