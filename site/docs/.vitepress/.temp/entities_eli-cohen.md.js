import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Eli Cohen","description":"","frontmatter":{"title":"Eli Cohen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","likud","energy","west-bank"],"sources":["raw/badlands-brief-05f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/eli-cohen.md","filePath":"entities/eli-cohen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/eli-cohen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="eli-cohen" tabindex="-1">Eli Cohen <a class="header-anchor" href="#eli-cohen" aria-label="Permalink to &quot;Eli Cohen&quot;">​</a></h1><p>Eli Cohen is an Israeli politician serving as Energy Minister and a member of the Likud party.[1]</p><h2 id="west-bank-sovereignty-measures" tabindex="-1">West Bank sovereignty measures <a class="header-anchor" href="#west-bank-sovereignty-measures" aria-label="Permalink to &quot;West Bank sovereignty measures&quot;">​</a></h2><p>In February 2026, Cohen praised the Israeli Security Cabinet&#39;s approval of <a href="/concepts/west-bank-annexation">West Bank measures</a> as establishing &quot;de facto sovereignty&quot; that rules out a Palestinian state.[1] His characterization stood in direct contrast to President <a href="/entities/donald-trump">Donald Trump</a>&#39;s declaration, made ahead of Prime Minister <a href="/entities/benjamin-netanyahu">Benjamin Netanyahu</a>&#39;s Washington visit, that &quot;I am against annexation.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Fiesta of Fake Elections, Fake Files &amp; Fake Crises&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-05f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-05f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/eli-cohen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const eliCohen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  eliCohen as default
};
