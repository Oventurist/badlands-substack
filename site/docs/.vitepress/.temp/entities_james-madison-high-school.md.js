import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"James Madison High School","description":"","frontmatter":{"title":"James Madison High School","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-york-city","brooklyn","immigration","education"],"sources":["raw/badlands-news-brief-49d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/james-madison-high-school.md","filePath":"entities/james-madison-high-school.md","lastUpdated":null}');
const _sfc_main = { name: "entities/james-madison-high-school.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="james-madison-high-school" tabindex="-1">James Madison High School <a class="header-anchor" href="#james-madison-high-school" aria-label="Permalink to &quot;James Madison High School&quot;">​</a></h1><p>James Madison High School is a public high school in Brooklyn, New York City. In January 2024 it became a flashpoint in the <a href="/concepts/new-york-city-migrant-crisis">New York City migrant crisis</a> when its students were removed from classrooms and forced to go remote so the building could house migrants.[1]</p><h2 id="january-2024-migrant-sheltering" tabindex="-1">January 2024 migrant sheltering <a class="header-anchor" href="#january-2024-migrant-sheltering" aria-label="Permalink to &quot;January 2024 migrant sheltering&quot;">​</a></h2><p>Students were displaced to make room for nearly 2,000 migrants evacuated from a controversial tent shelter as a major storm closed in on the city.[1] The city ordered the move amid concerns that the massive migrant tent at Floyd Bennett Field would collapse under torrential rain and gusting winds, and instead packed the evacuees into the school&#39;s second-floor gymnasium, five miles away.[1]</p><p>The school&#39;s neighbors were not keen on the last-minute decision.[1] A local resident who identified himself only as Rob called it &quot;a litmus test,&quot; saying authorities were &quot;using a storm, a legitimate situation, where they are testing this out,&quot; and predicting the migrants would remain &quot;for the entire summer.&quot;[1] He added that &quot;there&#39;s 1,900 people getting thrown into my neighborhood, half a block from where I live and we don&#39;t know who they are.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shenanigans Shall Continue Until Morale Improves ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-49d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-49d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/james-madison-high-school.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jamesMadisonHighSchool = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jamesMadisonHighSchool as default
};
