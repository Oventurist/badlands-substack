import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Illinois National Guard","description":"","frontmatter":{"title":"Illinois National Guard","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["national-guard","illinois","immigration","protests"],"sources":["raw/badlands-news-brief-060.md"],"confidence":"low"},"headers":[],"relativePath":"entities/illinois-national-guard.md","filePath":"entities/illinois-national-guard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/illinois-national-guard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="illinois-national-guard" tabindex="-1">Illinois National Guard <a class="header-anchor" href="#illinois-national-guard" aria-label="Permalink to &quot;Illinois National Guard&quot;">​</a></h1><p>The <strong>Illinois National Guard</strong> is the state militia force of Illinois, whose activity in October 2025 drew attention amid the federal protection deployment to the state.[1]</p><p>On October 7, 2025 — the same day that 200 <a href="/entities/texas-national-guard">Texas National Guard</a> troops arrived in Illinois to protect federal personnel and property amid anti-immigration protests — the Illinois National Guard was reported to have been ordered to conduct a &quot;training&quot; evolution.[1] Badlands contributor <a href="/entities/canncon">CannCon</a> treated the coincidence as significant, juxtaposing the Texas Guard&#39;s movement into the state with the Illinois Guard&#39;s sudden training order and concluding that &quot;shits about to get spicy.&quot;[1] The episode unfolded against rhetoric from Chicago mayor <a href="/entities/brandon-johnson">Brandon Johnson</a> invoking &quot;Civil War.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Quantum Tunneling, Natural Conflicts, &amp; Pirates for Gaza&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-060" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-060</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/illinois-national-guard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const illinoisNationalGuard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  illinoisNationalGuard as default
};
