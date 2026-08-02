import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Global Engagement Center","description":"","frontmatter":{"title":"Global Engagement Center","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["us-government","state-department","disinformation","censorship"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/global-engagement-center.md","filePath":"entities/global-engagement-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/global-engagement-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="global-engagement-center" tabindex="-1">Global Engagement Center <a class="header-anchor" href="#global-engagement-center" aria-label="Permalink to &quot;Global Engagement Center&quot;">​</a></h1><p>The Global Engagement Center (GEC) was an office of the U.S. <a href="/entities/state-department">State Department</a>, established under the Under Secretary for Public Diplomacy and Public Affairs, created pursuant to the <a href="/concepts/countering-foreign-propaganda-and-disinformation-act-of-2016">Countering Foreign Propaganda and Disinformation Act of 2016</a> signed by President <a href="/entities/barack-obama">Barack Obama</a>.</p><h2 id="mandate" tabindex="-1">Mandate <a class="header-anchor" href="#mandate" aria-label="Permalink to &quot;Mandate&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> quotes the center&#39;s official mission: &quot;To direct, lead, synchronize, integrate, and coordinate U.S. Federal Government efforts to recognize, understand, expose, and counter foreign state and non-state propaganda and disinformation efforts aimed at undermining or influencing the policies, security, or stability of the United States, its allies, and partner nations.&quot;</p><h2 id="badlands-interpretation" tabindex="-1">Badlands interpretation <a class="header-anchor" href="#badlands-interpretation" aria-label="Permalink to &quot;Badlands interpretation&quot;">​</a></h2><p>The article treats the GEC&#39;s creation as an admission that the establishment&#39;s traditional instrument of narrative control, the <a href="/concepts/mainstream-media">centralized media</a>, was already failing. It argues that the apparatus made &quot;Russian disinformation&quot; a durable label for inconvenient evidence of establishment corruption, and situates the center as an institutional forerunner of what the corpus calls the <a href="/concepts/censorship-industrial-complex">Censorship Industrial Complex</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/global-engagement-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const globalEngagementCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  globalEngagementCenter as default
};
