import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Negroponte","description":"","frontmatter":{"title":"John Negroponte","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["intelligence","national-security","diplomacy","2024-election"],"sources":["raw/badlands-news-brief-2f2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/john-negroponte.md","filePath":"entities/john-negroponte.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-negroponte.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-negroponte" tabindex="-1">John Negroponte <a class="header-anchor" href="#john-negroponte" aria-label="Permalink to &quot;John Negroponte&quot;">​</a></h1><p>John Negroponte is a former United States Director of National Intelligence, a post he held under President George W. Bush.[1]</p><h2 id="_2024-endorsement-of-kamala-harris" tabindex="-1">2024 endorsement of Kamala Harris <a class="header-anchor" href="#_2024-endorsement-of-kamala-harris" aria-label="Permalink to &quot;2024 endorsement of Kamala Harris&quot;">​</a></h2><p>Negroponte was among the signatories of the September 2024 letter in which more than 100 Republican former national security figures endorsed Vice President <a href="/entities/kamala-harris">Kamala Harris</a> over <a href="/entities/donald-trump">Donald Trump</a>, asserting that Harris &quot;possesses the essential qualities to serve as President and Donald Trump does not.&quot;[1] See <a href="/concepts/2024-republican-national-security-endorsement-of-harris">2024 Republican National Security Endorsement of Kamala Harris</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Israel Strikes Again as The FED Pivots&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-negroponte.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnNegroponte = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnNegroponte as default
};
