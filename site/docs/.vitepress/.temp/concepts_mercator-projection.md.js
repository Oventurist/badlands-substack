import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mercator Projection","description":"","frontmatter":{"title":"Mercator Projection","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["cartography","maps","africa","colonialism","equal-earth"],"sources":["raw/badlands-news-brief-50a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/mercator-projection.md","filePath":"concepts/mercator-projection.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/mercator-projection.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mercator-projection" tabindex="-1">Mercator Projection <a class="header-anchor" href="#mercator-projection" aria-label="Permalink to &quot;Mercator Projection&quot;">​</a></h1><p>The <strong>Mercator projection</strong> is a 16th-century map projection originally designed for maritime navigation that has become the default depiction of the world for centuries of Western education.[1] Because it preserves angles at the expense of area, it substantially distorts relative size: landmasses such as Greenland and Europe appear far larger than they are, while Africa and South America appear proportionally shrunken.[1]</p><h2 id="contested-alternatives" tabindex="-1">Contested alternatives <a class="header-anchor" href="#contested-alternatives" aria-label="Permalink to &quot;Contested alternatives&quot;">​</a></h2><p>The Peters Projection, which preserves relative area, generated controversy when it was promoted in the 1970s.[1] More recently the African Union has backed an &quot;Equal Earth&quot; campaign to replace Mercator-based maps in institutional use, part of what coverage described as a continuing human disagreement over &quot;what the world even looks like.&quot;[1] The New York Post summarized the argument as a map &quot;designed for sailors&quot; that &quot;ended up shipwrecking our minds, and shaping global superpowers, for centuries.&quot;[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Badlands contributor Chris Paul quoted the framing that &quot;the world map is a lie&quot; and that viewers had been looking at a distorted version of reality for over 400 years, then questioned the timing and motive of a new campaign to &quot;correct the map.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Manipulated Maps, Downed Planes, &amp; A Very Stable Genius&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-50a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-50a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/mercator-projection.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mercatorProjection = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mercatorProjection as default
};
