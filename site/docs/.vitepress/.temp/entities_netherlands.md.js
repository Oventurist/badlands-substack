import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Netherlands","description":"","frontmatter":{"title":"Netherlands","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["netherlands","europe","parliament","antifa","terrorism-designation"],"sources":["raw/badlands-news-brief-1c3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/netherlands.md","filePath":"entities/netherlands.md","lastUpdated":null}');
const _sfc_main = { name: "entities/netherlands.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="netherlands" tabindex="-1">Netherlands <a class="header-anchor" href="#netherlands" aria-label="Permalink to &quot;Netherlands&quot;">​</a></h1><p>The Netherlands is a Western European state whose parliament became, in September 2025, the first foreign legislature to follow the United States in formally pressing for the designation of <a href="/entities/antifa">Antifa</a> as a terrorist organization.[1]</p><h2 id="parliamentary-motion-on-antifa-september-2025" tabindex="-1">Parliamentary motion on Antifa (September 2025) <a class="header-anchor" href="#parliamentary-motion-on-antifa-september-2025" aria-label="Permalink to &quot;Parliamentary motion on Antifa (September 2025)&quot;">​</a></h2><p>On Thursday, 18 September 2025, the Dutch parliament adopted a motion from opposition leader <a href="/entities/geert-wilders">Geert Wilders</a> calling on the Dutch government to classify Antifa as a terrorist organization.[1] The vote came one day after President <a href="/entities/donald-trump">Donald Trump</a> announced that Antifa would be designated a &quot;major terrorist organization&quot; in the United States following the assassination of conservative activist <a href="/entities/charlie-kirk">Charlie Kirk</a>.[1]</p><p>The motion alleged that Antifa cells operate inside the Netherlands and are responsible for threatening politicians, disrupting public events, and intimidating students and journalists.[1] Under Dutch practice, adoption of the motion obliged the government to issue a formal response and to determine whether to implement the requested designation.[1] Contemporary reporting observed that implementation would expand Dutch law enforcement authority over surveillance, monitoring, and prosecution of suspected Antifa activity.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: International Antifa, Hezbollah Strongholds, &amp; Nuclear Options&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1c3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1c3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/netherlands.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const netherlands = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  netherlands as default
};
