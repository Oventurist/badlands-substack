import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sheri Davis","description":"","frontmatter":{"title":"Sheri Davis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["colorado","election-officials","douglas-county","litigation"],"sources":["raw/badlands-brief-169.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sheri-davis.md","filePath":"entities/sheri-davis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sheri-davis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sheri-davis" tabindex="-1">Sheri Davis <a class="header-anchor" href="#sheri-davis" aria-label="Permalink to &quot;Sheri Davis&quot;">​</a></h1><p>Sheri Davis is the Clerk and Recorder of Douglas County, <a href="/entities/colorado">Colorado</a>, and a co-plaintiff in the <a href="/entities/republican-national-committee">Republican National Committee</a>&#39;s June 2026 lawsuit against Secretary of State <a href="/entities/jena-griswold">Jena Griswold</a> over overseas voter registration.[1]</p><h2 id="criticism-from-badlands" tabindex="-1">Criticism from Badlands <a class="header-anchor" href="#criticism-from-badlands" aria-label="Permalink to &quot;Criticism from Badlands&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a>, a Douglas County resident, described Davis as her county clerk and characterized her as a &quot;fraud denier.&quot;[1] She recounted contacting the clerk&#39;s office about the Konnech scandal and being told that everything was fine because the vendor reported no Chinese servers in county elections — an answer she said missed the allegation entirely, since the claim concerned Chinese access rather than server location, and was supported by evidence.[1] On that basis she expressed skepticism about the overseas voting lawsuit despite supporting its nominal target.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Condemnation, Calibration, &amp; Constitutional Boxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-169" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-169</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sheri-davis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sheriDavis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sheriDavis as default
};
