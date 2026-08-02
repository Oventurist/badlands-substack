import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Badlands Wiki","description":"","frontmatter":{"title":"Badlands Wiki"},"headers":[],"relativePath":"index.md","filePath":"index.md","lastUpdated":null}');
const _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="badlands-wiki" tabindex="-1">Badlands Wiki <a class="header-anchor" href="#badlands-wiki" aria-label="Permalink to &quot;Badlands Wiki&quot;">​</a></h1><p>A community-compiled knowledge base covering the people, institutions, concepts, and narratives of the Badlands Media corpus.</p><div class="tip custom-block"><p class="custom-block-title">Explore the knowledge graph</p><p>Every page and the connections between them — <strong><a href="/graph">open the interactive graph</a></strong> to see how entities, concepts, and articles relate.</p></div><ul><li><strong>Entities</strong> (594): <a href="/entities/">browse all</a> — people, organizations, and institutions</li><li><strong>Concepts</strong> (204): <a href="/concepts/">browse all</a> — ideas and narratives</li></ul><p>Built automatically from the wiki. Search above to find any topic.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
