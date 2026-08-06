import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"McKinley Minniefield","description":"","frontmatter":{"title":"McKinley Minniefield","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["indiana","business","bud-light-boycott"],"sources":["raw/badlands-news-brief-13b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mckinley-minniefield.md","filePath":"entities/mckinley-minniefield.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mckinley-minniefield.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mckinley-minniefield" tabindex="-1">McKinley Minniefield <a class="header-anchor" href="#mckinley-minniefield" aria-label="Permalink to &quot;McKinley Minniefield&quot;">​</a></h1><p>McKinley Minniefield is the owner of the <a href="/entities/fairfax-bar-and-grill">Fairfax Bar &amp; Grill</a> in Bloomington, Indiana, which became a flashpoint in the 2023 <a href="/entities/bud-light">Bud Light</a> boycott after the establishment publicly defended <a href="/entities/anheuser-busch-inbev">Anheuser-Busch</a>&#39;s partnership with <a href="/entities/dylan-mulvaney">Dylan Mulvaney</a>.[1]</p><p>Minniefield told WISH-TV that the policy of removing &quot;intolerant&quot; patrons arose from conditions inside the bar: &quot;We were just dealing with a lot of hate speech, and people being uncomfortable. My bartenders were aggravated and we had customers that were leaving.&quot;[1] The bar subsequently suffered a sharp loss of customers and issued a statement reaffirming that it would continue to sell Anheuser-Busch products &quot;because we don&#39;t care who they make special cans for.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunters Hunted, Gender Confusion &amp; the Spiritual War&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-13b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-13b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mckinley-minniefield.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mckinleyMinniefield = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mckinleyMinniefield as default
};
