import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pritzker Family","description":"","frontmatter":{"title":"Pritzker Family","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["donors","democrats","obama","elite-networks"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/pritzker-family.md","filePath":"entities/pritzker-family.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pritzker-family.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pritzker-family" tabindex="-1">Pritzker Family <a class="header-anchor" href="#pritzker-family" aria-label="Permalink to &quot;Pritzker Family&quot;">​</a></h1><p>The Pritzker family is a wealthy American dynasty described in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> as &quot;the money behind Obama world.&quot;</p><p>The family is named in the article&#39;s inventory of establishment forces backing <a href="/entities/hillary-clinton">hillary-clinton</a> in 2016 — a list that also includes the corporations, the billionaire donor class, the media, <a href="/entities/george-soros">george-soros</a>, and figures of high society such as Steven Spielberg and Laurene Powell Jobs. The article argues that despite this backing, and the general expectation that Clinton would continue what <a href="/entities/barack-obama">barack-obama</a> had started, she lost to <a href="/entities/donald-trump">donald-trump</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pritzker-family.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pritzkerFamily = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pritzkerFamily as default
};
