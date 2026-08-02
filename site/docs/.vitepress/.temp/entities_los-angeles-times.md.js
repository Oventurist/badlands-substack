import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Los Angeles Times","description":"","frontmatter":{"title":"Los Angeles Times","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","newspaper","layoffs","mainstream-media"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/los-angeles-times.md","filePath":"entities/los-angeles-times.md","lastUpdated":null}');
const _sfc_main = { name: "entities/los-angeles-times.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="los-angeles-times" tabindex="-1">Los Angeles Times <a class="header-anchor" href="#los-angeles-times" aria-label="Permalink to &quot;Los Angeles Times&quot;">​</a></h1><p>The <em>Los Angeles Times</em> is a major American daily newspaper, owned by Patrick Soon-Shiong. In the Badlands Media corpus it is the single most cited example of the contraction of the <a href="/concepts/mainstream-media">mainstream press</a>.</p><h2 id="_2024-layoffs" tabindex="-1">2024 layoffs <a class="header-anchor" href="#_2024-layoffs" aria-label="Permalink to &quot;2024 layoffs&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> reports that in January 2024 the paper laid off 25 percent of what the article calls an &quot;already-decimated newsroom&quot; in a single day, only months after cutting 13 percent of its workforce. The figure of 115 employees is given, drawn from the paper&#39;s own coverage and echoed by <a href="/entities/taylor-lorenz">Taylor Lorenz</a> in the TikTok address quoted at length in the article.</p><p>According to Lorenz&#39;s account as reproduced in the source, the cuts &quot;wiped out their entire DC bureau in an election year,&quot; eliminated nearly all of the sports staff, killed the entire technology and business section, and removed breaking news writers and social media editors. The article treats the destruction of a Washington bureau during a presidential election year as emblematic of an industry no longer capable of performing basic civic functions.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/los-angeles-times.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const losAngelesTimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  losAngelesTimes as default
};
