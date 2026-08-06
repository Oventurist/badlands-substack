import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Green Zone","description":"","frontmatter":{"title":"Green Zone","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iraq","baghdad","security","corruption"],"sources":["raw/badlands-brief-dc6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/green-zone.md","filePath":"entities/green-zone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/green-zone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="green-zone" tabindex="-1">Green Zone <a class="header-anchor" href="#green-zone" aria-label="Permalink to &quot;Green Zone&quot;">​</a></h1><p>The Green Zone is the heavily fortified district of Baghdad that houses key Iraqi government institutions and foreign embassies.[1]</p><h2 id="june-2026-lockdown" tabindex="-1">June 2026 lockdown <a class="header-anchor" href="#june-2026-lockdown" aria-label="Permalink to &quot;June 2026 lockdown&quot;">​</a></h2><p>In late June 2026, Iraqi security forces locked down the Green Zone and conducted raids inside the area as part of a corruption investigation linked to former Deputy Oil Minister <a href="/entities/adnan-al-jumaili">Adnan al-Jumaili</a>.[1] Video footage referenced in reporting showed tanks and other heavily armed vehicles deployed during the operation.[1] A security report obtained by the Associated Press said seven people were arrested, including five members of parliament whose parliamentary immunity had been revoked; some detainees were linked to the bloc of former Prime Minister <a href="/entities/mohammed-shia-al-sudani">Mohammed Shia al-Sudani</a>.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> framed the sweep as connected to the <a href="/entities/us-department-of-the-treasury">U.S. Treasury</a> sanctions network of <a href="/entities/salim-ahmed-said">Salim Ahmed Said</a> and to the concurrent tanker strikes in the <a href="/concepts/strait-of-hormuz">Strait of Hormuz</a>, arguing that the arrests represented <a href="/entities/donald-trump">Trump</a> and the <a href="/concepts/sovereign-alliance">Sovereign Alliance</a> dismantling <a href="/concepts/deep-state">Deep State</a> structures in <a href="/entities/iraq">Iraq</a> that he speculated had been installed by Bush-era neoconservatives.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iraqi Purge and Iranian Conspiracy&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-dc6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-dc6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/green-zone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const greenZone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  greenZone as default
};
