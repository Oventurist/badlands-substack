import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New York Fashion Week","description":"","frontmatter":{"title":"New York Fashion Week","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["fashion","new-york","culture"],"sources":["raw/badlands-news-brief-5b3.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/new-york-fashion-week.md","filePath":"concepts/new-york-fashion-week.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/new-york-fashion-week.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-york-fashion-week" tabindex="-1">New York Fashion Week <a class="header-anchor" href="#new-york-fashion-week" aria-label="Permalink to &quot;New York Fashion Week&quot;">​</a></h1><p>New York Fashion Week (NYFW) is a major bi-annual fashion event at which designers from around the world showcase their new collections.[1]</p><p>At the February 2023 edition, designer <a href="/entities/luis-de-javier">Luis De Javier</a> made his NYFW debut with a collection created in collaboration with the pornography platform <a href="/entities/pornhub">pornhub</a>.[1] The <a href="/entities/national-center-on-sexual-exploitation">National Center on Sexual Exploitation</a> responded with a public call to action, arguing that despite press framing the show as &quot;a runway show that sexually liberated in style,&quot; it normalized and glamorized a company complicit in mass sexual crime.[1] The episode was widely compared to the <a href="/entities/balenciaga">Balenciaga</a> advertising scandal of late 2022, with critics arguing mainstream fashion had returned to exploitative imagery only months after that backlash.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Election Laws &amp; Justice for the Exploited&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/new-york-fashion-week.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newYorkFashionWeek = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newYorkFashionWeek as default
};
