import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Palau","description":"","frontmatter":{"title":"Palau","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["pacific","immigration","deportation","foreign-policy"],"sources":["raw/badlands-news-brief-467.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/palau.md","filePath":"entities/palau.md","lastUpdated":null}');
const _sfc_main = { name: "entities/palau.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="palau" tabindex="-1">Palau <a class="header-anchor" href="#palau" aria-label="Permalink to &quot;Palau&quot;">​</a></h1><p>Palau is a Pacific island nation consisting of an archipelago of roughly 350 small islands. Its president is Surangel Whipps Jr.[1]</p><h2 id="third-country-migrant-agreement-december-2025" tabindex="-1">Third-country migrant agreement (December 2025) <a class="header-anchor" href="#third-country-migrant-agreement-december-2025" aria-label="Permalink to &quot;Third-country migrant agreement (December 2025)&quot;">​</a></h2><p>In December 2025, Palau signed a &quot;memo of understanding&quot; with the <a href="/entities/donald-trump">Trump</a> administration agreeing to accept up to 75 &quot;third country nationals&quot; who cannot be returned to their home nations. In exchange, Palau will receive $7.5 million and other aid, according to a statement from the office of President Whipps.[1]</p><p>The arrangement permits people who have never been charged with a crime to live and work in Palau, which the president&#39;s office framed as &quot;helping address local labor shortages in needed occupations.&quot;[1]</p><p>The deal forms part of a broader pattern: the Trump administration has been intensifying efforts to deport people to countries where they have no personal connections, according to an analysis of public immigration court data.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Somali Scams, Munchausen Moms, &amp; Another Perfect Phone Call&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-467" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-467</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/palau.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const palau = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  palau as default
};
