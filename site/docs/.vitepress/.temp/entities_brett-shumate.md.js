import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brett Shumate","description":"","frontmatter":{"title":"Brett Shumate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["department-of-justice","white-house-ballroom","litigation"],"sources":["raw/badlands-brief-9f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brett-shumate.md","filePath":"entities/brett-shumate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brett-shumate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brett-shumate" tabindex="-1">Brett Shumate <a class="header-anchor" href="#brett-shumate" aria-label="Permalink to &quot;Brett Shumate&quot;">​</a></h1><p>Brett Shumate is an Assistant Attorney General at the <a href="/entities/department-of-justice">United States Department of Justice</a>. He authored a sharply worded letter demanding that the <a href="/entities/national-trust-for-historic-preservation">National Trust for Historic Preservation</a> withdraw its lawsuit seeking to halt the privately funded <a href="/concepts/white-house-ballroom">White House ballroom project</a>.[1]</p><p>In the letter, Shumate said the lawsuit places &quot;the lives of the president, his family, and his staff at grave risk,&quot; called on the group to immediately dismiss the &quot;frivolous lawsuit,&quot; and cited heightened security concerns following the recent assassination attempt on <a href="/entities/donald-trump">President Trump</a>.[1] He argued that recent security incidents reinforce the administration&#39;s position that the ballroom is necessary to reduce risks associated with presidential travel to external venues.[1] The Justice Department warned that if the case were not withdrawn by Monday morning it would move to dissolve the injunction blocking construction and seek dismissal in court.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Rigged Maps, Russian Grain, &amp; Maduro&#39;s Billable Hours&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-9f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-9f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brett-shumate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brettShumate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brettShumate as default
};
