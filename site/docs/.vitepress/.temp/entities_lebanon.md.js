import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lebanon","description":"","frontmatter":{"title":"Lebanon","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["middle-east","hezbollah","prince-alwaleed","cia"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/lebanon.md","filePath":"entities/lebanon.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lebanon.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lebanon" tabindex="-1">Lebanon <a class="header-anchor" href="#lebanon" aria-label="Permalink to &quot;Lebanon&quot;">​</a></h1><p>Lebanon is a country in the Middle East. In the Badlands Media article &quot;A Conflict of Interest,&quot; Lebanon is cited as the site of a bunker containing more than $1.5 billion in stolen Iraqi reconstruction cash, and as the ancestral homeland of <a href="/entities/prince-alwaleed">Prince Alwaleed bin Talal</a> through his mother, Mona El Solh, the daughter of Riad El Solh, Lebanon&#39;s first Prime Minister.</p><p>According to the article, an investigation conducted during the <a href="/entities/george-w-bush">George W. Bush administration</a> discovered the bunker and its contents, but Bush personally suppressed the investigation. The source claims the money ended up funding <a href="/entities/hezbollah">Hezbollah</a>, the Shia Islamist militant group based in Lebanon. The article also connects Lebanon to the mysterious cash handler Basel, who was described as a naturalized American citizen of Lebanese descent.</p><p>The source frames Lebanon as a critical node in the covert network it describes, with stolen taxpayer money flowing from Iraq to bunkers in Lebanon and then to terrorist organizations. It presents the suppression of the bunker investigation as evidence of deliberate government complicity in the diversion of public funds to hostile actors.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lebanon.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lebanon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lebanon as default
};
