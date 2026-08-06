import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Chell","description":"","frontmatter":{"title":"John Chell","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nypd","law-enforcement","new-york-city","counterterrorism"],"sources":["raw/badlands-news-brief-3b2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-chell.md","filePath":"entities/john-chell.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-chell.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-chell" tabindex="-1">John Chell <a class="header-anchor" href="#john-chell" aria-label="Permalink to &quot;John Chell&quot;">​</a></h1><p>John Chell was Chief of Patrol for the <a href="/entities/new-york-city-police-department">New York City Police Department</a>, appearing alongside Mayor <a href="/entities/eric-adams">Eric Adams</a> at an October 10, 2023 press conference on the department&#39;s response to the <a href="/concepts/october-7-attacks">Hamas attacks on Israel</a>.[1]</p><p>Asked what New Yorkers should look for in terms of a &quot;lone wolf attack,&quot; Chell reiterated that the department was moving resources to religious communities and institutions.[1] &quot;Saturday morning, the team is on a phone early morning coordinating our response, moving an incredible amount of resources to protect our Jewish community, all churches and religious institutions in the city,&quot; he said, adding that the NYPD had held multiple community calls with faith leaders from the Jewish and Muslim religions and that the outreach was &quot;very well received, getting everyone on the same page as to what we&#39;re doing.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Peacemakers, Fake Kennedys &amp; Fear Mongers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-chell.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnChell = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnChell as default
};
