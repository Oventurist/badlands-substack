import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"The Grayzone","description":"","frontmatter":{"title":"The Grayzone","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","independent-media","censorship","investigative-journalism"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/the-grayzone.md","filePath":"entities/the-grayzone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/the-grayzone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="the-grayzone" tabindex="-1">The Grayzone <a class="header-anchor" href="#the-grayzone" aria-label="Permalink to &quot;The Grayzone&quot;">​</a></h1><p>The Grayzone is an independent American news website known for adversarial reporting on U.S. foreign policy.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> cites The Grayzone as an example of the decentralized media whose subject matter the corporate press will not touch: &quot;you won&#39;t see the corporate hacks at <a href="/entities/cnn">CNN</a> reporting on things you might see on The Grayzone or <a href="/entities/consortium-news">Consortium News</a>.&quot;</p><p>The outlet is also offered as evidence that opposition to independent journalism extends into the financial system. The article notes, citing Al Jazeera, that GoFundMe froze donations to The Grayzone, an episode it presents alongside platform-level restrictions as part of the broader <a href="/concepts/censorship-industrial-complex">Censorship Industrial Complex</a> arrayed against <a href="/concepts/citizen-journalism">citizen journalists</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/the-grayzone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const theGrayzone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  theGrayzone as default
};
