import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ben Hubbard","description":"","frontmatter":{"title":"Ben Hubbard","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["journalism","new-york-times","saudi-arabia","media-criticism"],"sources":["raw/arabian-nights.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/ben-hubbard.md","filePath":"entities/ben-hubbard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ben-hubbard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ben-hubbard" tabindex="-1">Ben Hubbard <a class="header-anchor" href="#ben-hubbard" aria-label="Permalink to &quot;Ben Hubbard&quot;">​</a></h1><p>Ben Hubbard is a <a href="/entities/new-york-times">new-york-times</a> correspondent and the author of a biography of <a href="/entities/mohammed-bin-salman">mohammed-bin-salman</a>. The Badlands Media essay <a href="/concepts/arabian-nights">arabian-nights</a> draws substantially on his March 21, 2020 Times article on the crown prince while rejecting his interpretation of the subject.</p><p>The author of the essay writes that he has read Hubbard&#39;s book and that, while Hubbard &quot;did a fine job of gathering data,&quot; his overall analysis of MBS as a malevolent figure is &quot;hot garbage.&quot; He places Hubbard&#39;s scare-quoted status as a &quot;biographer&quot; in contrast with the material Hubbard himself reports.</p><p>The facts the essay takes from Hubbard include the deaths of two of MBS&#39;s half-brothers almost exactly a year apart between 2001 and 2002; the effect of those deaths in drawing MBS closer to his father <a href="/entities/king-salman">king-salman</a>; MBS&#39;s rejection of the globetrotting lifestyle of his young relatives in favour of shadowing his father; his consumption of 1980s and 1990s American popular culture; and his reaction, at sixteen, to watching the September 11, 2001 attacks unfold. The essay treats these details as evidence directly contradicting the villainous portrait it says Hubbard and the mainstream press have constructed, attributing that portrait to the perspective of what it calls an MSM shill working for the <a href="/entities/cia">cia</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ben-hubbard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benHubbard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benHubbard as default
};
