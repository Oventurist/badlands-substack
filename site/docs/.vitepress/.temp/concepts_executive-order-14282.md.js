import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Executive Order 14282","description":"","frontmatter":{"title":"Executive Order 14282","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["executive-order","higher-education","foreign-influence","transparency"],"sources":["raw/badlands-brief-fbb.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/executive-order-14282.md","filePath":"concepts/executive-order-14282.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/executive-order-14282.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="executive-order-14282" tabindex="-1">Executive Order 14282 <a class="header-anchor" href="#executive-order-14282" aria-label="Permalink to &quot;Executive Order 14282&quot;">​</a></h1><p>Executive Order 14282 is an order issued by President <a href="/entities/donald-trump">Donald Trump</a> concerning transparency regarding foreign influence in American higher education.[1]</p><p>The order was cited in February 2026 as the basis for a new interagency agreement between the <a href="/entities/state-department">State Department</a> and the <a href="/entities/department-of-education">Department of Education</a> to strengthen enforcement of foreign funding disclosure requirements at U.S. colleges and universities under <a href="/concepts/section-117-higher-education-act">Section 117 of the Higher Education Act</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Unity, Patricide, &amp; Political Violence&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fbb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fbb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/executive-order-14282.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const executiveOrder14282 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  executiveOrder14282 as default
};
