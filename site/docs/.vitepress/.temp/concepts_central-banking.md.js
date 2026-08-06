import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Central Banking","description":"","frontmatter":{"title":"Central Banking","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["central-banking","bitcoin","badlands-media","finance"],"sources":["raw/badlands-media-weekly-show-schedule-36d.md"],"confidence":"high"},"headers":[],"relativePath":"concepts/central-banking.md","filePath":"concepts/central-banking.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/central-banking.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>Within <a href="/entities/badlands-media">badlands-media</a>, central banking is portrayed critically as a corrupt system contrasted with decentralized alternatives such as cryptocurrency.[1] The network&#39;s Rugpull Radio show (Thursday, 10:30pm ET), hosted by GMoney and Patriots in Progress, educates viewers on &quot;both the benefits and dangers of Bitcoin/Blockchain technology and the cryptocurrency space,&quot; then &quot;shine[s] a light on the corrupt Central Banking system.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Weekly Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/central-banking.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const centralBanking = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  centralBanking as default
};
