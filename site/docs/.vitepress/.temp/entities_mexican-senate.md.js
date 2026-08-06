import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mexican Senate","description":"","frontmatter":{"title":"Mexican Senate","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["mexico","legislature","security","cartels"],"sources":["raw/badlands-news-brief-7b8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mexican-senate.md","filePath":"entities/mexican-senate.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mexican-senate.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mexican-senate" tabindex="-1">Mexican Senate <a class="header-anchor" href="#mexican-senate" aria-label="Permalink to &quot;Mexican Senate&quot;">​</a></h1><p>The Mexican Senate is the upper chamber of Mexico&#39;s federal legislature and holds the constitutional authority to approve the entry of foreign military personnel into Mexican territory.[1]</p><h2 id="authorization-of-us-special-forces-2025" tabindex="-1">Authorization of US Special Forces (2025) <a class="header-anchor" href="#authorization-of-us-special-forces-2025" aria-label="Permalink to &quot;Authorization of US Special Forces (2025)&quot;">​</a></h2><p>On Tuesday, February 11, 2025, at the urging of President <a href="/entities/claudia-sheinbaum">Claudia Sheinbaum</a>, the Mexican Senate approved by unanimous vote the entry of a United States Special Forces group into the country.[1] The stated purpose was to train Mexico&#39;s marines under a program described as &quot;Strengthening the Capacity of the Special Operations Forces of the Navy.&quot;[1]</p><p>Under the arrangement, a contingent of US military personnel would serve as advisors and trainers to Mexico&#39;s marine forces, with a special focus on combating the country&#39;s drug cartels.[1] A similar agreement had been approved during the six-year term of former President Andrés Manuel López Obrador, which saw 11 US military personnel enter Mexico to oversee marine training.[1]</p><p>The National Pulse reported the vote as one of a series of Mexican overtures aimed at averting President <a href="/entities/donald-trump">Donald Trump</a>&#39;s threatened tariffs on Mexican exports to the United States.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: MAHA, Modi, Musk, &amp; Munich&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-7b8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-7b8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mexican-senate.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mexicanSenate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mexicanSenate as default
};
