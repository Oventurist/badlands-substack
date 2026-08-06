import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tupac Shakur","description":"","frontmatter":{"title":"Tupac Shakur","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["music","hip-hop","unsolved-killings","nevada",1996],"sources":["raw/badlands-news-brief-745.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tupac-shakur.md","filePath":"entities/tupac-shakur.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tupac-shakur.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tupac-shakur" tabindex="-1">Tupac Shakur <a class="header-anchor" href="#tupac-shakur" aria-label="Permalink to &quot;Tupac Shakur&quot;">​</a></h1><p>Tupac Shakur was an American rapper who died in 1996. His killing remained unprosecuted for decades before charges were brought in Nevada against Duane &quot;Keffe D&quot; Davis.[1]</p><h2 id="prosecution-of-duane-davis" tabindex="-1">Prosecution of Duane Davis <a class="header-anchor" href="#prosecution-of-duane-davis" aria-label="Permalink to &quot;Prosecution of Duane Davis&quot;">​</a></h2><p>The murder trial of <a href="/entities/duane-davis">Duane Davis</a>, the suspect charged in Shakur&#39;s 1996 death, was postponed in February 2025 by Clark County District Court Judge Carli Kierny, who cited recent defense developments and the need to ensure a fair trial.[1] Originally set for March 2025, the trial was rescheduled to February 9, 2026, with a status hearing ordered for the intervening summer at which both prosecution and defense teams were required to appear.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Teases Saudi Trillions; Biden Bros Embezzled Billions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-745" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-745</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tupac-shakur.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tupacShakur = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tupacShakur as default
};
