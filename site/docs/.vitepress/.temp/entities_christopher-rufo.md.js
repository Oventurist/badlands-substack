import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Christopher Rufo","description":"","frontmatter":{"title":"Christopher Rufo","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","conservative-activism","critical-race-theory","free-speech"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/christopher-rufo.md","filePath":"entities/christopher-rufo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/christopher-rufo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="christopher-rufo" tabindex="-1">Christopher Rufo <a class="header-anchor" href="#christopher-rufo" aria-label="Permalink to &quot;Christopher Rufo&quot;">​</a></h1><p>Christopher Rufo is an American conservative journalist, filmmaker, and policy advocate known for his campaigns against critical race theory and diversity, equity, and inclusion (DEI) programs. In the Badlands Media corpus he is cited as an example of a right-wing figure who defended fired conservatives before October 7 but whose free speech advocacy the source argues was conditional.</p><h2 id="defense-of-tony-kinnett" tabindex="-1">Defense of Tony Kinnett <a class="header-anchor" href="#defense-of-tony-kinnett" aria-label="Permalink to &quot;Defense of Tony Kinnett&quot;">​</a></h2><p>The article &quot;A Glaring Double Standard&quot; describes Rufo as &quot;one of the more influential right-wing personalities&quot; and quotes a tweet he posted on December 20, 2021, in response to the firing of Tony Kinnett, an Indianapolis teacher who had posted a video about critical race theory being taught in public schools:</p><blockquote><p>&quot;Outrageous: this brave teacher stood against critical race theory indoctrination in his school district—and they fired him.&quot;</p></blockquote><p><a href="/entities/ryan-delarme">Ryan DeLarme</a>, the article&#39;s author, quotes the tweet to highlight &quot;how ridiculous it is that a school would terminate someone for holding a particular viewpoint on a contentious issue that happens to be shared by half of the nation.&quot; He states that he completely agrees with Rufo in this instance — that people should be allowed to hold opinions no matter how unpalatable, and that it is dangerous when employers enforce beliefs through threat of firing — before arguing that the same principle was abandoned when the targets of firing shifted to critics of Israel.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/christopher-rufo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const christopherRufo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  christopherRufo as default
};
