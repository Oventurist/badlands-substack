import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Romania","description":"","frontmatter":{"title":"Romania","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["romania","european-union","government-collapse","politics","europe"],"sources":["raw/badlands-brief-b62.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/romania.md","filePath":"entities/romania.md","lastUpdated":null}');
const _sfc_main = { name: "entities/romania.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="romania" tabindex="-1">Romania <a class="header-anchor" href="#romania" aria-label="Permalink to &quot;Romania&quot;">​</a></h1><p>Romania is a member state of the <a href="/entities/european-union">European Union</a> whose pro-EU minority government collapsed in May 2026 following a successful no-confidence vote.[1]</p><h2 id="may-2026-government-collapse" tabindex="-1">May 2026 government collapse <a class="header-anchor" href="#may-2026-government-collapse" aria-label="Permalink to &quot;May 2026 government collapse&quot;">​</a></h2><p>The minority government led by Prime Minister <a href="/entities/ilie-bolojan">Ilie Bolojan</a> fell after a no-confidence motion passed with 281 votes in favor, well above the 233 required.[1] The largest party, the <a href="/entities/social-democratic-party-romania">Social Democrats (PSD)</a>, allied with far-right opposition groups including the <a href="/entities/alliance-for-the-union-of-romanians">Alliance for the Union of Romanians (AUR)</a> to oust a government that had been formed roughly ten months earlier specifically to counter far-right gains.[1] Bolojan was to continue in a limited interim capacity until President <a href="/entities/nicusor-dan">Nicusor Dan</a> nominated a new prime minister and a new government won approval.[1]</p><h2 id="interpretation" tabindex="-1">Interpretation <a class="header-anchor" href="#interpretation" aria-label="Permalink to &quot;Interpretation&quot;">​</a></h2><p>Badlands contributor <a href="/entities/burning-bright">Burning Bright</a> framed the collapse as a consequence of austerity measures demanded by Brussels clashing with domestic political realities, noting that the national currency hit record lows as markets priced in the uncertainty of &quot;a State attempting to remember its own sovereignty.&quot;[1] The episode was presented as one of several cascading stress fractures across the European political structure occurring alongside <a href="/entities/donald-trump">Donald Trump</a>&#39;s external pressure on the continent.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Reckoning of Fake Elections, Fake Wars and Fake Allies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b62</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/romania.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const romania = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  romania as default
};
