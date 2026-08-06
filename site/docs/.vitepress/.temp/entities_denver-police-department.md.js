import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Denver Police Department","description":"","frontmatter":{"title":"Denver Police Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","protests","first-amendment","colorado"],"sources":["raw/badlands-news-brief-155.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/denver-police-department.md","filePath":"entities/denver-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/denver-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="denver-police-department" tabindex="-1">Denver Police Department <a class="header-anchor" href="#denver-police-department" aria-label="Permalink to &quot;Denver Police Department&quot;">​</a></h1><p>The Denver Police Department is the municipal police force of Denver, Colorado, and has faced repeated litigation over its handling of the 2020 George Floyd protests.[1]</p><h2 id="_2025-protest-settlement" tabindex="-1">2025 protest settlement <a class="header-anchor" href="#_2025-protest-settlement" aria-label="Permalink to &quot;2025 protest settlement&quot;">​</a></h2><p>In June 2025, the Denver City Council unanimously approved $398,500 in settlements with a group of YouTubers, journalists and activists who alleged police violence during the summer 2020 demonstrations against police brutality.[1] According to the initial complaint, plaintiffs were injured &quot;after being targeted, shot at, gassed, and/or fired upon&quot; while participating in, documenting and observing the protests.[1] The City Attorney&#39;s Office declined to comment on the case.[1]</p><p>Plaintiffs&#39; attorney Andy McNulty said, &quot;This is not the first time that Denver Police Department officers have retaliated against individuals for filming and criticizing the police,&quot; adding that &quot;the Denver Police Department&#39;s persistent violation of the First Amendment should come as no surprise given Denver&#39;s consistent failure to discipline or fire officers who violate civilians&#39; constitutional rights.&quot;[1]</p><p>Badlands commentary noted the timing of the payout, characterizing it sardonically as a &quot;new influx of cash in time for riot season&quot; amid the June 2025 wave of anti-ICE demonstrations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: California Crossroads, Selective Insurrection, &amp; Irian Limits&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-155" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-155</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/denver-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const denverPoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  denverPoliceDepartment as default
};
