import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Damascus","description":"","frontmatter":{"title":"Damascus","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","cities","middle-east"],"sources":["raw/badlands-news-brief-7a5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/damascus.md","filePath":"entities/damascus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/damascus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="damascus" tabindex="-1">Damascus <a class="header-anchor" href="#damascus" aria-label="Permalink to &quot;Damascus&quot;">​</a></h1><p><strong>Damascus</strong> is the capital of <a href="/entities/syria">Syria</a> and the seat of the government of <a href="/entities/bashar-al-assad">Bashar al-Assad</a> until its capture by opposition forces in December 2024.[1]</p><h2 id="fall-of-the-city-december-2024" tabindex="-1">Fall of the city, December 2024 <a class="header-anchor" href="#fall-of-the-city-december-2024" aria-label="Permalink to &quot;Fall of the city, December 2024&quot;">​</a></h2><p>Jihadist fighters entered the heart of the capital as the Syrian government collapsed, ending more than fifty years of Assad family rule.[1] Journalist Danny Makki, reporting from the city, described Syrian military and security forces around Damascus fleeing, changing into civilian clothes and escaping, with no battle fought for the city — it was abandoned rather than defended.[1] <a href="/entities/al-jazeera">Al Jazeera</a> verified footage of soldiers leaving amid gunfire shortly before opposition forces claimed entry, and reported that government troops had withdrawn from the Defence Ministry headquarters; state television channels fell into the hands of anti-Assad factions.[1] <a href="/entities/hayat-tahrir-al-sham">Hayat Tahrir al-Sham</a> and <a href="/entities/free-syrian-army">Free Syrian Army</a> fighters advanced on the capital as the Syrian Army stood down.[1]</p><h2 id="rhetorical-claims-on-the-city" tabindex="-1">Rhetorical claims on the city <a class="header-anchor" href="#rhetorical-claims-on-the-city" aria-label="Permalink to &quot;Rhetorical claims on the city&quot;">​</a></h2><p>Israeli Finance Minister <a href="/entities/bezalel-smotrich">Bezalel Smotrich</a> said in an interview in October 2024 that Damascus was part of Israel, based on his reading of scripture — a statement Badlands commentary linked to <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>&#39;s subsequent annexation moves in the <a href="/concepts/golan-heights">Golan Heights</a> and to the <a href="/concepts/greater-israel">Greater Israel</a> thesis.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Damascus Has Fallen ... Cui Bono?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7a5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7a5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/damascus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const damascus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  damascus as default
};
