import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Time Magazine","description":"","frontmatter":{"title":"Time Magazine","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","magazine","layoffs","mainstream-media"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/time-magazine.md","filePath":"entities/time-magazine.md","lastUpdated":null}');
const _sfc_main = { name: "entities/time-magazine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="time-magazine" tabindex="-1">Time Magazine <a class="header-anchor" href="#time-magazine" aria-label="Permalink to &quot;Time Magazine&quot;">​</a></h1><p><em>Time</em> is an American weekly news magazine founded in 1923 and one of the most recognized titles in twentieth-century American journalism.</p><h2 id="_2024-layoffs" tabindex="-1">2024 layoffs <a class="header-anchor" href="#_2024-layoffs" aria-label="Permalink to &quot;2024 layoffs&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> cites CNN reporting that in January 2024 Time laid off roughly 15 percent of its unionized editorial staff, &quot;becoming the latest news outlet to slash its workforce.&quot; The magazine is listed among the widely recognized organizations that had experienced significant reductions in the weeks before the article&#39;s February 2024 publication, and <a href="/entities/taylor-lorenz">Taylor Lorenz</a>, quoted in the piece, notes that &quot;Time Magazine also just laid off a ton of people.&quot; The corpus treats the episode as part of the systemic decline of <a href="/concepts/mainstream-media">centralized media</a> rather than an isolated business failure.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/time-magazine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timeMagazine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timeMagazine as default
};
