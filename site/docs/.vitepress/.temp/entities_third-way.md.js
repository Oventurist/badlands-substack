import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Third Way","description":"","frontmatter":{"title":"Third Way","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["democratic-party","think-tank","2024-election","third-party-politics"],"sources":["raw/badlands-news-brief-2a9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/third-way.md","filePath":"entities/third-way.md","lastUpdated":null}');
const _sfc_main = { name: "entities/third-way.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="third-way" tabindex="-1">Third Way <a class="header-anchor" href="#third-way" aria-label="Permalink to &quot;Third Way&quot;">​</a></h1><p>Third Way is a Democratic-aligned political organization in the United States. In the 2024 cycle it took a leading role in coordinating efforts to prevent third-party candidacies from drawing votes away from the Democratic ticket.[1]</p><h2 id="opposition-to-third-party-candidacies" tabindex="-1">Opposition to third-party candidacies <a class="header-anchor" href="#opposition-to-third-party-candidacies" aria-label="Permalink to &quot;Opposition to third-party candidacies&quot;">​</a></h2><p>Third Way co-founder Matt Bennett was quoted in September 2023 opposing the possibility that <a href="/entities/robert-f-kennedy-jr">Robert F. Kennedy Jr.</a> might run on the <a href="/entities/libertarian-party">Libertarian Party</a> line, saying it &quot;would be very bad.&quot;[1] Bennett&#39;s group was simultaneously helping coordinate the effort to stop No Labels, another organization seeking to field a third-party presidential ticket.[1]</p><p>The concern was sharpened by reporting that Kennedy — who had entered the race in April 2023 seeking the Democratic nomination — planned to announce an independent candidacy on October 9, 2023, after concluding that the <a href="/entities/democratic-national-committee">Democratic National Committee</a> was changing its rules to exclude him.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Congressional Kayfabe, Independent Dems &amp; Fire Alarms&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2a9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2a9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/third-way.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const thirdWay = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  thirdWay as default
};
