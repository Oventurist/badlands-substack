import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Pate","description":"","frontmatter":{"title":"Paul Pate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["iowa","elections","republicans","secretaries-of-state"],"sources":["raw/badlands-news-brief-74c.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/paul-pate.md","filePath":"entities/paul-pate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-pate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-pate" tabindex="-1">Paul Pate <a class="header-anchor" href="#paul-pate" aria-label="Permalink to &quot;Paul Pate&quot;">​</a></h1><p>Paul Pate is a Republican politician serving as Secretary of State of Iowa, the state&#39;s chief election official.[1]</p><h2 id="_2024-noncitizen-voter-list" tabindex="-1">2024 noncitizen voter list <a class="header-anchor" href="#_2024-noncitizen-voter-list" aria-label="Permalink to &quot;2024 noncitizen voter list&quot;">​</a></h2><p>On October 22, 2024, after early voting had already begun, Pate instructed Iowa county auditors to follow a list drawn from Iowa Department of Transportation records identifying 2,176 registered voters who might not be U.S. citizens.[1] Pate said he was working to ensure the integrity of the election.[1]</p><p>The <a href="/entities/american-civil-liberties-union">ACLU</a> and a group of naturalized citizens sued him, arguing that the twelve-year-old list was based on outdated information and wrongly kept &quot;numerous naturalized U.S. citizens&quot; from voting with a regular ballot.[1] In the <a href="/concepts/iowa-noncitizen-voter-challenge-ruling">resulting ruling</a>, U.S. District Judge <a href="/entities/stephen-locher">Stephen Locher</a> declined to block the challenges, writing that whatever concerns the plaintiffs had about the nature and timing of &quot;Secretary Pate&#39;s letter,&quot; it would not be appropriate to grant relief that effectively forced local officials to let ineligible voters vote.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Day of Days Has Arrived ...&quot;, raw/badlands-news-brief-74c.md</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-pate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulPate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulPate as default
};
