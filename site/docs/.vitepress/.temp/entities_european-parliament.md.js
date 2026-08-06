import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"European Parliament","description":"","frontmatter":{"title":"European Parliament","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["european-union","trade","greenland","institutions"],"sources":["raw/badlands-brief-a20.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/european-parliament.md","filePath":"entities/european-parliament.md","lastUpdated":null}');
const _sfc_main = { name: "entities/european-parliament.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="european-parliament" tabindex="-1">European Parliament <a class="header-anchor" href="#european-parliament" aria-label="Permalink to &quot;European Parliament&quot;">​</a></h1><p>The European Parliament is the directly elected legislative body of the <a href="/entities/european-union">European Union</a>, with committees that hold approval authority over the bloc&#39;s international trade agreements.[1]</p><h2 id="freeze-of-the-us-trade-deal-january-2026" tabindex="-1">Freeze of the US trade deal (January 2026) <a class="header-anchor" href="#freeze-of-the-us-trade-deal-january-2026" aria-label="Permalink to &quot;Freeze of the US trade deal (January 2026)&quot;">​</a></h2><p>In response to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s January 2026 Davos remarks on <a href="/entities/greenland">Greenland</a> — which closed with the warning &quot;you can say no, and we will remember&quot; — the European Parliament&#39;s trade committee froze approval of a United States trade deal indefinitely, citing &quot;coercion&quot; and &quot;territorial integrity.&quot;[1] The freeze formed part of a broader European reaction in which Commission President <a href="/entities/ursula-von-der-leyen">Ursula von der Leyen</a> said the bloc was &quot;prepared to act&quot; and French President <a href="/entities/emmanuel-macron">Emmanuel Macron</a> floated the <a href="/concepts/anti-coercion-instrument">Anti-Coercion Instrument</a> against the United States for the first time.[1]</p><p>Badlands writer <a href="/entities/burning-bright">Burning Bright</a> characterized these moves as posture rather than leverage, noting that markets which had panicked earlier in the week &quot;shrugged in response to the response,&quot; and citing Slovak Prime Minister <a href="/entities/robert-fico">Robert Fico</a>&#39;s judgment that the EU is &quot;not taken completely seriously&quot; by world leaders.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Prosecutions for Democracy &amp; Double-Hatted Peace Panelists&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a20" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a20</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/european-parliament.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const europeanParliament = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  europeanParliament as default
};
