import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Rapid Response Network","description":"","frontmatter":{"title":"Rapid Response Network","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["immigration","activism","ice","california"],"sources":["raw/badlands-news-brief-52f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/rapid-response-network.md","filePath":"entities/rapid-response-network.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rapid-response-network.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rapid-response-network" tabindex="-1">Rapid Response Network <a class="header-anchor" href="#rapid-response-network" aria-label="Permalink to &quot;Rapid Response Network&quot;">​</a></h1><p>The Rapid Response Network is an organization opposing deportation efforts that posts updates on social media tracking the activity of immigration enforcement officers.[1]</p><p>In January 2025 its posts were cited on air by <a href="/entities/kcbs-740-am">KCBS 740 AM</a> host <a href="/entities/bret-burkhart">Bret Burkhart</a>, who used them to describe the unmarked vehicles and specific locations of undercover <a href="/entities/immigration-and-customs-enforcement">ICE</a> agents operating in San Jose, California.[1] Reporting on the episode noted that the broadcast might have endangered the agents&#39; safety by exposing their covert operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: North American Trade Troubles &amp; Unipartisan Panic&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-52f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-52f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rapid-response-network.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rapidResponseNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rapidResponseNetwork as default
};
