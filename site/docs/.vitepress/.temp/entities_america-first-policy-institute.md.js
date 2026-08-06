import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"America First Policy Institute","description":"","frontmatter":{"title":"America First Policy Institute","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["think-tank","america-first","national-security"],"sources":["raw/badlands-brief-c7b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/america-first-policy-institute.md","filePath":"entities/america-first-policy-institute.md","lastUpdated":null}');
const _sfc_main = { name: "entities/america-first-policy-institute.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="america-first-policy-institute" tabindex="-1">America First Policy Institute <a class="header-anchor" href="#america-first-policy-institute" aria-label="Permalink to &quot;America First Policy Institute&quot;">​</a></h1><p>The America First Policy Institute (rendered in the Badlands Brief&#39;s quoted source as the &quot;American First Policy Institute&quot;) is a policy organization aligned with the <a href="/concepts/america-first-movement">America First movement</a> and staffed heavily by veterans of <a href="/entities/donald-trump">Donald Trump</a>&#39;s first administration.[1]</p><p>The institute appeared in the Brief&#39;s July 2026 coverage of the death of Sen. <a href="/entities/lindsey-graham">Lindsey Graham</a> through <a href="/entities/fred-fleitz">Fred Fleitz</a>, the former National Security Council chief of staff who serves as the institute&#39;s vice chair of American security and who described Graham&#39;s role as a constant informal adviser to Trump on national security policy.[1] The organization&#39;s prominence in that coverage illustrated how America First-aligned institutions were positioned to fill the advisory space left by the traditional Republican foreign policy establishment.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;TACO Tuesday Returns as the War of Stories Gets Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c7b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c7b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/america-first-policy-institute.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const americaFirstPolicyInstitute = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  americaFirstPolicyInstitute as default
};
