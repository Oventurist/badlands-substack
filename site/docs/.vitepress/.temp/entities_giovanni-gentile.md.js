import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Giovanni Gentile","description":"","frontmatter":{"title":"Giovanni Gentile","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["fascism","italy","philosophy","corporatism"],"sources":["raw/badlands-news-brief-322.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/giovanni-gentile.md","filePath":"entities/giovanni-gentile.md","lastUpdated":null}');
const _sfc_main = { name: "entities/giovanni-gentile.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="giovanni-gentile" tabindex="-1">Giovanni Gentile <a class="header-anchor" href="#giovanni-gentile" aria-label="Permalink to &quot;Giovanni Gentile&quot;">​</a></h1><p>Giovanni Gentile was an Italian philosopher who served as <a href="/entities/benito-mussolini">Benito Mussolini</a>&#39;s chief political philosopher and Minister of Public Education, and who first coined the term &quot;Fascism&quot; in 1922.[1]</p><p>Badlands commentary credits Gentile with the definition that &quot;Fascism should rightly be called &#39;Corporatism,&#39; as it is the merger of corporate and government power&quot; — a statement it notes is wrongfully attributed to Mussolini across the entire internet.[1] The point is raised to challenge mainstream press framings, including a June 2024 <a href="/entities/haaretz">Haaretz</a> op-ed on Israeli politics, that present fascism as a right-wing doctrine rather than as the fusion of corporate and state power.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;We Have the Source ... And the Sauce&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-322" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-322</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/giovanni-gentile.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const giovanniGentile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  giovanniGentile as default
};
