import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sally Kornbluth","description":"","frontmatter":{"title":"Sally Kornbluth","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["academia","antisemitism","congress","mit"],"sources":["raw/badlands-news-brief-220.md"],"confidence":"high"},"headers":[],"relativePath":"entities/sally-kornbluth.md","filePath":"entities/sally-kornbluth.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sally-kornbluth.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sally-kornbluth" tabindex="-1">Sally Kornbluth <a class="header-anchor" href="#sally-kornbluth" aria-label="Permalink to &quot;Sally Kornbluth&quot;">​</a></h1><p>Sally Kornbluth is the president of the Massachusetts Institute of Technology (MIT). In December 2023 she was one of three university leaders whose congressional testimony on campus antisemitism triggered a national backlash.[1]</p><p>Kornbluth testified before the House Committee on Education and the Workforce alongside <a href="/entities/claudine-gay">Claudine Gay</a> of <a href="/entities/harvard-university">Harvard University</a> and <a href="/entities/liz-magill">Liz Magill</a> of the <a href="/entities/university-of-pennsylvania">University of Pennsylvania</a> about their responses to alleged incidents of antisemitism on their campuses in the wake of the Israel–Hamas war.[1] All three failed to condemn calls for the genocide of Jews as explicitly prohibited under campus harassment and bullying codes, and all three were widely criticized for it.[1]</p><p>After Magill resigned, Rep. <a href="/entities/elise-stefanik">Elise Stefanik</a> posted &quot;One down. Two to go,&quot; referring to Gay and Kornbluth.[1] A bipartisan group of lawmakers wrote to the governing boards of Harvard, Penn, and MIT urging them to remove their university leaders.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Trump &amp; Rootin&#39; for Putin?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-220" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-220</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sally-kornbluth.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sallyKornbluth = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sallyKornbluth as default
};
