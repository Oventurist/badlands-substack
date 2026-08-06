import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Good Friday Agreement","description":"","frontmatter":{"title":"Good Friday Agreement","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["northern-ireland","peace-process","diplomacy"],"sources":["raw/badlands-news-brief-08c.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/good-friday-agreement.md","filePath":"concepts/good-friday-agreement.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/good-friday-agreement.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="good-friday-agreement" tabindex="-1">Good Friday Agreement <a class="header-anchor" href="#good-friday-agreement" aria-label="Permalink to &quot;Good Friday Agreement&quot;">​</a></h1><p>The Good Friday Agreement is the 1998 accord that established the political settlement underpinning peace in Northern Ireland.[1]</p><p>In April 2023 US President <a href="/entities/joe-biden">Joe Biden</a> traveled to Northern Ireland to mark a quarter-century since the agreement, beginning with events in Belfast.[1] The visit was overshadowed by a security incident in which a document outlining police deployments for the trip was found on a street by a member of the public, prompting an investigation by the <a href="/entities/police-service-of-northern-ireland">Police Service of Northern Ireland</a>.[1]</p><p>Badlands Media&#39;s coverage used the anniversary trip as a hook for commentary by <a href="/entities/jon-herold">Jon Herold</a> on an earlier, less-publicized Biden visit to Ireland in September 2017, during which <a href="/entities/hunter-biden">Hunter Biden</a> and <a href="/entities/jim-biden">Jim Biden</a> met representatives of <a href="/entities/cefc-china-energy">CEFC China Energy</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Real Leaks &amp; Fake News&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-08c" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-08c</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/good-friday-agreement.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const goodFridayAgreement = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  goodFridayAgreement as default
};
