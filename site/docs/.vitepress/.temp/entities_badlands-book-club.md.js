import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Badlands Book Club","description":"","frontmatter":{"title":"Badlands Book Club","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","programming","books"],"sources":["raw/badlands-news-brief-433.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/badlands-book-club.md","filePath":"entities/badlands-book-club.md","lastUpdated":null}');
const _sfc_main = { name: "entities/badlands-book-club.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="badlands-book-club" tabindex="-1">Badlands Book Club <a class="header-anchor" href="#badlands-book-club" aria-label="Permalink to &quot;Badlands Book Club&quot;">​</a></h1><p>Badlands Book Club is a <a href="/entities/badlands-media">Badlands Media</a> program in which hosts read and discuss books chapter by chapter on stream, distributed via Rumble.[1]</p><h2 id="episode-5" tabindex="-1">Episode 5 <a class="header-anchor" href="#episode-5" aria-label="Permalink to &quot;Episode 5&quot;">​</a></h2><p>Episode 5, aired Tuesday, April 15, 2025, covered chapters concluding Part II of <a href="/entities/kash-patel">Kash Patel</a>&#39;s <em><a href="/concepts/government-gangsters">Government Gangsters</a></em>, hosted by <a href="/entities/ashe-in-america">Ashe in America</a> and <a href="/entities/canncon">CannCon</a>.[1] The discussion focused on Patel&#39;s proposed reforms, particularly his call to purge officials disloyal to the <a href="/concepts/us-constitution">Constitution</a> from positions of power, and was subsequently cited in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> commentary on the <a href="/concepts/2025-pentagon-leak-investigation">Pentagon leak suspensions</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;POTUS&#39; &#39;Reverse Kissinger&#39; &amp; Pete&#39;s Pentagon Purge&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-433" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-433</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/badlands-book-club.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const badlandsBookClub = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  badlandsBookClub as default
};
