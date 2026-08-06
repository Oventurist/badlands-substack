import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Intervision","description":"","frontmatter":{"title":"Intervision","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["russia","culture","soft-power","traditional-values"],"sources":["raw/badlands-news-brief-4ee.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/intervision.md","filePath":"concepts/intervision.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/intervision.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="intervision" tabindex="-1">Intervision <a class="header-anchor" href="#intervision" aria-label="Permalink to &quot;Intervision&quot;">​</a></h1><p>Intervision is a song contest organized by Moscow and portrayed as an alternative to Eurovision, from which Russia has been excluded amid tensions with the European Union over the Ukraine conflict.[1]</p><h2 id="_2025-edition" tabindex="-1">2025 edition <a class="header-anchor" href="#_2025-edition" aria-label="Permalink to &quot;2025 edition&quot;">​</a></h2><p>Russian President <a href="/entities/vladimir-putin">Vladimir Putin</a> highlighted the contest at the <a href="/entities/shanghai-cooperation-organization">Shanghai Cooperation Organization</a> summit in Tianjin, noting that it would be held in Moscow on September 20, 2025, and that it was expected to feature performers from Latin America, Africa, and Asia.[1] Putin described the &quot;large-scale project&quot; as aimed at promoting universal values, arguing that &quot;traditional values are already fading into the background&quot; and that &quot;it is time to bring them back to the international agenda.&quot;[1]</p><p>At the same summit Putin invited delegations to the St. Petersburg International United Cultures Forum and the &quot;Russia – Country of Sports&quot; forum in Samara in November.[1] Badlands commentator GhostofBasedPatrickHenry contrasted Putin&#39;s promotion of national sovereignty and traditional values with what he characterized as the decadence of European elites.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Heightened Homohysteria, AI Scabs, &amp; A Dutch Diddler&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4ee" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4ee</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/intervision.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const intervision = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  intervision as default
};
