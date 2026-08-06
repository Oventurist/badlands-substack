import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benedictine College","description":"","frontmatter":{"title":"Benedictine College","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","catholic","culture-war"],"sources":["raw/badlands-news-brief-09d.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/benedictine-college.md","filePath":"entities/benedictine-college.md","lastUpdated":null}');
const _sfc_main = { name: "entities/benedictine-college.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="benedictine-college" tabindex="-1">Benedictine College <a class="header-anchor" href="#benedictine-college" aria-label="Permalink to &quot;Benedictine College&quot;">​</a></h1><p>Benedictine College is the Catholic institution whose May 2024 commencement ceremony hosted the address by Kansas City Chiefs kicker <a href="/entities/harrison-butker">Harrison Butker</a> that became a national culture-war flashpoint.[1]</p><p>Speaking to the graduating class, Butker suggested that while some graduates would go on to lead successful careers, the majority were likely most excited about their marriage and the children they would bring into the world, and described homemaking as one of the &quot;most important&quot; jobs a woman can have.[1] The remarks drew heavy criticism from the left and a defense from <a href="/entities/bill-maher">Bill Maher</a>, who said he did not see &quot;what the big crime is.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Iranian Crashes, Israeli Maneuvers &amp; Trumpian Rhetoric&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-09d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-09d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/benedictine-college.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benedictineCollege = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benedictineCollege as default
};
