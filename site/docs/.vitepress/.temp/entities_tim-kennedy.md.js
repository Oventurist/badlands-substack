import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tim Kennedy","description":"","frontmatter":{"title":"Tim Kennedy","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["special-forces","veteran","hurricane-helene","volunteer-rescue"],"sources":["raw/badlands-news-brief-41f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/tim-kennedy.md","filePath":"entities/tim-kennedy.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tim-kennedy.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tim-kennedy" tabindex="-1">Tim Kennedy <a class="header-anchor" href="#tim-kennedy" aria-label="Permalink to &quot;Tim Kennedy&quot;">​</a></h1><p><strong>Tim Kennedy</strong> is a veteran of the U.S. Army&#39;s 7th Special Forces Group who publicized his own account of government obstruction of volunteer rescue efforts in the aftermath of <a href="/concepts/hurricane-helene">Hurricane Helene</a> in 2024.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cited Kennedy&#39;s report alongside that of South Carolina pilot <a href="/entities/jordan-seidhom">Jordan Seidhom</a>, writing that stories of this kind were &quot;being reported all over social media&quot; and reflected subversive actors within government at all levels working to prevent private citizens from risking their lives to save others.[1] The pairing of a former narcotics-unit commander and a Special Forces veteran was used to argue that the obstruction was not directed at unqualified amateurs but at capable operators filling a gap the federal response had left open.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;FEMA&#39;s Broke. Ukraine is Collapsing. The EU is Doomed.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-41f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-41f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tim-kennedy.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timKennedy = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timKennedy as default
};
