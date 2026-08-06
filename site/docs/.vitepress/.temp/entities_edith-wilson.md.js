import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Edith Wilson","description":"","frontmatter":{"title":"Edith Wilson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["first-lady","presidential-incapacity","history"],"sources":["raw/badlands-news-brief-669.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/edith-wilson.md","filePath":"entities/edith-wilson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/edith-wilson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="edith-wilson" tabindex="-1">Edith Wilson <a class="header-anchor" href="#edith-wilson" aria-label="Permalink to &quot;Edith Wilson&quot;">​</a></h1><p>Edith Wilson was First Lady of the United States and the wife of President Woodrow Wilson. She is remembered chiefly for the period following her husband&#39;s incapacitating stroke, when she managed access to the president and effectively exercised presidential functions.[1]</p><h2 id="invoked-as-precedent-for-presidential-incapacity" tabindex="-1">Invoked as precedent for presidential incapacity <a class="header-anchor" href="#invoked-as-precedent-for-presidential-incapacity" aria-label="Permalink to &quot;Invoked as precedent for presidential incapacity&quot;">​</a></h2><p>On the Badlands Media program Alphas Make Sandwiches, hosts discussed Edith Wilson as &quot;the First Lady who was pretending to be President on October 6, 1919.&quot;[1] <a href="/entities/ashe-in-america">Ashe in America</a> used the anniversary to draw a parallel to <a href="/entities/jill-biden">Jill Biden</a> and to renewed questions about the cognitive state of former President <a href="/entities/joe-biden">Joe Biden</a>, who was photographed attending Game 2 of the National League Division Series at Citizens Bank Park on October 6, 2025.[1] Comparing images of Biden, she speculated about physical inconsistencies and asked, &quot;How&#39;s that autopen probe going?&quot; — linking the discussion to the <a href="/concepts/autopen-scandal">autopen scandal</a> over who exercised presidential authority during Biden&#39;s term.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Dumb Questions, Pentagon Pizzas, &amp; Zero Trust&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-669" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-669</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/edith-wilson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const edithWilson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  edithWilson as default
};
