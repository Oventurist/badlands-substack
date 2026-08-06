import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sudanese Armed Forces","description":"","frontmatter":{"title":"Sudanese Armed Forces","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sudan","military","conflict","saf"],"sources":["raw/badlands-news-brief-070.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sudanese-armed-forces.md","filePath":"entities/sudanese-armed-forces.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sudanese-armed-forces.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sudanese-armed-forces" tabindex="-1">Sudanese Armed Forces <a class="header-anchor" href="#sudanese-armed-forces" aria-label="Permalink to &quot;Sudanese Armed Forces&quot;">​</a></h1><p>The Sudanese Armed Forces (SAF) are the regular military of <a href="/entities/sudan">Sudan</a> and one of the two principal belligerents in the armed conflict that erupted in April 2023.[1]</p><h2 id="role-in-the-2023-conflict" tabindex="-1">Role in the 2023 conflict <a class="header-anchor" href="#role-in-the-2023-conflict" aria-label="Permalink to &quot;Role in the 2023 conflict&quot;">​</a></h2><p>Deadly violence between the SAF and the <a href="/entities/rapid-support-forces">Rapid Support Forces</a> (RSF) broke out in mid-April 2023 and continued for more than a week before reporting on stranded American civilians reached mainstream outlets.[1] The fighting was characterized as an expanding military conflict in which rival factions contested control of the embattled nation, with observers finding it exceedingly difficult to formulate a clear picture of the alignments on the ground.[1]</p><p>The intensity of the SAF–RSF fighting was the stated basis for the U.S. government&#39;s position that conditions were not conducive to a civilian evacuation, even as U.S. government personnel were withdrawn in a military operation and other nations evacuated their citizens.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sudan Spirals, Epstein Entraps &amp; Banks Bail&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-070" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-070</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sudanese-armed-forces.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sudaneseArmedForces = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sudaneseArmedForces as default
};
