import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sanhedrin","description":"","frontmatter":{"title":"Sanhedrin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["religion","israel","judaism","commentary"],"sources":["raw/badlands-news-brief-264.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/sanhedrin.md","filePath":"concepts/sanhedrin.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/sanhedrin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sanhedrin" tabindex="-1">Sanhedrin <a class="header-anchor" href="#sanhedrin" aria-label="Permalink to &quot;Sanhedrin&quot;">​</a></h1><p>The Sanhedrin was the supreme rabbinical council of ancient Israel, remembered in Christian tradition for its role in the trial of Jesus of Nazareth.[1]</p><p>In Badlands Media commentary, the term is invoked as a live political actor rather than a historical one. <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> asserted that the Sanhedrin &quot;has returned to the Holy Land,&quot; and that modern-day Pharisees — described as harboring an even greater hatred of Christians than their Biblical counterparts — hold the political leash of Israeli Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>.[1] On this reading the Israel–Gaza conflict is Biblical in nature rather than merely geopolitical.[1]</p><p>The same commentary paired this claim with an argument that religious framing should be set aside in order to evaluate the conflict objectively, and with an analysis of the radical ministers — including <a href="/entities/itamar-ben-gvir">Itamar Ben-Gvir</a>, <a href="/entities/bezalel-smotrich">Bezalel Smotrich</a> and <a href="/entities/israel-katz">Israel Katz</a> — who hold three of six seats in Netanyahu&#39;s security cabinet.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Fake Candidates, Plea Deals &amp; War Drums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-264" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-264</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/sanhedrin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sanhedrin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sanhedrin as default
};
