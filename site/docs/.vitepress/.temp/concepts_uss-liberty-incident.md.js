import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"USS Liberty Incident","description":"","frontmatter":{"title":"USS Liberty Incident","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["israel","us-navy",1967,"false-flag","middle-east"],"sources":["raw/badlands-news-brief-11d.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/uss-liberty-incident.md","filePath":"concepts/uss-liberty-incident.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/uss-liberty-incident.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="uss-liberty-incident" tabindex="-1">USS Liberty Incident <a class="header-anchor" href="#uss-liberty-incident" aria-label="Permalink to &quot;USS Liberty Incident&quot;">​</a></h1><p>The USS Liberty incident was the June 1967 attack in which the Israeli Defense Force struck and nearly sank a United States Navy ship floating off the coast of Israel and Gaza.[1] In the framing offered by Badlands commentator <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a>, the attack was carried out in order to start a war between the United States and Egypt.[1]</p><p>The incident&#39;s 58th anniversary fell on the same day in June 2025 that Israeli naval forces intercepted the Gaza-bound aid boat Madleen carrying <a href="/entities/greta-thunberg">Greta Thunberg</a>, a coincidence highlighted in Badlands commentary on the <a href="/concepts/madleen-flotilla-interception">Madleen flotilla interception</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fake MAGA Break-ups and Based Accelerationism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/uss-liberty-incident.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ussLibertyIncident = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ussLibertyIncident as default
};
