import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Hickenlooper","description":"","frontmatter":{"title":"John Hickenlooper","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-senate","colorado","democratic-party","elections"],"sources":["raw/badlands-news-brief-683.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-hickenlooper.md","filePath":"entities/john-hickenlooper.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-hickenlooper.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-hickenlooper" tabindex="-1">John Hickenlooper <a class="header-anchor" href="#john-hickenlooper" aria-label="Permalink to &quot;John Hickenlooper&quot;">​</a></h1><p>John Hickenlooper is a Democratic United States Senator from Colorado.[1]</p><h2 id="comments-on-2024-election-uncertainty" tabindex="-1">Comments on 2024 election uncertainty <a class="header-anchor" href="#comments-on-2024-election-uncertainty" aria-label="Permalink to &quot;Comments on 2024 election uncertainty&quot;">​</a></h2><p>In late September 2024, as polling showed the presidential race between <a href="/entities/donald-trump">donald-trump</a> and <a href="/entities/kamala-harris">kamala-harris</a> extremely close in several battleground states, Hickenlooper was among lawmakers publicly bracing for a contested aftermath.[1] He said that &quot;a reasonable person has to be concerned with the rhetoric that&#39;s coming out of certain states and certainly out of the Trump campaign,&quot; arguing that &quot;once again they&#39;re setting the stage whereby any loss will be blamed on corruption at the ballot box, even when there&#39;s no possible support for that allegation.&quot;[1]</p><p>He added: &quot;I am concerned that there&#39;s going to be chaos. They&#39;re going to try to slow things down. If it looks like they&#39;re losing, the Trump campaign will try every avenue possible.&quot;[1] His remarks came amid Democratic worries that the certification process could be contested despite the Electoral Count Reform and Presidential Transition Improvement Act passed in 2022 to prevent a repeat of January 6, 2021.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Israel Invades, MAGA Sues &amp; Ports Close&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-683" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-683</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-hickenlooper.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnHickenlooper = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnHickenlooper as default
};
