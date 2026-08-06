import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Uvalde School Shooting","description":"","frontmatter":{"title":"Uvalde School Shooting","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["uvalde","texas","mass-shooting","litigation","settlement"],"sources":["raw/badlands-news-brief-079.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/uvalde-school-shooting.md","filePath":"concepts/uvalde-school-shooting.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/uvalde-school-shooting.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uvalde-school-shooting" tabindex="-1">Uvalde School Shooting <a class="header-anchor" href="#uvalde-school-shooting" aria-label="Permalink to &quot;Uvalde School Shooting&quot;">​</a></h1><p>The Uvalde school shooting was the 2022 mass shooting at Robb Elementary School in Uvalde, Texas, in which 19 students and two teachers were killed.[1]</p><h2 id="settlement-with-the-city-april-2025" tabindex="-1">Settlement with the city (April 2025) <a class="header-anchor" href="#settlement-with-the-city-april-2025" aria-label="Permalink to &quot;Settlement with the city (April 2025)&quot;">​</a></h2><p>In April 2025, families of the shooting victims reached a settlement with the city of Uvalde, according to an attorney representing the families.[1] Josh Koskoff, who represents 19 families who had relatives injured or killed in the shooting, said the city approved the settlement in a unanimous vote.[1] &quot;The road to healing is long and painful, but we are hopeful that this agreement enables families who lost so much and the city they call home to continue that process,&quot; Koskoff said in a statement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Jordanian Jam Sessions, Unpaused Loans, &amp; Disbanded Brotherhoods&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-079" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-079</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/uvalde-school-shooting.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const uvaldeSchoolShooting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  uvaldeSchoolShooting as default
};
