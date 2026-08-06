import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"TMZ","description":"","frontmatter":{"title":"TMZ","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","entertainment-news","celebrity-journalism","sports-media"],"sources":["raw/badlands-news-brief-1cd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/tmz.md","filePath":"entities/tmz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/tmz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tmz" tabindex="-1">TMZ <a class="header-anchor" href="#tmz" aria-label="Permalink to &quot;TMZ&quot;">​</a></h1><p>TMZ is an American celebrity and entertainment news outlet, operating a sports vertical under the name TMZ Sports.[1]</p><h2 id="coverage-of-the-damar-hamlin-body-double-claim" tabindex="-1">Coverage of the Damar Hamlin body-double claim <a class="header-anchor" href="#coverage-of-the-damar-hamlin-body-double-claim" aria-label="Permalink to &quot;Coverage of the Damar Hamlin body-double claim&quot;">​</a></h2><p>On January 23, 2023, TMZ published a report addressing online speculation that a body double had appeared in place of Buffalo Bills safety <a href="/entities/damar-hamlin">Damar Hamlin</a> at the Bills–Bengals playoff game.[1] The outlet reported that multiple sources had told TMZ Sports the claim was untrue, framing the theory dismissively as the work of &quot;the tin foil hat-wearing crowd.&quot;[1] TMZ had previously covered Hamlin&#39;s attendance at the game in a suite at Highmark Stadium and his on-field cardiac arrest in Cincinnati on January 2, 2023.[1] The outlet&#39;s dismissal of the body-double theory was itself taken up by <a href="/entities/badlands-media">Badlands Media</a> commentator <a href="/entities/burning-bright">Burning Bright</a> as an example of contested media narratives in the information war.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pence Docs, Ukraine Corruption &amp; Body Doubles&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1cd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1cd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/tmz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tmz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tmz as default
};
