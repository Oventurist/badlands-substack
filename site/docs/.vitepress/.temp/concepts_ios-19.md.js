import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"iOS 19","description":"","frontmatter":{"title":"iOS 19","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["apple","software","wwdc","technology"],"sources":["raw/badlands-news-brief-748.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/ios-19.md","filePath":"concepts/ios-19.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/ios-19.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ios-19" tabindex="-1">iOS 19 <a class="header-anchor" href="#ios-19" aria-label="Permalink to &quot;iOS 19&quot;">​</a></h1><p>iOS 19 is a major release of <a href="/entities/apple">Apple</a>&#39;s mobile operating system previewed at the company&#39;s Worldwide Developers Conference in June 2025.[1]</p><p>Reporting ahead of the keynote indicated the release could bring a major design overhaul, potentially provoking reactions comparable to the dramatic iOS 7 redesign of 2013.[1] Expected changes included a revamped user interface, enhanced Siri capabilities using improved large language model technology, camera app updates with new interface elements, and core system improvements for performance and battery life.[1] Following the developer beta at WWDC, Apple was expected to launch the first public beta in late June or early July 2025, allowing time to address major bugs found by developers before wider testing.[1]</p><p>Badlands contributor <a href="/entities/chris-paul">Chris Paul</a> offered a satirical reading, quipping that the new iOS update was &quot;to celebrate Gay Pride Month, released on George Floyd&#39;s Day.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Remembrance, Razor Blade Throat, &amp; Ukrainian Drone Assassins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-748" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-748</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/ios-19.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ios19 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ios19 as default
};
