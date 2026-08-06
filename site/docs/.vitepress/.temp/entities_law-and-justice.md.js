import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Law and Justice","description":"","frontmatter":{"title":"Law and Justice","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["poland","political-party","conservatism","ukraine","elections"],"sources":["raw/badlands-news-brief-7ed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/law-and-justice.md","filePath":"entities/law-and-justice.md","lastUpdated":null}');
const _sfc_main = { name: "entities/law-and-justice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="law-and-justice" tabindex="-1">Law and Justice <a class="header-anchor" href="#law-and-justice" aria-label="Permalink to &quot;Law and Justice&quot;">​</a></h1><p>Law and Justice (Prawo i Sprawiedliwość, PiS) is a Polish national-conservative political party. As of January 2025 it sat in opposition and was contesting Poland&#39;s presidential election with candidate <a href="/entities/karol-nawrocki">Karol Nawrocki</a>.[1]</p><h2 id="accusations-against-zelensky" tabindex="-1">Accusations against Zelensky <a class="header-anchor" href="#accusations-against-zelensky" aria-label="Permalink to &quot;Accusations against Zelensky&quot;">​</a></h2><p>In January 2025, politicians from PiS accused Ukrainian President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a> of interfering in Poland&#39;s upcoming presidential election.[1] The claim followed remarks Zelensky made during a visit to Poland responding to Nawrocki&#39;s statement that Kyiv could have no future in the EU or NATO until Ukraine takes responsibility for the <a href="/concepts/volhynia-massacres">Volhynia massacres</a>.[1] Zelensky suggested that without EU or NATO membership and security guarantees for Ukraine, &quot;Pan Nawrocki should start training, because it may turn out that he will have to take up arms&quot; — comments that sparked outrage in Poland.[1] The episode was carried by Badlands Media as a bonus item under the framing that Zelensky stood accused of election interference in a NATO nation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Unlikely Ambassadors, The Ceasefire Accords, &amp; Predatory Cartoonist&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/law-and-justice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lawAndJustice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lawAndJustice as default
};
