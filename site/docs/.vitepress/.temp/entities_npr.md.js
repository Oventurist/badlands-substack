import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NPR","description":"","frontmatter":{"title":"NPR","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","radio","public-media","layoffs"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/npr.md","filePath":"entities/npr.md","lastUpdated":null}');
const _sfc_main = { name: "entities/npr.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="npr" tabindex="-1">NPR <a class="header-anchor" href="#npr" aria-label="Permalink to &quot;NPR&quot;">​</a></h1><p>National Public Radio (NPR) is the American public radio network.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>NPR appears in <a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> within the extended quotation from <a href="/entities/taylor-lorenz">Taylor Lorenz</a>&#39;s TikTok &quot;State of the Media&quot; address, in which she states that &quot;radio is essentially dead, aside from NPR, which has been gutted.&quot; The reference is used by the article to illustrate the breadth of the contraction in <a href="/concepts/mainstream-media">centralized media</a> — reaching beyond digital natives and newspapers into broadcast radio, including the publicly supported sector.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/npr.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const npr = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  npr as default
};
