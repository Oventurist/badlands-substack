import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Belarus","description":"","frontmatter":{"title":"Belarus","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["belarus","poland","nato","wagner-group","russia-ukraine-war"],"sources":["raw/badlands-news-brief-88b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/belarus.md","filePath":"entities/belarus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/belarus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="belarus" tabindex="-1">Belarus <a class="header-anchor" href="#belarus" aria-label="Permalink to &quot;Belarus&quot;">​</a></h1><p><strong>Belarus</strong> is an Eastern European state and staunch ally of Russia that shares a sizable border with <a href="/entities/poland">Poland</a>, a NATO member which supports Ukraine.[1] In August 2023 it became a focal point of regional tension after fighters from Russia&#39;s <a href="/entities/wagner-group">Wagner</a> private military company were relocated to its territory following their short-lived June mutiny in Russia.[1]</p><h2 id="_2023-border-tensions-with-poland" tabindex="-1">2023 border tensions with Poland <a class="header-anchor" href="#_2023-border-tensions-with-poland" aria-label="Permalink to &quot;2023 border tensions with Poland&quot;">​</a></h2><p>Poland&#39;s prime minister, <a href="/entities/mateusz-morawiecki">Mateusz Morawiecki</a>, said in early August 2023 that there were at least 4,000 Wagner fighters in Belarus, and warned against &quot;provocations&quot; and &quot;sabotage actions&quot; originating from Belarus by the relocated fighters.[1] That warning came days after two Belarusian helicopters breached Polish airspace, heightening jitters in the region.[1]</p><p>In response, Poland announced it would send an additional 2,000 troops to reinforce its border with Belarus, a deployment that deputy interior minister <a href="/entities/maciej-wasik">Maciej Wasik</a> said was double what the country&#39;s Border Guard had requested and would arrive within two weeks.[1] There was no immediate response from Belarus to the announcement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Trump Hunt &amp; the Biden Blitz&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-88b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-88b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/belarus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const belarus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  belarus as default
};
