import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Herut Party","description":"","frontmatter":{"title":"Herut Party","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","politics","revisionism","likud"],"sources":["raw/badlands-news-brief-09d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/herut-party.md","filePath":"entities/herut-party.md","lastUpdated":null}');
const _sfc_main = { name: "entities/herut-party.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="herut-party" tabindex="-1">Herut Party <a class="header-anchor" href="#herut-party" aria-label="Permalink to &quot;Herut Party&quot;">​</a></h1><p>The Herut Party was the Israeli political vehicle formed out of the membership of the <a href="/entities/irgun">Irgun</a> after that organization was formally disbanded in 1949, following the establishment of the Israeli state.[1]</p><p>Herut carried forward the <a href="/concepts/revisionist-zionism">Revisionist</a> political tradition of <a href="/entities/zeev-jabotinsky">Ze&#39;ev Jabotinsky</a> into electoral politics, and eventually became the <a href="/entities/likud-party">Likud Party</a> in 1977 — the same period in which <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> was cycling out of the <a href="/entities/israel-defense-forces">IDF</a> and partnering with his father to plot his political career.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Iranian Crashes, Israeli Maneuvers &amp; Trumpian Rhetoric&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/herut-party.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const herutParty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  herutParty as default
};
