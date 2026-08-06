import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"New Journalism","description":"","frontmatter":{"title":"New Journalism","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["media","journalism","literature","propaganda"],"sources":["raw/badlands-brief-740.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/new-journalism.md","filePath":"concepts/new-journalism.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/new-journalism.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="new-journalism" tabindex="-1">New Journalism <a class="header-anchor" href="#new-journalism" aria-label="Permalink to &quot;New Journalism&quot;">​</a></h1><p>New Journalism is an American literary movement of the 1960s and 1970s that pushed the boundaries of traditional journalism and nonfiction writing, combining journalistic research with the techniques of fiction writing in reporting on real-life events.[1] Writers commonly credited with beginning the movement include Tom Wolfe, Truman Capote, Hunter S. Thompson and Gay Talese.[1]</p><h2 id="invoked-in-the-atlantic-measles-controversy" tabindex="-1">Invoked in the Atlantic measles controversy <a class="header-anchor" href="#invoked-in-the-atlantic-measles-controversy" aria-label="Permalink to &quot;Invoked in the Atlantic measles controversy&quot;">​</a></h2><p>The tradition was invoked in February 2026 as a defense of <a href="/entities/elizabeth-bruenig">Elizabeth Bruenig</a>&#39;s <a href="/entities/the-atlantic">Atlantic</a> essay narrating the death of a fictional unvaccinated child from measles, which its defenders characterized as &quot;creative nonfiction&quot; built on heavily researched composite characters rather than fiction.[1]</p><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> rejected that defense, arguing that abandoning &quot;objective&quot; reporting to tell better stories in an effort to drive social change is a recognizable pattern, and that &quot;inventing dead, unvaxxed children to drive social change is not journalism, new or old. It&#39;s emotionally manipulative propaganda.&quot;[1] In this reading, the New Journalism label supplies retroactive respectability to what is functionally <a href="/concepts/narrative-warfare">narrative warfare</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Aliens. A Fake Kid Dies From Fake Measles. And the Princely Prosecution That Was Promised.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-740" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-740</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/new-journalism.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const newJournalism = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  newJournalism as default
};
