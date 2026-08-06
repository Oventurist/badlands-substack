import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Haredi Judaism","description":"","frontmatter":{"title":"Haredi Judaism","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","religion","conscription","idf"],"sources":["raw/badlands-news-brief-8bd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/haredi-judaism.md","filePath":"entities/haredi-judaism.md","lastUpdated":null}');
const _sfc_main = { name: "entities/haredi-judaism.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="haredi-judaism" tabindex="-1">Haredi Judaism <a class="header-anchor" href="#haredi-judaism" aria-label="Permalink to &quot;Haredi Judaism&quot;">​</a></h1><p>The Haredi — Orthodox and Hasidic Jews — constitute a religious community in Israel that has enjoyed an exemption from military conscription since the founding of the modern State of Israel.[1]</p><h2 id="draft-exemption-dispute" tabindex="-1">Draft exemption dispute <a class="header-anchor" href="#draft-exemption-dispute" aria-label="Permalink to &quot;Draft exemption dispute&quot;">​</a></h2><p>The Israeli Supreme Court ruled to nullify the Haredi draft exemption, creating a politically explosive enforcement question for whichever minister holds the defense portfolio. Badlands Media commentary noted that <a href="/entities/gideon-saar">Gideon Sa&#39;ar</a> would likely have been more willing than <a href="/entities/israel-katz">Israel Katz</a> to enforce the ruling, and that Sa&#39;ar would therefore have been the more favorable pick among <a href="/entities/israel-defense-forces">IDF</a> generals.[1]</p><p>By elevating Katz to the defense ministry in November 2024, <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a> installed a minister judged far less likely to compel Haredi service — despite IDF generals stating they were desperate for soldiers. Badlands commentary raised the possibility that this could strain relations between the political leadership and the general staff.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: A New Golden Age Begins ...?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8bd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8bd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/haredi-judaism.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const harediJudaism = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  harediJudaism as default
};
