import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Midnight Mission","description":"","frontmatter":{"title":"Midnight Mission","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["homeless-services","los-angeles","skid-row","voter-registration"],"sources":["raw/badlands-brief-6b4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/midnight-mission.md","filePath":"entities/midnight-mission.md","lastUpdated":null}');
const _sfc_main = { name: "entities/midnight-mission.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="midnight-mission" tabindex="-1">Midnight Mission <a class="header-anchor" href="#midnight-mission" aria-label="Permalink to &quot;Midnight Mission&quot;">​</a></h1><p>The Midnight Mission is a homeless services organization located in the Skid Row district of downtown Los Angeles.[1]</p><h2 id="voter-registration-records" tabindex="-1">Voter registration records <a class="header-anchor" href="#voter-registration-records" aria-label="Permalink to &quot;Voter registration records&quot;">​</a></h2><p>Reporting cited during the <a href="/concepts/skid-row-voter-fraud-investigation">Skid Row voter fraud investigation</a> found that more than 7,600 registered voters were linked to addresses of homeless shelters and social service organizations in Los Angeles, including approximately 1,160 registrations connected to the Midnight Mission&#39;s address.[1] The concentration of registrations at shelter addresses was a central element of the reporting that accompanied the federal operation on Skid Row and the associated allegations of paid registration activity.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Deliberate Discombobulation Driving Transformational Change&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6b4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6b4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/midnight-mission.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const midnightMission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  midnightMission as default
};
