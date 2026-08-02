import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jon Herold","description":"","frontmatter":{"title":"Jon Herold","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["person","writer","substack","devolution","badlands-media"],"sources":["raw/all-assets-deployed.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/jon-herold.md","filePath":"entities/jon-herold.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jon-herold.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jon-herold" tabindex="-1">Jon Herold <a class="header-anchor" href="#jon-herold" aria-label="Permalink to &quot;Jon Herold&quot;">​</a></h1><p>Jon Herold is an American independent writer and <a href="/entities/badlands-media">Badlands Media</a> contributor best known as the author, under the byline Patel Patriot, of the <a href="/concepts/devolution">Devolution</a> series published on Substack. The series argues that essential national security functions were placed under continuity protections rather than surrendered following the 2020 election, and it became one of the most widely read research projects in the <a href="/concepts/maga">MAGA</a> and <a href="/concepts/america-first">America First</a> online community.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>In the November 2022 essay <a href="/concepts/all-assets-deployed">All Assets Deployed</a>, <a href="/entities/burning-bright">Burning Bright</a> directs readers who believe <a href="/entities/donald-trump">Donald Trump</a>&#39;s 2024 announcement disproves Devolution to &quot;take another read through Jon Herold&#39;s series,&quot; and reframes its thesis as a defensive measure protecting red-line national security functions rather than a plan for immediate restoration of power.</p><p>The same essay notes that Herold, its author, and &quot;several others at Badlands Media advanced plenty of theories and projections heading into the <a href="/concepts/2022-united-states-midterm-elections">Midterm Elections</a>,&quot; including the then-unpopular argument that a crushing and actualized Red Wave might undo the ongoing exposure operation by placing the movement in front of a runaway train and leaving it to take the blame &quot;like a miscast Judas.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/all-assets-deployed" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jon-herold.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jonHerold = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jonHerold as default
};
