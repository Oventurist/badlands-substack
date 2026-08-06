import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brian Birdwell","description":"","frontmatter":{"title":"Brian Birdwell","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","immigration","state-legislature","republican"],"sources":["raw/badlands-news-brief-780.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brian-birdwell.md","filePath":"entities/brian-birdwell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brian-birdwell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brian-birdwell" tabindex="-1">Brian Birdwell <a class="header-anchor" href="#brian-birdwell" aria-label="Permalink to &quot;Brian Birdwell&quot;">​</a></h1><p>Brian Birdwell is a Republican member of the <a href="/entities/texas-senate">Texas Senate</a> representing Granbury.[1]</p><h2 id="senate-bill-11-2023" tabindex="-1">Senate Bill 11 (2023) <a class="header-anchor" href="#senate-bill-11-2023" aria-label="Permalink to &quot;Senate Bill 11 (2023)&quot;">​</a></h2><p>During the third special legislative session of 2023, Birdwell sponsored Senate Bill 11, which would create a new state crime for illegally entering Texas from Mexico and authorize state police to arrest violators.[1] Under the bill, a first-time offender could be convicted of a misdemeanor, while the penalty would rise to a felony for a person with a criminal record who had repeatedly entered the country illegally.[1] The Texas Senate gave initial approval to SB 11 on Thursday evening, 12 October 2023, by a vote of 19-12, with a final Senate vote required before the measure could move to the Texas House.[1]</p><p>The legislation was advanced after Governor <a href="/entities/greg-abbott">Greg Abbott</a> called the special session to seek action on school vouchers and immigration enforcement, following earlier failures by lawmakers to agree on an immigration enforcement bill.[1] Commentary from <a href="/entities/paul-fleuret">Paul Fleuret</a> characterized the measure as Texas fighting back against what he described as an invasion at the southern border without assistance from the Biden administration.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: US Carriers, FBI Warnings &amp; Election Wins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-780" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-780</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brian-birdwell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brianBirdwell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brianBirdwell as default
};
