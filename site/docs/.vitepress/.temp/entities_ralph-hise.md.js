import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ralph Hise","description":"","frontmatter":{"title":"Ralph Hise","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["north-carolina","redistricting","republican","state-senate"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ralph-hise.md","filePath":"entities/ralph-hise.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ralph-hise.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ralph-hise" tabindex="-1">Ralph Hise <a class="header-anchor" href="#ralph-hise" aria-label="Permalink to &quot;Ralph Hise&quot;">​</a></h1><p>Ralph Hise is a Republican North Carolina state senator representing Mitchell County who has played a leading role in the state&#39;s congressional redistricting efforts.[1]</p><p>In hearings on October 20, 2025, Hise claimed credit for drawing a new North Carolina congressional map, stating that its purpose was &quot;simple and singular — draw a new map that will bring an additional Republican seat.&quot;[1] The statement was offered as a defense against accusations that the map diluted the Black vote: Republicans denied racial motivation by asserting that their motivations were purely political.[1]</p><p>The map&#39;s principal target was the 1st congressional district in northeastern North Carolina, a historically Black area that has elected Black representatives since 1992 and Democrats for a century before that, and the state&#39;s only remaining swing district, then held by Democrat Don Davis.[1] President <a href="/entities/donald-trump">Donald Trump</a> had encouraged states to redistrict so that Republicans could maintain control of Congress after the <a href="/concepts/2026-midterm-elections">2026 midterm elections</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ralph-hise.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ralphHise = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ralphHise as default
};
