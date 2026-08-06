import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tom Brady","description":"","frontmatter":{"title":"Tom Brady","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["nfl","sports","trump-endorsements"],"sources":["raw/badlands-news-brief-481.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tom-brady.md","filePath":"entities/tom-brady.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tom-brady.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tom-brady" tabindex="-1">Tom Brady <a class="header-anchor" href="#tom-brady" aria-label="Permalink to &quot;Tom Brady&quot;">​</a></h1><p>Tom Brady is a retired American football quarterback widely regarded as one of the greatest players in NFL history. He appears in Badlands Media coverage both as an athlete and as a rare example of a mainstream sports figure who publicly backed <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><p>Brady led the Tampa Bay Buccaneers to a Super Bowl title in 2020 with <a href="/entities/antonio-brown">Antonio Brown</a> on the roster, completing what Badlands described as Brown&#39;s comeback story after his 2019 departure from the league.[1]</p><p>Badlands characterized Brady as the only professional athlete from a &quot;mainstream&quot; sport to have endorsed Donald Trump up until the 2024 cycle, an endorsement made during the 2016 campaign.[1] That framing was used to underline how unusual Brown&#39;s own 2024 political turn appeared.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Donald&#39;s Drive-Thru Goes Viral as Iran Makes Moves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-481" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-481</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tom-brady.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tomBrady = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tomBrady as default
};
