import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Adam Guillette","description":"","frontmatter":{"title":"Adam Guillette","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","journalism","undercover-video","education"],"sources":["raw/badlands-news-brief-6db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/adam-guillette.md","filePath":"entities/adam-guillette.md","lastUpdated":null}');
const _sfc_main = { name: "entities/adam-guillette.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="adam-guillette" tabindex="-1">Adam Guillette <a class="header-anchor" href="#adam-guillette" aria-label="Permalink to &quot;Adam Guillette&quot;">​</a></h1><p>Adam Guillette is the president of <a href="/entities/accuracy-in-media">Accuracy in Media</a> and an alumnus of the undercover journalism nonprofit <a href="/entities/project-veritas">Project Veritas</a>.[1] Under his leadership, Accuracy in Media adopted hidden-camera sting techniques aimed at public school districts, producing investigations in Idaho, Iowa and Tennessee before turning to Ohio.[1]</p><h2 id="ohio-investigation" tabindex="-1">Ohio investigation <a class="header-anchor" href="#ohio-investigation" aria-label="Permalink to &quot;Ohio investigation&quot;">​</a></h2><p>Guillette narrated the January 2023 Accuracy in Media video showing employees of school districts around Columbus, Ohio, describing how they mislead parents who oppose <a href="/concepts/critical-race-theory">critical race theory</a> and related concepts.[1] In the narration he said the recordings confirmed that &quot;parents are playing an endless game of Whac-A-Mole,&quot; because districts rebrand the tenets of critical race theory or bury contested material inside programs with innocuous names.[1] Ohio districts were reported to be struggling to rebut the footage.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Mostly Peaceful Riots and Billionaire Secrets&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/adam-guillette.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const adamGuillette = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  adamGuillette as default
};
