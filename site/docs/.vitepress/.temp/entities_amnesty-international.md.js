import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Amnesty International","description":"","frontmatter":{"title":"Amnesty International","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ngo","human-rights","europe","slovakia"],"sources":["raw/badlands-news-brief-762.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amnesty-international.md","filePath":"entities/amnesty-international.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amnesty-international.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amnesty-international" tabindex="-1">Amnesty International <a class="header-anchor" href="#amnesty-international" aria-label="Permalink to &quot;Amnesty International&quot;">​</a></h1><p>Amnesty International is an international human rights organisation, characterised in <a href="/entities/badlands-media">Badlands</a> coverage as one of the &quot;leftist human rights organizations&quot; that intervene against socially conservative legislation in Europe.[1]</p><h2 id="opposition-to-the-slovak-constitutional-amendment" tabindex="-1">Opposition to the Slovak constitutional amendment <a class="header-anchor" href="#opposition-to-the-slovak-constitutional-amendment" aria-label="Permalink to &quot;Opposition to the Slovak constitutional amendment&quot;">​</a></h2><p>In September 2025 Amnesty International condemned a constitutional amendment passed by <a href="/entities/slovakia">Slovakia</a>&#39;s parliament recognising only two sexes, male and female, and restricting adoption rights to married couples.[1] In a statement the organisation said: &quot;Today, the Slovak government chose to follow the lead of countries, such as Hungary, whose policies have led to an erosion of human rights.&quot;[1] Its objection was echoed by the <a href="/entities/council-of-europe">Council of Europe</a>&#39;s Commissioner for Human Rights, Michael O&#39;Flaherty, who argued the amendment denied &quot;the realities of trans and intersex people.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdowns, Shakedowns, &amp; Two Sexes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-762" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-762</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amnesty-international.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amnestyInternational = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amnestyInternational as default
};
