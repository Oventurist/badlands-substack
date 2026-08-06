import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"African National Congress","description":"","frontmatter":{"title":"African National Congress","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["south-africa","political-parties","corruption","organized-crime"],"sources":["raw/badlands-news-brief-357.md","raw/badlands-news-brief-3e8.md"],"confidence":"low"},"headers":[],"relativePath":"entities/african-national-congress.md","filePath":"entities/african-national-congress.md","lastUpdated":null}');
const _sfc_main = { name: "entities/african-national-congress.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="african-national-congress" tabindex="-1">African National Congress <a class="header-anchor" href="#african-national-congress" aria-label="Permalink to &quot;African National Congress&quot;">​</a></h1><p>The <strong>African National Congress (ANC)</strong> is South Africa&#39;s ruling political party, formerly led by Nelson Mandela.[1]</p><h2 id="corruption-inquiry" tabindex="-1">Corruption inquiry <a class="header-anchor" href="#corruption-inquiry" aria-label="Permalink to &quot;Corruption inquiry&quot;">​</a></h2><p>In 2025 the party&#39;s senior figures featured in a judicial inquiry probing alleged corruption and reported links between senior South African officials and organized crime.[1] Among those implicated was <a href="/entities/nkosinathi-emmanuel-mthethwa">Nkosinathi Emmanuel Mthethwa</a>, a long-serving ANC member and South Africa&#39;s ambassador to France, who was found dead in Paris in late September 2025 after reportedly falling from the 22nd floor of a hotel.[1] Mthethwa had served as Minister of Police from 2009 to 2014 under ANC governments, a period marked by criticism of the 2012 police killing of 34 striking miners at Marikana.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Unprecedented Opportunities &amp; Rich Men&#39;s Tricks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-357" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-357</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/african-national-congress.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const africanNationalCongress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  africanNationalCongress as default
};
