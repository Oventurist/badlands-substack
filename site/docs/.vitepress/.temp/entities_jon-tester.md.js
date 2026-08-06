import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jon Tester","description":"","frontmatter":{"title":"Jon Tester","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-senate","democratic-party","montana","2024-election","military-draft"],"sources":["raw/badlands-news-brief-565.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jon-tester.md","filePath":"entities/jon-tester.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jon-tester.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jon-tester" tabindex="-1">Jon Tester <a class="header-anchor" href="#jon-tester" aria-label="Permalink to &quot;Jon Tester&quot;">​</a></h1><p>Jon Tester is a Democratic United States Senator from Montana who, during the 2024 election cycle, was among his party&#39;s most vulnerable incumbents.[1]</p><h2 id="draft-registration-vote-pressure-2024" tabindex="-1">Draft registration vote pressure, 2024 <a class="header-anchor" href="#draft-registration-vote-pressure-2024" aria-label="Permalink to &quot;Draft registration vote pressure, 2024&quot;">​</a></h2><p>In June 2024, Senate Democrats attached language to the annual defense authorization bill requiring women to register for the military draft.[1] Conservatives led by Senator <a href="/entities/roger-wicker">Roger Wicker</a> (R-Miss.) were expected to force a vote to remove the provision — a vote reporting described as politically tough for Tester and for fellow at-risk Democrat <a href="/entities/jacky-rosen">Jacky Rosen</a> of Nevada.[1] The controversy complicated the chances of moving the defense bill on the Senate floor before Election Day.[1]</p><p>The episode fit a broader pattern noted in mid-2024 political coverage, in which the Democratic Party&#39;s most vulnerable Senate incumbents were nonetheless running ahead of their rivals in key battleground states even as President <a href="/entities/joe-biden">Joe Biden</a> struggled at the top of the ticket.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Polling Paradoxes, Hegelian Seeding &amp; Putin&#39;s Gambit&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-565" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-565</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jon-tester.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jonTester = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jonTester as default
};
