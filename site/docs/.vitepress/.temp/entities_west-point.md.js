import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Military Academy at West Point","description":"","frontmatter":{"title":"United States Military Academy at West Point","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","education","army","appointments"],"sources":["raw/badlands-news-brief-298.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/west-point.md","filePath":"entities/west-point.md","lastUpdated":null}');
const _sfc_main = { name: "entities/west-point.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-military-academy-at-west-point" tabindex="-1">United States Military Academy at West Point <a class="header-anchor" href="#united-states-military-academy-at-west-point" aria-label="Permalink to &quot;United States Military Academy at West Point&quot;">​</a></h1><p>The United States Military Academy at West Point is the U.S. Army&#39;s elite officer-training institution, governed in part by a Board of Visitors whose membership became a matter of political attention in March 2025.[1]</p><h2 id="board-of-visitors-appointments-march-2025" tabindex="-1">Board of Visitors appointments (March 2025) <a class="header-anchor" href="#board-of-visitors-appointments-march-2025" aria-label="Permalink to &quot;Board of Visitors appointments (March 2025)&quot;">​</a></h2><p>On Monday, March 17, 2025, President <a href="/entities/donald-trump">Donald Trump</a> named <a href="/entities/michael-flynn">Michael Flynn</a>, his former national security adviser, to the academy&#39;s Board of Visitors.[1] Announcing the move on Truth Social, Trump also named Maureen Bannon, daughter of his former adviser <a href="/entities/steve-bannon">Steve Bannon</a>, to the board.[1]</p><p>The roles are described as largely ceremonial, but the appointment places members in a position to discuss matters such as curriculum, discipline, and academic methods at the academy.[1] Flynn, a retired three-star Army general, had challenged the 2020 election results, twice pleaded guilty to lying to the <a href="/entities/fbi">FBI</a> before recanting and being pardoned by Trump, and remained a prominent speaker on right-wing podcasts and at conservative events.[1]</p><p>Badlands commentary treated the appointment as evidence against the recurring claim that Trump was merely &quot;keeping General Flynn close,&quot; asserting instead that Flynn is a patriot and trusted ally.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Pirated Pardons &amp; Delayed Declassifications&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-298" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-298</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/west-point.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const westPoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  westPoint as default
};
