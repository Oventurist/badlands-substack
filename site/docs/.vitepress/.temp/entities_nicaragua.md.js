import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nicaragua","description":"","frontmatter":{"title":"Nicaragua","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["latin-america","regime-change","us-foreign-policy","sanctions"],"sources":["raw/badlands-brief-e87.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nicaragua.md","filePath":"entities/nicaragua.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nicaragua.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nicaragua" tabindex="-1">Nicaragua <a class="header-anchor" href="#nicaragua" aria-label="Permalink to &quot;Nicaragua&quot;">​</a></h1><p>Nicaragua is a Central American state named in January 2026 as a prospective target of United States pressure following the US-led <a href="/concepts/operation-absolute-resolve">Operation Absolute Resolve</a> in Venezuela.[1]</p><h2 id="named-as-a-target-january-2026" tabindex="-1">Named as a target (January 2026) <a class="header-anchor" href="#named-as-a-target-january-2026" aria-label="Permalink to &quot;Named as a target (January 2026)&quot;">​</a></h2><p>Republican Senator <a href="/entities/rick-scott">Rick Scott</a> said in a public interview that, following recent US actions in Venezuela, the United States would next &quot;fix&quot; <a href="/entities/cuba">Cuba</a> and Nicaragua and would seek political change in <a href="/entities/colombia">Colombia</a>.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> cited the remark as evidence that neoconservatives had &quot;taken the bait&quot; laid by President <a href="/entities/donald-trump">Donald Trump</a>, writing that the US government was arbitrarily deciding that Latin American governments were illegitimate for reasons that were not entirely clear and describing the rhetoric as &quot;the essence of tyranny.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Poetic Agitprop, Cold War Reruns, &amp; Kokomo From the Ropes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e87" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e87</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nicaragua.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nicaragua = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nicaragua as default
};
