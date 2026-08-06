import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jane Goodall","description":"","frontmatter":{"title":"Jane Goodall","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["conservation","primatology","obituary","united-kingdom"],"sources":["raw/badlands-news-brief-8d6.md"],"confidence":"high"},"headers":[],"relativePath":"entities/jane-goodall.md","filePath":"entities/jane-goodall.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jane-goodall.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jane-goodall" tabindex="-1">Jane Goodall <a class="header-anchor" href="#jane-goodall" aria-label="Permalink to &quot;Jane Goodall&quot;">​</a></h1><p>Dame Jane Goodall was a British conservationist, ethologist and primatologist regarded as the world&#39;s leading expert on chimpanzee behaviour and a lifelong defender of the species&#39; habitat.[1] She died on 1 October 2025 at the age of 91.[1]</p><h2 id="death" tabindex="-1">Death <a class="header-anchor" href="#death" aria-label="Permalink to &quot;Death&quot;">​</a></h2><p>The Jane Goodall Institute announced on the morning of Wednesday, 1 October 2025 that Goodall had died of &quot;natural causes&quot; while in California as part of a speaking tour of the United States.[1] The Institute&#39;s statement, shared to Facebook, described her as &quot;Dr Jane Goodall DBE, UN Messenger of Peace and founder of the Jane Goodall Institute,&quot; and said that &quot;Dr Goodall&#39;s discoveries as an ethologist transformed science, and she was a tireless advocate for the protection and restoration of the natural world.&quot;[1]</p><h2 id="coverage" tabindex="-1">Coverage <a class="header-anchor" href="#coverage" aria-label="Permalink to &quot;Coverage&quot;">​</a></h2><p>Her death was carried as a bonus item in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> edition covering the news of Wednesday, 1 October 2025, alongside items on the Gaza peace plan, the U.S. government shutdown and Turkish arms diplomacy.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Inadvertent Israeli Attacks, Delightful Deep Fakes, &amp; A Suing Shaman&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8d6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8d6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jane-goodall.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const janeGoodall = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  janeGoodall as default
};
