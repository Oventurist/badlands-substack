import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Steve Baker","description":"","frontmatter":{"title":"Steve Baker","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","january-6","fbi","press-freedom"],"sources":["raw/badlands-news-brief-788.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/steve-baker.md","filePath":"entities/steve-baker.md","lastUpdated":null}');
const _sfc_main = { name: "entities/steve-baker.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="steve-baker" tabindex="-1">Steve Baker <a class="header-anchor" href="#steve-baker" aria-label="Permalink to &quot;Steve Baker&quot;">​</a></h1><p><strong>Steve Baker</strong> is an American journalist working for <em>The Blaze</em> who was arrested in 2024 on misdemeanor charges arising from his presence at the U.S. Capitol on January 6, 2021.[1]</p><h2 id="arrest" tabindex="-1">Arrest <a class="header-anchor" href="#arrest" aria-label="Permalink to &quot;Arrest&quot;">​</a></h2><p>Baker was arrested on Friday, March 1, 2024 and charged with four misdemeanors related to his January 6 coverage at the U.S. Capitol.[1] He turned himself over to the <a href="/entities/fbi">FBI</a> in Dallas.[1]</p><p>The four charges were: knowingly entering or remaining in any restricted building or grounds without lawful authority; disorderly and disruptive conduct in a restricted building or grounds; disorderly conduct in a Capitol building; and parading, demonstrating, or picketing in a Capitol building.[1]</p><p>Baker was released from a Texas federal courthouse following his appearance.[1] His arrest was reported by <a href="/entities/zerohedge">ZeroHedge</a> and circulated widely as an example of the prosecution of journalists who documented the events of January 6.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump&#39;s Ballot Battles, Racist Mockingbirds and Dying DEI&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-788" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-788</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/steve-baker.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const steveBaker = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  steveBaker as default
};
