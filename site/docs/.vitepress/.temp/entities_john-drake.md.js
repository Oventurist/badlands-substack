import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Drake","description":"","frontmatter":{"title":"John Drake","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","nashville","tennessee",2023],"sources":["raw/badlands-news-brief-6e3.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-drake.md","filePath":"entities/john-drake.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-drake.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-drake" tabindex="-1">John Drake <a class="header-anchor" href="#john-drake" aria-label="Permalink to &quot;John Drake&quot;">​</a></h1><p><strong>John Drake</strong> is the Chief of the <a href="/entities/metro-nashville-police-department">Metro Nashville Police Department</a>, the agency that investigated the March 27, 2023 mass shooting at a Christian school in Nashville, Tennessee.[1]</p><p>At a press conference held shortly after the attack, Drake disclosed that the shooter, <a href="/entities/audrey-hale">Audrey Hale</a>, had left behind writings that police characterized as a manifesto: &quot;We have a manifesto,&quot; he said. &quot;We have some writings that we&#39;re going over that pertain to this date, the actual incident. We have a map drawn out of how all this was gonna take place.&quot;[1] Police also recovered maps annotating security camera locations, doorways and other details of the building.[1]</p><p>On the question of motive, Drake said there was &quot;right now a theory that we may be able to talk about later, but it&#39;s not confirmed,&quot; while appearing to hint that the shooter&#39;s transgender identity factored into the motive.[1] Department representatives told reporters that there was &quot;some theory&quot; that Hale&#39;s gender identity related to the choice of target, and confirmed that the attack was targeted.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: PsyActs, Leakers &amp; Color Revolutions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6e3" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6e3</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-drake.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnDrake = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnDrake as default
};
