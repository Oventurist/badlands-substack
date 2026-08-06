import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pepe Lives Matter","description":"","frontmatter":{"title":"Pepe Lives Matter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","citizen-journalism","commentary","great-awakening"],"sources":["raw/badlands-news-brief-644.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pepe-lives-matter.md","filePath":"entities/pepe-lives-matter.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pepe-lives-matter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pepe-lives-matter" tabindex="-1">Pepe Lives Matter <a class="header-anchor" href="#pepe-lives-matter" aria-label="Permalink to &quot;Pepe Lives Matter&quot;">​</a></h1><p>Pepe Lives Matter is the pen name of a citizen journalist and commentator who contributes to the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> and publishes on Substack.[1]</p><h2 id="commentary" tabindex="-1">Commentary <a class="header-anchor" href="#commentary" aria-label="Permalink to &quot;Commentary&quot;">​</a></h2><p>Responding to <a href="/entities/joe-biden">President Joe Biden</a>&#39;s March 2023 remarks about his cranial aneurysm — in which Biden joked that doctors &quot;had to take the top of my head off a couple times, see if I had a brain&quot; — Pepe Lives Matter dubbed him &quot;the red pill and chief,&quot; writing that Biden did &quot;every single thing that might wake up the sleeping masses&quot; and did so &quot;in such an outrageous and blubbering way.&quot;[1] The contributor compared the spectacle to a Naked Gun scene in which a figure insists there is &quot;nothing to see here&quot; while practically begging onlookers to look.[1]</p><p>Pepe Lives Matter argued that anyone paying even slight attention to politics should recognise that presidents have historically been controlled puppets, a fact he said Biden displayed &quot;in immaculate fashion,&quot; and concluded that whether purposeful or not, the effect was &quot;a net positive for the <a href="/concepts/great-awakening">Great Awakening</a>.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;J6 Exposure, Biden&#39;s Brain and Trump&#39;s Agenda&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-644" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-644</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pepe-lives-matter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pepeLivesMatter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pepeLivesMatter as default
};
