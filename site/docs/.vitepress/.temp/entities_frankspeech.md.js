import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"FrankSpeech","description":"","frontmatter":{"title":"FrankSpeech","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","mike-lindell","defamation","broadcasting"],"sources":["raw/badlands-news-brief-11d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/frankspeech.md","filePath":"entities/frankspeech.md","lastUpdated":null}');
const _sfc_main = { name: "entities/frankspeech.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frankspeech" tabindex="-1">FrankSpeech <a class="header-anchor" href="#frankspeech" aria-label="Permalink to &quot;FrankSpeech&quot;">​</a></h1><p>FrankSpeech is the media and broadcasting venture founded by <a href="/entities/mike-lindell">Mike Lindell</a>.[1] Along with Lindell personally and <a href="/entities/mypillow">MyPillow</a>, FrankSpeech is a named defendant in the defamation trial brought by former Dominion Voting Systems executive <a href="/entities/eric-coomer">Eric Coomer</a> in the U.S. District Court for the District of Colorado, which entered its second week in June 2025.[1] Brannon Howse, a broadcaster formerly employed by Lindell, was among the witnesses scheduled to testify.[1] See <a href="/concepts/coomer-v-lindell">Coomer v. Lindell</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fake MAGA Break-ups and Based Accelerationism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/frankspeech.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const frankspeech = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  frankspeech as default
};
