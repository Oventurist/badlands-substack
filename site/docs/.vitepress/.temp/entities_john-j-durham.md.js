import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John J. Durham","description":"","frontmatter":{"title":"John J. Durham","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","prosecutor","ms-13","task-force-vulcan"],"sources":["raw/badlands-news-brief-6b6.md"],"confidence":"low"},"headers":[],"relativePath":"entities/john-j-durham.md","filePath":"entities/john-j-durham.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-j-durham.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-j-durham" tabindex="-1">John J. Durham <a class="header-anchor" href="#john-j-durham" aria-label="Permalink to &quot;John J. Durham&quot;">​</a></h1><p>John J. Durham is a United States Department of Justice prosecutor who serves as director of <a href="/entities/joint-task-force-vulcan">Joint Task Force Vulcan</a>, the federal task force created in August 2019 to prosecute leadership of the transnational gang <a href="/entities/ms-13">MS-13</a>.[1]</p><p>Badlands contributor <a href="/entities/just-human">Just Human</a> noted that Durham is a son of Special Counsel <a href="/entities/john-durham">John H. Durham</a>, drawing a family connection between the MS-13 task force and the special counsel investigation that occupied much of the Truth Community&#39;s attention in the same period.[1]</p><p>Under his direction, Joint Task Force Vulcan was associated with the unsealing of a four-count indictment in Central Islip charging thirteen of MS-13&#39;s highest-ranking leaders with racketeering, material support to terrorists, and narco-terrorism conspiracies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Wheels of Justice Roll On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6b6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6b6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-j-durham.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnJDurham = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnJDurham as default
};
