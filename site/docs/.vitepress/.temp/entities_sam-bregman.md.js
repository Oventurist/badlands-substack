import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sam Bregman","description":"","frontmatter":{"title":"Sam Bregman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["new-mexico","prosecutors","second-amendment","gun-rights"],"sources":["raw/badlands-news-brief-006.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sam-bregman.md","filePath":"entities/sam-bregman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sam-bregman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sam-bregman" tabindex="-1">Sam Bregman <a class="header-anchor" href="#sam-bregman" aria-label="Permalink to &quot;Sam Bregman&quot;">​</a></h1><p>Sam Bregman is the District Attorney for Bernalillo County, New Mexico, which includes Albuquerque.[1]</p><p>In September 2023 Bregman publicly refused to enforce the emergency public health order issued by Governor <a href="/entities/michelle-lujan-grisham">Michelle Lujan Grisham</a> that suspended the carrying of firearms in Albuquerque and Bernalillo County.[1] &quot;As an officer of the court, I cannot and will not enforce something that is clearly unconstitutional,&quot; he said, adding that his office &quot;will continue to focus on criminals of any age that use guns in the commission of a crime.&quot;[1] Albuquerque Mayor Tim Keller and Police Chief Harold Medina took the same position.[1] His stance was highlighted approvingly by <a href="/entities/ashe-in-america">Ashe in America</a> of <a href="/entities/badlands-media">Badlands Media</a> as an example of a local official defending the Bill of Rights against claimed emergency powers.[1] See <a href="/concepts/new-mexico-public-health-order-suspending-concealed-carry">new-mexico-public-health-order-suspending-concealed-carry</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;NATO Warmongers &amp; Google Searches for a Way Out&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-006" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-006</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sam-bregman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const samBregman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  samBregman as default
};
