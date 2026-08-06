import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ben Horowitz","description":"","frontmatter":{"title":"Ben Horowitz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["venture-capital","silicon-valley","campaign-finance","2024-election"],"sources":["raw/badlands-news-brief-8ae.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/ben-horowitz.md","filePath":"entities/ben-horowitz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ben-horowitz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ben-horowitz" tabindex="-1">Ben Horowitz <a class="header-anchor" href="#ben-horowitz" aria-label="Permalink to &quot;Ben Horowitz&quot;">​</a></h1><p>Ben Horowitz is an American venture capitalist and co-founder, with <a href="/entities/marc-andreessen">Marc Andreessen</a>, of the Silicon Valley firm <a href="/entities/andreessen-horowitz">Andreessen Horowitz</a>, established in 2009.[1]</p><h2 id="_2024-support-for-donald-trump" tabindex="-1">2024 support for Donald Trump <a class="header-anchor" href="#_2024-support-for-donald-trump" aria-label="Permalink to &quot;2024 support for Donald Trump&quot;">​</a></h2><p>In July 2024, Axios reported that Horowitz and Andreessen would each donate to <a href="/entities/donald-trump">Donald Trump</a>&#39;s re-election effort, a shift described as part of a broader realignment in which a significant portion of the technology industry&#39;s money and influence lined up behind Trump.[1] Neither man was believed to have previously donated to a presidential campaign.[1] The pair&#39;s move followed <a href="/entities/elon-musk">Elon Musk</a>&#39;s announcement that he would endorse Trump and form a political action committee to aid the campaign.[1]</p><p>The donations were consistent with a policy Andreessen Horowitz announced in late 2023, under which its partners would begin making contributions to political candidates they judged to be &quot;advancing technology.&quot;[1] Axios characterized both men as &quot;techno-optimists,&quot; and noted that Silicon Valley, once solidly Democratic with only a handful of Republican outliers, now had a growing and increasingly assertive red camp.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Vance Takes the Stage as Biden Takes the Basement&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8ae" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8ae</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ben-horowitz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benHorowitz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benHorowitz as default
};
