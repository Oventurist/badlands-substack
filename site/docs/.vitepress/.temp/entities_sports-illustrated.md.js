import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sports Illustrated","description":"","frontmatter":{"title":"Sports Illustrated","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["outlet","magazine","layoffs","mainstream-media"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/sports-illustrated.md","filePath":"entities/sports-illustrated.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sports-illustrated.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sports-illustrated" tabindex="-1">Sports Illustrated <a class="header-anchor" href="#sports-illustrated" aria-label="Permalink to &quot;Sports Illustrated&quot;">​</a></h1><p><em>Sports Illustrated</em> is an American sports magazine, long one of the best-known titles in the U.S. periodical market.</p><h2 id="collapse-in-early-2024" tabindex="-1">Collapse in early 2024 <a class="header-anchor" href="#collapse-in-early-2024" aria-label="Permalink to &quot;Collapse in early 2024&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> opens by asserting that for some media organizations &quot;the death certificates have already been signed,&quot; and links to CBS News reporting that the magazine&#39;s union announced layoffs of all or most of its staff after Authentic Brands Group, the owner of the trademark, was not paid its quarterly license fee. The article lists Sports Illustrated alongside the <a href="/entities/los-angeles-times">Los Angeles Times</a>, <a href="/entities/time-magazine">Time Magazine</a>, <a href="/entities/nbc-news">NBC News</a>, <a href="/entities/national-geographic">National Geographic</a> and <a href="/entities/business-insider">Business Insider</a> among outlets that had suffered significant workforce reductions or been pushed to the verge of extinction. In the TikTok address quoted in the article, <a href="/entities/taylor-lorenz">Taylor Lorenz</a> states that Sports Illustrated &quot;basically shut down last week.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sports-illustrated.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sportsIllustrated = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sportsIllustrated as default
};
