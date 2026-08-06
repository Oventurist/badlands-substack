import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Ryan","description":"","frontmatter":{"title":"Paul Ryan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","speaker-of-the-house","republicans","wisconsin"],"sources":["raw/badlands-news-brief-743.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/paul-ryan.md","filePath":"entities/paul-ryan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-ryan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-ryan" tabindex="-1">Paul Ryan <a class="header-anchor" href="#paul-ryan" aria-label="Permalink to &quot;Paul Ryan&quot;">​</a></h1><p>Paul Ryan is a former Republican member of the U.S. House of Representatives from Wisconsin who served as Speaker of the House.[1]</p><h2 id="speakership-contest-with-kevin-mccarthy" tabindex="-1">Speakership contest with Kevin McCarthy <a class="header-anchor" href="#speakership-contest-with-kevin-mccarthy" aria-label="Permalink to &quot;Speakership contest with Kevin McCarthy&quot;">​</a></h2><p>According to March 2024 reporting summarized in the Badlands News Brief, <a href="/entities/kevin-mccarthy">Kevin McCarthy</a> turned down the role of White House Chief of Staff during <a href="/entities/donald-trump">Donald Trump</a>&#39;s first administration, opting instead to compete for the Speakership — a leadership battle he ultimately lost to Ryan.[1] The detail resurfaced in coverage of a Bloomberg report that McCarthy was under consideration for Chief of Staff should Trump retake the White House in the November 2024 election.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Biden, Bobulinski &amp; Barbecue&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-743" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-743</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-ryan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulRyan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulRyan as default
};
