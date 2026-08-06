import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ted Peters","description":"","frontmatter":{"title":"Ted Peters","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["theology","commentary","patheos","elections"],"sources":["raw/badlands-brief-e9a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/ted-peters.md","filePath":"entities/ted-peters.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ted-peters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ted-peters" tabindex="-1">Ted Peters <a class="header-anchor" href="#ted-peters" aria-label="Permalink to &quot;Ted Peters&quot;">​</a></h1><p><strong>Ted Peters</strong> is a pastor and emeritus professor of theology who publishes commentary on the Patheos religion website.[1]</p><h2 id="election-day-2026-blog-post" tabindex="-1">Election Day 2026 blog post <a class="header-anchor" href="#election-day-2026-blog-post" aria-label="Permalink to &quot;Election Day 2026 blog post&quot;">​</a></h2><p>On February 13, 2026, Peters published a Patheos blog post discussing predictions and recommendations associated with Democratic attorney <a href="/entities/marc-elias">Marc Elias</a> for Election Day 2026, framing them in religious and political terms.[1] The <a href="/concepts/badlands-brief">Badlands Brief</a> noted explicitly that the piece constituted opinion content rather than reporting, and treated it as one data point in a broader pattern of Democratic-aligned commentary anticipating conflict around the <a href="/concepts/2026-midterm-elections">2026 midterm elections</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bessent&#39;s Bounty Hunters and Olympic Phallacies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e9a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e9a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ted-peters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tedPeters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tedPeters as default
};
