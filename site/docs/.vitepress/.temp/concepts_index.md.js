import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Concepts","description":"","frontmatter":{"title":"Concepts"},"headers":[],"relativePath":"concepts/index.md","filePath":"concepts/index.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_IndexBrowser = resolveComponent("IndexBrowser");
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="concepts" tabindex="-1">Concepts <a class="header-anchor" href="#concepts" aria-label="Permalink to &quot;Concepts&quot;">​</a></h1><p>Search, filter, and browse the concepts index.</p>`);
  _push(ssrRenderComponent(_component_IndexBrowser, { section: "concepts" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
