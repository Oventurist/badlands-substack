import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Carter Page","description":"","frontmatter":{"title":"Carter Page","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["carter-page","fisa","crossfire-hurricane","fbi","surveillance"],"sources":["raw/badlands-brief-6a1.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/carter-page.md","filePath":"entities/carter-page.md","lastUpdated":null}');
const _sfc_main = { name: "entities/carter-page.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="carter-page" tabindex="-1">Carter Page <a class="header-anchor" href="#carter-page" aria-label="Permalink to &quot;Carter Page&quot;">​</a></h1><p>Carter Page is a former <a href="/entities/donald-trump">Trump</a> campaign adviser who became the subject of FISA surveillance during the <a href="/concepts/crossfire-hurricane">Crossfire Hurricane</a> investigation and subsequently sued the <a href="/entities/fbi">FBI</a> over that surveillance.[1]</p><h2 id="supreme-court-denial-june-2026" tabindex="-1">Supreme Court denial, June 2026 <a class="header-anchor" href="#supreme-court-denial-june-2026" aria-label="Permalink to &quot;Supreme Court denial, June 2026&quot;">​</a></h2><p>In June 2026 the <a href="/entities/supreme-court-of-the-united-states">US Supreme Court</a> declined to revive Page&#39;s lawsuit against the FBI.[1] Page had sought damages stemming from the surveillance conducted during Crossfire Hurricane, arguing that the government relied on flawed information in obtaining its FISA warrants.[1] The Court&#39;s refusal left the lower-court rulings against Page in place.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> grouped the denial with contemporaneous <a href="/entities/department-of-justice">Department of Justice</a> developments as further evidence of <a href="/concepts/weaponization-of-government">weaponized government</a>, noting that Page was denied a chance to argue again that the government had been turned against him during <a href="/entities/james-comey">James Comey</a>&#39;s tenure.[1] The commentary observed that the ruling brought FISA abuse back into public discussion at a moment when <a href="/entities/congress">Congress</a> was struggling to pass a FISA extension.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The G7 Laments the G2&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6a1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6a1</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/carter-page.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const carterPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  carterPage as default
};
