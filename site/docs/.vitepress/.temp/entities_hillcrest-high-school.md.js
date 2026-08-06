import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hillcrest High School","description":"","frontmatter":{"title":"Hillcrest High School","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","new-york","israel-palestine","protests"],"sources":["raw/badlands-news-brief-3df.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/hillcrest-high-school.md","filePath":"entities/hillcrest-high-school.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hillcrest-high-school.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hillcrest-high-school" tabindex="-1">Hillcrest High School <a class="header-anchor" href="#hillcrest-high-school" aria-label="Permalink to &quot;Hillcrest High School&quot;">​</a></h1><p>Hillcrest High School is a public high school in Jamaica, Queens, New York City, which became the site of a violent student protest in November 2023 targeting a teacher over her support for Israel.[1]</p><h2 id="november-2023-riot" tabindex="-1">November 2023 riot <a class="header-anchor" href="#november-2023-riot" aria-label="Permalink to &quot;November 2023 riot&quot;">​</a></h2><p>Hundreds of students, described in reporting as &quot;radicalized,&quot; rampaged through the school&#39;s halls for nearly two hours after discovering that a teacher had attended a pro-Israel rally, forcing the teacher to hide in a locked office while a teen mob tried to push its way into her classroom.[1] The disturbance began shortly after 11 a.m. on a Monday in what students called a pre-planned protest over the teacher&#39;s Facebook profile photograph, which showed her at a pro-Israel rally in Queens on October 9 holding a poster reading &quot;I stand with Israel.&quot;[1]</p><p>One senior told the <a href="/entities/new-york-post">New York Post</a> that &quot;the teacher was seen holding a sign of Israel, like supporting it,&quot; and that &quot;a bunch of kids decided to make a group chat, expose her, talk about it, and then talk about starting a riot.&quot;[1] Hundreds of students flooded the hallways chanting, jumping and shouting while waving Palestinian flags and banners.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Media Spin Cycle Continues ... As We Defect&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3df" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3df</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hillcrest-high-school.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hillcrestHighSchool = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hillcrestHighSchool as default
};
