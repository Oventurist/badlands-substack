import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jim Caviezel","description":"","frontmatter":{"title":"Jim Caviezel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["actor","sound-of-freedom","child-trafficking"],"sources":["raw/badlands-news-brief-3f8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jim-caviezel.md","filePath":"entities/jim-caviezel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jim-caviezel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jim-caviezel" tabindex="-1">Jim Caviezel <a class="header-anchor" href="#jim-caviezel" aria-label="Permalink to &quot;Jim Caviezel&quot;">​</a></h1><p>Jim Caviezel is an American actor best known in the Truth Community for starring in the 2023 anti-child-trafficking film <a href="/concepts/sound-of-freedom">Sound of Freedom</a>.[1] In the film he portrays <a href="/entities/tim-ballard">Tim Ballard</a>, the founder of <a href="/entities/operation-underground-railroad">Operation Underground Railroad</a>.[1]</p><p>The low-budget film featuring Caviezel generated $100 million at the box office within weeks of its debut despite sustained negative coverage from mainstream media outlets such as Rolling Stone and Bloomberg News, and earned an A+ CinemaScore alongside a 100 percent Rotten Tomatoes score.[1] Caviezel&#39;s association with the project has made him a prominent figure in public discussion of child trafficking and of the media&#39;s handling of that subject.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;&#39;X&#39; Marks the Spot &amp; Vineyard Mysteries Abound&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jim-caviezel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jimCaviezel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jimCaviezel as default
};
