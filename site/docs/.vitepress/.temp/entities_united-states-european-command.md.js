import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States European Command","description":"","frontmatter":{"title":"United States European Command","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","eucom","russia","ukraine"],"sources":["raw/badlands-brief-abf.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/united-states-european-command.md","filePath":"entities/united-states-european-command.md","lastUpdated":null}');
const _sfc_main = { name: "entities/united-states-european-command.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-european-command" tabindex="-1">United States European Command <a class="header-anchor" href="#united-states-european-command" aria-label="Permalink to &quot;United States European Command&quot;">​</a></h1><p>US European Command (EUCOM) is the US combatant command responsible for the European theater, commanded in 2026 by General <a href="/entities/alexus-grynkewich">Alexus Grynkewich</a>.[1]</p><h2 id="role-in-us–russia-dialogue" tabindex="-1">Role in US–Russia dialogue <a class="header-anchor" href="#role-in-us–russia-dialogue" aria-label="Permalink to &quot;Role in US–Russia dialogue&quot;">​</a></h2><p>Under agreements reached at the second trilateral US–Ukraine–Russia meeting in Abu Dhabi on February 4–5, 2026, the United States and <a href="/entities/russia">Russia</a> agreed to establish a military-to-military dialogue led by EUCOM&#39;s commander.[1] The communication channel had been suspended before the war in <a href="/entities/ukraine">Ukraine</a> began and was characterized as crucial to achieving and maintaining peace.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Long-Term Legal Remedies &amp; A Reboot of Russian Relations&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-abf" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-abf</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/united-states-european-command.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const unitedStatesEuropeanCommand = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  unitedStatesEuropeanCommand as default
};
