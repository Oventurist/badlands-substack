import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Oracle","description":"","frontmatter":{"title":"Oracle","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["tech","corporate","ai","trump-ally"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/oracle.md","filePath":"entities/oracle.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oracle.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oracle" tabindex="-1">Oracle <a class="header-anchor" href="#oracle" aria-label="Permalink to &quot;Oracle&quot;">​</a></h1><p>Oracle is an American technology company cofounded by <a href="/entities/larry-ellison">Larry Ellison</a>. In the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a>, Oracle appears in two capacities: as the source of the Ellison family fortune behind <a href="/entities/david-ellison">David Ellison</a>&#39;s <a href="/entities/skydance-media">Skydance Media</a> and its pending merger with <a href="/entities/paramount-global">Paramount Global</a>, and as a named partner in Project Stargate, the <a href="/entities/donald-trump">Trump</a> administration&#39;s announced $500 billion investment in U.S. <a href="/concepts/artificial-intelligence">AI</a> infrastructure alongside OpenAI and SoftBank.</p><p>The article also alludes to the general claim that &quot;everyone within the American tech space has some past connection to DARPA and/or the <a href="/entities/cia">CIA</a>,&quot; while arguing that such historical ties do not determine present loyalties.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oracle.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oracle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oracle as default
};
