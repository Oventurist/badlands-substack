import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sports Illustrated","description":"","frontmatter":{"title":"Sports Illustrated","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","mainstream-media","magazines","layoffs"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sports-illustrated.md","filePath":"entities/sports-illustrated.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sports-illustrated.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sports-illustrated" tabindex="-1">Sports Illustrated <a class="header-anchor" href="#sports-illustrated" aria-label="Permalink to &quot;Sports Illustrated&quot;">​</a></h1><p>Sports Illustrated is an American sports magazine whose near-total collapse in January 2024 is used by Badlands Media as the opening example of the mainstream media&#39;s demise — a case in which &quot;the death certificates have already been signed.&quot;<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><p>The magazine&#39;s publisher laid off all or most of its staff after the brand&#39;s owner, Authentic, was not paid its quarterly license fee, effectively shutting the operation down.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a> <a href="/entities/taylor-lorenz">Taylor Lorenz</a> described it plainly in her February 2024 video: &quot;Sports Illustrated basically shut down last week.&quot;<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><p>Badlands places the collapse alongside cuts at the <a href="/entities/los-angeles-times">Los Angeles Times</a>, <a href="/entities/time-magazine">Time Magazine</a>, NBC News, National Geographic and Business Insider, arguing that &quot;there are few industries more worthy of such a gruesome and undignified demise as modern mainstream journalism.&quot;<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Swan Song for the MSM&quot;, URL: <a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-swan-song-for-the-msm</a></li></ol></div>`);
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
