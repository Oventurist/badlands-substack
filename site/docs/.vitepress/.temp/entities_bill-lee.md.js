import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bill Lee","description":"","frontmatter":{"title":"Bill Lee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["tennessee","governor","republican","memphis","national-guard"],"sources":["raw/badlands-news-brief-1ed.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bill-lee.md","filePath":"entities/bill-lee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bill-lee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bill-lee" tabindex="-1">Bill Lee <a class="header-anchor" href="#bill-lee" aria-label="Permalink to &quot;Bill Lee&quot;">​</a></h1><p>Bill Lee is the Republican governor of Tennessee, who in September 2025 publicly backed President <a href="/entities/donald-trump">Donald Trump</a>&#39;s decision to deploy federal law enforcement and <a href="/entities/national-guard">National Guard</a> troops to <a href="/entities/memphis">Memphis</a>.[1]</p><h2 id="support-for-the-memphis-deployment" tabindex="-1">Support for the Memphis deployment <a class="header-anchor" href="#support-for-the-memphis-deployment" aria-label="Permalink to &quot;Support for the Memphis deployment&quot;">​</a></h2><p>Lee joined Trump at the White House on Monday, 15 September 2025 for the announcement of an executive order creating the <a href="/concepts/memphis-state-task-force">Memphis Safe Task Force</a> and sending Guard troops into the city.[1] At the signing ceremony he said, &quot;I have been in office for seven years. I&#39;m tired of crime holding the great city of Memphis back.&quot;[1]</p><p>Lee&#39;s endorsement placed him in direct conflict with the mayor of Memphis, who said publicly that he had learned of the decision only the previous morning, acknowledged that the governor and president had the authority to act, and stated that he had not requested the Guard and did not believe it would reduce crime.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Military in Memphis &amp; Patrols in Poland&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1ed" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1ed</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bill-lee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const billLee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  billLee as default
};
