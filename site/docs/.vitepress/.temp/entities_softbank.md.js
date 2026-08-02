import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SoftBank","description":"","frontmatter":{"title":"SoftBank","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["corporate","finance","ai","tech"],"sources":["raw/a-new-hollywood.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/softbank.md","filePath":"entities/softbank.md","lastUpdated":null}');
const _sfc_main = { name: "entities/softbank.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="softbank" tabindex="-1">SoftBank <a class="header-anchor" href="#softbank" aria-label="Permalink to &quot;SoftBank&quot;">​</a></h1><p>SoftBank is the Japanese multinational investment holding company named in the Badlands Media essay <a href="/concepts/a-new-hollywood">A New Hollywood</a> as one of the partners in <a href="/concepts/project-stargate">Project Stargate</a>, the plan announced by <a href="/entities/donald-trump">Donald Trump</a> for the United States to invest $500 billion in <a href="/concepts/artificial-intelligence">AI</a> infrastructure. The other named partners are <a href="/entities/oracle">Oracle</a>, cofounded by <a href="/entities/larry-ellison">Larry Ellison</a>, and <a href="/entities/openai">OpenAI</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-new-hollywood" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/softbank.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const softbank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  softbank as default
};
