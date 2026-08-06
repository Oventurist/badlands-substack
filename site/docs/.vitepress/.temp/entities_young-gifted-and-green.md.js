import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Young, Gifted & Green","description":"","frontmatter":{"title":"Young, Gifted & Green","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nonprofit","epa","green-energy","grants","environmental-justice"],"sources":["raw/badlands-brief-70c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/young-gifted-and-green.md","filePath":"entities/young-gifted-and-green.md","lastUpdated":null}');
const _sfc_main = { name: "entities/young-gifted-and-green.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="young-gifted-green" tabindex="-1">Young, Gifted &amp; Green <a class="header-anchor" href="#young-gifted-green" aria-label="Permalink to &quot;Young, Gifted &amp; Green&quot;">​</a></h1><p>Young, Gifted &amp; Green is a nonprofit organization that received a $20 million federal environmental grant during the Biden administration&#39;s 2024 distribution of green energy funds.[1]</p><h2 id="epa-criminal-referrals" tabindex="-1">EPA criminal referrals <a class="header-anchor" href="#epa-criminal-referrals" aria-label="Permalink to &quot;EPA criminal referrals&quot;">​</a></h2><p>The award was cited in criminal referrals made in 2026 by <a href="/entities/environmental-protection-agency">EPA</a> Administrator <a href="/entities/lee-zeldin">Lee Zeldin</a> to the EPA inspector general and the <a href="/entities/department-of-justice">Department of Justice</a>.[1] According to the referrals, the organization&#39;s chief executive applied for the grant while simultaneously serving on the White House Environmental Justice Advisory Council, a body advising the administration on the very grant priorities at issue.[1]</p><p>The case was presented alongside the <a href="/concepts/greenhouse-gas-reduction-fund">Greenhouse Gas Reduction Fund</a> disbursements and the $2 billion <a href="/entities/power-forward-communities">Power Forward Communities</a> award as evidence of what Zeldin described as self-dealing within a rushed 2024 grant cycle.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Taps Surprising New DNI While Media Freaks Out About Everything&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-70c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-70c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/young-gifted-and-green.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const youngGiftedAndGreen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  youngGiftedAndGreen as default
};
