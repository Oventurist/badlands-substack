import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John King","description":"","frontmatter":{"title":"John King","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","cnn","elections","2024-election"],"sources":["raw/badlands-news-brief-8ae.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-king.md","filePath":"entities/john-king.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-king.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-king" tabindex="-1">John King <a class="header-anchor" href="#john-king" aria-label="Permalink to &quot;John King&quot;">​</a></h1><p>John King is an American television journalist and chief national correspondent for <a href="/entities/cnn">CNN</a>, best known for his electoral map analysis on the network&#39;s &quot;Magic Wall.&quot;[1]</p><h2 id="july-2024-electoral-map-analysis" tabindex="-1">July 2024 electoral map analysis <a class="header-anchor" href="#july-2024-electoral-map-analysis" aria-label="Permalink to &quot;July 2024 electoral map analysis&quot;">​</a></h2><p>On Tuesday, July 16, 2024 — the first night of the <a href="/concepts/2024-republican-national-convention">Republican National Convention</a> — King used CNN&#39;s electoral map to argue that <a href="/entities/donald-trump">Donald Trump</a> was on course for a historic landslide victory in November, potentially reaching 330 or more electoral votes against the 270 required to win.[1]</p><p>King explained that the solid and leaning Republican states alone already gave Trump a path to 272 electoral votes.[1] He identified Wisconsin and Pennsylvania as toss-ups, described Michigan as leaning Republican, and noted that Georgia, Arizona, and Nevada — states <a href="/entities/joe-biden">Joe Biden</a> had won or flipped in 2020 — had moved toward Trump.[1] &quot;This is the dire strait for Joe Biden right now on the first night of the republican convention,&quot; King said, adding that with sixteen weeks remaining to Election Day, &quot;it is tough to change a map like this in that amount of time.&quot;[1]</p><p>King said the warning to the White House was that if the race&#39;s current dynamics held, Trump could conceivably reach 330 or more electoral votes, while Biden had &quot;essentially one, maybe two narrow paths to 270.&quot;[1] Badlands coverage highlighted the segment as a mainstream-media admission of Trump&#39;s standing amid the pressure campaign for Biden&#39;s withdrawal from the race.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Vance Takes the Stage as Biden Takes the Basement&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-king.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnKing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnKing as default
};
