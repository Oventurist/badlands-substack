import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Federal Bureau of Prisons","description":"","frontmatter":{"title":"Federal Bureau of Prisons","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","prisons","death-penalty","federal-agency"],"sources":["raw/badlands-brief-cd8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/federal-bureau-of-prisons.md","filePath":"entities/federal-bureau-of-prisons.md","lastUpdated":null}');
const _sfc_main = { name: "entities/federal-bureau-of-prisons.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="federal-bureau-of-prisons" tabindex="-1">Federal Bureau of Prisons <a class="header-anchor" href="#federal-bureau-of-prisons" aria-label="Permalink to &quot;Federal Bureau of Prisons&quot;">​</a></h1><p>The Federal Bureau of Prisons (BOP) is the agency of the U.S. <a href="/entities/justice-department">Justice Department</a> responsible for the custody of federal inmates and for carrying out federal executions.[1]</p><h2 id="role-in-the-2026-execution-protocol-expansion" tabindex="-1">Role in the 2026 execution protocol expansion <a class="header-anchor" href="#role-in-the-2026-execution-protocol-expansion" aria-label="Permalink to &quot;Role in the 2026 execution protocol expansion&quot;">​</a></h2><p>In April 2026 the Justice Department said it had directed the Bureau of Prisons to broaden its execution protocols to allow additional methods, including the firing squad, and to readopt the lethal injection protocol used during <a href="/entities/donald-trump">Donald Trump</a>&#39;s first administration.[1] Reuters reported the administration also intends to add electrocution and gas asphyxiation as alternative methods.[1] Per Fox News reporting quoted by Badlands, the department is further directing the BOP to examine expanding the federal death row and constructing additional execution facilities.[1]</p><p>The Associated Press reported that three inmates remain on federal death row following former President Joe Biden&#39;s commutation of 37 death sentences, a figure that frames the scale of the BOP&#39;s current capital caseload against the infrastructure buildout it has been asked to study.[1] See <a href="/concepts/federal-death-penalty-expansion-2026">Federal Death Penalty Expansion (2026)</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Shots Fired At Trump (Again)&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-cd8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-cd8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/federal-bureau-of-prisons.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const federalBureauOfPrisons = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  federalBureauOfPrisons as default
};
