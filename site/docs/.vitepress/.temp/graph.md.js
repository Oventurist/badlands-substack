import { useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"Knowledge Graph","description":"","frontmatter":{"title":"Knowledge Graph"},"headers":[],"relativePath":"graph.md","filePath":"graph.md","lastUpdated":null}');
const __default__ = { name: "graph.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GraphView = resolveComponent("GraphView");
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="knowledge-graph" tabindex="-1">Knowledge Graph <a class="header-anchor" href="#knowledge-graph" aria-label="Permalink to &quot;Knowledge Graph&quot;">​</a></h1><p>Every wiki page as a node; every <code>[[wikilink]]</code> between pages as an edge. Entities in blue, concepts in orange — node size reflects how many pages link to it.</p>`);
      _push(ssrRenderComponent(_component_GraphView, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("graph.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
