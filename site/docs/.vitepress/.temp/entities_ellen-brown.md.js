import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ellen Brown","description":"","frontmatter":{"title":"Ellen Brown","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","author","public-banking","advocacy"],"sources":["raw/a-seismic-shift.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/ellen-brown.md","filePath":"entities/ellen-brown.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ellen-brown.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ellen-brown" tabindex="-1">Ellen Brown <a class="header-anchor" href="#ellen-brown" aria-label="Permalink to &quot;Ellen Brown&quot;">​</a></h1><p>Ellen Brown is an American author and chair of the <a href="/entities/public-banking-institute">Public Banking Institute</a>. She appears in <a href="/concepts/a-seismic-shift">A Seismic Shift</a> via a quotation from In These Times, which cites her book <em>Banking on the People</em> for the argument that &quot;a public banking system … can fund the goods, services and infrastructure required to satisfy the needs of the people and the economy without unsustainable debt, taxation or environmental degradation.&quot;</p><p>The quotation is used by <a href="/entities/joe-lange">Joe Lange</a> to support the wider case made in the article that, rather than having public funds extracted from local communities to fuel Wall Street speculation, <a href="/concepts/public-banking">public banks</a> can ensure those funds are used to stabilise local economies and support local public priorities. Brown&#39;s position is presented as part of the mainstream advocacy literature surrounding the <a href="/entities/bank-of-north-dakota">Bank of North Dakota</a> and the movement to establish public banks in California, New York, New Mexico, New Hampshire, Massachusetts and other states.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-seismic-shift" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ellen-brown.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ellenBrown = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ellenBrown as default
};
