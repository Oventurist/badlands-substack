import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Renner","description":"","frontmatter":{"title":"Paul Renner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["florida","legislature","social-media","children"],"sources":["raw/badlands-news-brief-491.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/paul-renner.md","filePath":"entities/paul-renner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-renner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-renner" tabindex="-1">Paul Renner <a class="header-anchor" href="#paul-renner" aria-label="Permalink to &quot;Paul Renner&quot;">​</a></h1><p>Paul Renner is a Republican politician who served as speaker of the Florida House of Representatives, where restricting minors&#39; access to social media was his top legislative priority.[1]</p><h2 id="social-media-legislation" tabindex="-1">Social media legislation <a class="header-anchor" href="#social-media-legislation" aria-label="Permalink to &quot;Social media legislation&quot;">​</a></h2><p>Renner&#39;s priority bill was signed into law by Governor <a href="/entities/ron-desantis">Ron DeSantis</a> on March 25, 2024, giving Florida one of the most restrictive social media bans for minors in the United States.[1] The law bans social media accounts for children under 14 and requires parental permission for 14- and 15-year-olds, and it takes effect on January 1.[1] The enacted version was slightly watered down from an earlier proposal that DeSantis had vetoed in March, a week before the annual legislative session ended.[1] Observers noted the measure would still have to withstand expected legal challenges.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Dali, Diddy &amp; DJT&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-491" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-491</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-renner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulRenner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulRenner as default
};
