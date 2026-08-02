import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Viktor Yanukovych","description":"","frontmatter":{"title":"Viktor Yanukovych","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["ukraine","2014-coup","eurasian-integration","politics"],"sources":["raw/a-re-alignment-of-world-systems.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/viktor-yanukovych.md","filePath":"entities/viktor-yanukovych.md","lastUpdated":null}');
const _sfc_main = { name: "entities/viktor-yanukovych.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="viktor-yanukovych" tabindex="-1">Viktor Yanukovych <a class="header-anchor" href="#viktor-yanukovych" aria-label="Permalink to &quot;Viktor Yanukovych&quot;">​</a></h1><p>Viktor Yanukovych is a Ukrainian politician who served as President of Ukraine from 2010 until his removal in February 2014. In the Badlands Media essay <a href="/concepts/a-re-alignment-of-world-systems">A Re-Alignment of World Systems</a>, his fall is used to illustrate the distinction <a href="/entities/matthew-ehret">Matthew Ehret</a> draws between &quot;good&quot; and &quot;bad&quot; plutocrats in the worldview he attributes to <a href="/entities/chrystia-freeland">Chrystia Freeland</a>.</p><h2 id="role-in-the-source" tabindex="-1">Role in the source <a class="header-anchor" href="#role-in-the-source" aria-label="Permalink to &quot;Role in the source&quot;">​</a></h2><p>The article states that &quot;Viktor Yanukovych was a good plutocrat until he decided to not sacrifice Ukraine on the altar of the collapsing <a href="/entities/european-union">European Union</a> and chose to throw Ukraine&#39;s destiny into the <a href="/entities/eurasian-economic-union">Eurasian Economic Union</a> in October 2013.&quot; That decision, in the essay&#39;s account, moved him from the acceptable category into the unacceptable one, alongside <a href="/entities/donald-trump">Donald Trump</a>.</p><p>The essay also refers to &quot;the 2014 coup in Ukraine&quot; as the point after which Freeland &quot;and her ilk have demonstrated their outdated thinking in everything they have set out to achieve.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-re-alignment-of-world-systems" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/viktor-yanukovych.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const viktorYanukovych = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  viktorYanukovych as default
};
