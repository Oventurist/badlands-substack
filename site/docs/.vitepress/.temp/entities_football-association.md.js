import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Football Association","description":"","frontmatter":{"title":"Football Association","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["football","england","governing-body","religion","speech"],"sources":["raw/badlands-news-brief-2f5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/football-association.md","filePath":"entities/football-association.md","lastUpdated":null}');
const _sfc_main = { name: "entities/football-association.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="football-association" tabindex="-1">Football Association <a class="header-anchor" href="#football-association" aria-label="Permalink to &quot;Football Association&quot;">​</a></h1><p>The Football Association (FA) is the governing body of football in England, responsible for enforcing the laws of the game — including a prohibition on religious messaging appearing on jerseys and equipment.[1]</p><h2 id="guehi-armband-case" tabindex="-1">Guehi armband case <a class="header-anchor" href="#guehi-armband-case" aria-label="Permalink to &quot;Guehi armband case&quot;">​</a></h2><p>In December 2024 the FA was understood to be preparing to contact <a href="/entities/crystal-palace-fc">Crystal Palace</a> captain <a href="/entities/marc-guehi">Marc Guehi</a> to remind him that religious messaging is banned from equipment, after the message &quot;I love Jesus&quot; was added to his Premier League-issued LGBTQ+ campaign rainbow captain&#39;s armband during a weekend match.[1] The laws of football prohibit any religious messaging on jerseys, but a formal reminder would avoid the need for disciplinary action; Palace was also to be contacted to be reminded of the regulations.[1]</p><p>Badlands commentator <a href="/entities/ashe-in-america">Ashe in America</a> criticized the enforcement as arbitrary, arguing that religious messaging is banned &quot;unless the religion is rainbow communism,&quot; and that only state-approved religious messaging is permitted in public spaces.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Korea Joins the Shenanigans as Drama Gives Way to Comedy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/football-association.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const footballAssociation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  footballAssociation as default
};
