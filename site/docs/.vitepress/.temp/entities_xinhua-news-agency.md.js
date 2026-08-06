import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Xinhua News Agency","description":"","frontmatter":{"title":"Xinhua News Agency","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["china","state-media","propaganda"],"sources":["raw/badlands-news-brief-62d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/xinhua-news-agency.md","filePath":"entities/xinhua-news-agency.md","lastUpdated":null}');
const _sfc_main = { name: "entities/xinhua-news-agency.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="xinhua-news-agency" tabindex="-1">Xinhua News Agency <a class="header-anchor" href="#xinhua-news-agency" aria-label="Permalink to &quot;Xinhua News Agency&quot;">​</a></h1><p><strong>Xinhua News Agency</strong> is the official state news agency of the People&#39;s Republic of China and the principal outlet through which the <a href="/entities/chinese-communist-party">Chinese Communist Party</a> communicates authoritative statements on domestic and international affairs.[1]</p><h2 id="_2023-economic-warning" tabindex="-1">2023 economic warning <a class="header-anchor" href="#_2023-economic-warning" aria-label="Permalink to &quot;2023 economic warning&quot;">​</a></h2><p>In August 2023, amid reporting that <a href="/entities/fitch-ratings">Fitch Ratings</a> might reconsider China&#39;s A+ sovereign credit rating and that the <a href="/entities/peoples-bank-of-china">People&#39;s Bank of China</a> had injected its largest volume of short-term liquidity since February, <a href="/entities/badlands-media">Badlands</a> contributor <a href="/entities/paul-fleuret">Paul Fleuret</a> quoted Xinhua as reporting that &quot;local government finances and the national economy of China are reportedly on the verge of collapse, and the thunder could explode at any time.&quot;[1] Fleuret used the citation to argue that the picture presented by CCP propaganda — of a China on the cusp of becoming the world&#39;s preeminent superpower — was contradicted by admissions surfacing in the party&#39;s own media.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Federal RICO, Disaster Opportunism &amp; Putin&#39;s Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-62d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-62d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/xinhua-news-agency.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const xinhuaNewsAgency = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  xinhuaNewsAgency as default
};
