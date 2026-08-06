import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Los Lobos","description":"","frontmatter":{"title":"Los Lobos","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cartels","ecuador","narcotics","terrorism-designation"],"sources":["raw/badlands-news-brief-779.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/los-lobos.md","filePath":"entities/los-lobos.md","lastUpdated":null}');
const _sfc_main = { name: "entities/los-lobos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="los-lobos" tabindex="-1">Los Lobos <a class="header-anchor" href="#los-lobos" aria-label="Permalink to &quot;Los Lobos&quot;">​</a></h1><p>Los Lobos is a drug-trafficking criminal organization designated by the United States as a Foreign Terrorist Organization in 2025.[1]</p><h2 id="terrorist-designation" tabindex="-1">Terrorist designation <a class="header-anchor" href="#terrorist-designation" aria-label="Permalink to &quot;Terrorist designation&quot;">​</a></h2><p><a href="/entities/fbi">FBI</a> Director <a href="/entities/kash-patel">Kash Patel</a> said in September 2025 that with Los Lobos and <a href="/entities/los-choneros">Los Choneros</a> now designated as Foreign Terrorist Organizations, the groups&#39; &quot;drug money pipelines are drying up.&quot;[1] Patel declared that the FBI was &quot;not playing defense&quot; and was instead &quot;eliminating drug and cartel trafficking at the source,&quot; concluding that &quot;America will lead, and the cartels will fall.&quot;[1]</p><p>The designations accompanied an escalating enforcement and military posture toward trafficking networks in the Western Hemisphere, including strikes on alleged drug vessels departing <a href="/entities/venezuela">Venezuela</a>.[1] See also <a href="/concepts/foreign-terrorist-organization">Foreign Terrorist Organization</a>.</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Grand Juries, Pressure Campaigns, &amp; Elaborate Hoaxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-779" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-779</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/los-lobos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const losLobos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  losLobos as default
};
