import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jay Inslee","description":"","frontmatter":{"title":"Jay Inslee","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["washington","governors","democrats","elections"],"sources":["raw/badlands-news-brief-74c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jay-inslee.md","filePath":"entities/jay-inslee.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jay-inslee.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jay-inslee" tabindex="-1">Jay Inslee <a class="header-anchor" href="#jay-inslee" aria-label="Permalink to &quot;Jay Inslee&quot;">​</a></h1><p>Jay Inslee is an American Democratic politician who served as governor of Washington state, and in that role oversaw the state&#39;s security preparations for the 2024 general election.[1]</p><h2 id="_2024-election-security-activation" tabindex="-1">2024 election security activation <a class="header-anchor" href="#_2024-election-security-activation" aria-label="Permalink to &quot;2024 election security activation&quot;">​</a></h2><p>In a news release issued the Friday before Election Day 2024, Inslee announced that members of the Washington <a href="/entities/national-guard">National Guard</a> were being placed on standby as a precaution against election-related civil unrest, and addressed the recent <a href="/concepts/2024-pacific-northwest-ballot-box-fires">ballot drop box fires</a> in the state.[1] &quot;The southwest region of Washington state has already experienced specific instances of election-related unrest,&quot; he said.[1]</p><p>Inslee declined to disclose how many troops would be activated on Election Day, but said they would be available to support law enforcement from Monday through Thursday.[1] He added that the <a href="/entities/department-of-homeland-security">US Department of Homeland Security</a> had warned that threats to &quot;election infrastructure&quot; remained high, and framed the activation in terms of preparedness: &quot;Based upon general and specific information and concerns regarding the potential for violence or other unlawful activity related to the 2024 general election, I want to ensure we are fully prepared to respond to any potential additional civil unrest.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Day of Days Has Arrived ...&quot;, raw/badlands-news-brief-74c.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jay-inslee.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jayInslee = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jayInslee as default
};
