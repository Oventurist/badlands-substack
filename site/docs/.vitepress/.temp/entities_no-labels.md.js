import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"No Labels","description":"","frontmatter":{"title":"No Labels","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["third-party-politics","2024-election","centrism"],"sources":["raw/badlands-news-brief-2a9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/no-labels.md","filePath":"entities/no-labels.md","lastUpdated":null}');
const _sfc_main = { name: "entities/no-labels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="no-labels" tabindex="-1">No Labels <a class="header-anchor" href="#no-labels" aria-label="Permalink to &quot;No Labels&quot;">​</a></h1><p>No Labels is a centrist American political organization that in the 2024 cycle sought to field a third-party presidential ticket.[1]</p><h2 id="_2024-ticket-effort-and-opposition" tabindex="-1">2024 ticket effort and opposition <a class="header-anchor" href="#_2024-ticket-effort-and-opposition" aria-label="Permalink to &quot;2024 ticket effort and opposition&quot;">​</a></h2><p>The group&#39;s plans drew organized resistance from Democratic-aligned actors, notably <a href="/entities/third-way">Third Way</a>, which helped coordinate efforts to stop the No Labels ticket on the theory that it would fracture the anti-Trump vote.[1] Third Way co-founder Matt Bennett, quoted in the same context, also warned against a possible <a href="/entities/libertarian-party">Libertarian Party</a> run by <a href="/entities/robert-f-kennedy-jr">Robert F. Kennedy Jr.</a>, saying such a candidacy &quot;would be very bad.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Congressional Kayfabe, Independent Dems &amp; Fire Alarms&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2a9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2a9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/no-labels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const noLabels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  noLabels as default
};
