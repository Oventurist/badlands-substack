import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Executive Order 14339","description":"","frontmatter":{"title":"Executive Order 14339","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["executive-order","national-guard","washington-dc","domestic-security"],"sources":["raw/badlands-brief-559.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/executive-order-14339.md","filePath":"concepts/executive-order-14339.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/executive-order-14339.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="executive-order-14339" tabindex="-1">Executive Order 14339 <a class="header-anchor" href="#executive-order-14339" aria-label="Permalink to &quot;Executive Order 14339&quot;">​</a></h1><p>Executive Order 14339 is a presidential directive cited as the legal basis for the creation of the <a href="/entities/260th-special-purpose-brigade">260th Special Purpose Brigade</a> within the <a href="/entities/district-of-columbia-national-guard">District of Columbia National Guard</a>.[1]</p><p>The order, together with a directive from the <a href="/entities/department-of-war">Department of War</a>, called for a trained and equipped National Guard unit to support public safety in the nation&#39;s capital and to integrate with federal and local security partners.[1] The resulting brigade, activated in March 2026, is the US Army&#39;s only formation dedicated to coordinating military support to civil authorities and protecting critical infrastructure in Washington, DC.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Narrative Warfare For Your Safety&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-559" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-559</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/executive-order-14339.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const executiveOrder14339 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  executiveOrder14339 as default
};
