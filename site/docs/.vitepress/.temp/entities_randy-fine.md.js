import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Randy Fine","description":"","frontmatter":{"title":"Randy Fine","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","politician","florida","israel","free-speech"],"sources":["raw/a-glaring-double-standard.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/randy-fine.md","filePath":"entities/randy-fine.md","lastUpdated":null}');
const _sfc_main = { name: "entities/randy-fine.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="randy-fine" tabindex="-1">Randy Fine <a class="header-anchor" href="#randy-fine" aria-label="Permalink to &quot;Randy Fine&quot;">​</a></h1><p>Randy Fine is an American politician who served as a Republican member of the Florida State Senate and previously the Florida House of Representatives. In the Badlands Media article &quot;A Glaring Double Standard,&quot; his social media posts about Palestinians are contrasted with the firings of critics of Israel.</p><h2 id="posts-about-palestinians" tabindex="-1">Posts about Palestinians <a class="header-anchor" href="#posts-about-palestinians" aria-label="Permalink to &quot;Posts about Palestinians&quot;">​</a></h2><p>The article reports that Florida State Senator Randy Fine posted a series of tweets claiming there were no innocent Palestinian civilians, calling them &quot;demons that live on Earth&quot; who &quot;deserve death,&quot; and demanding that &quot;Gaza must be destroyed.&quot; <a href="/entities/ryan-delarme">Ryan DeLarme</a>, the article&#39;s author, observes that &quot;[i]t is yet undetermined if a campaign was launched to doxx this man and have him fired from his job&quot; — unlike the treatment of individuals fired for criticizing Israel.</p><h2 id="use-in-the-article-s-argument" tabindex="-1">Use in the article&#39;s argument <a class="header-anchor" href="#use-in-the-article-s-argument" aria-label="Permalink to &quot;Use in the article&#39;s argument&quot;">​</a></h2><p>The article uses Fine as a contrast to the fired Israel critics, arguing that public figures who praised the killing of Palestinians faced no comparable &quot;cancel culture&quot; pressure, thereby exposing the selectivity the source attributes to right-wing free speech advocates and the censorship frameworks of the <a href="/entities/antisemitism-awareness-act">Antisemitism Awareness Act</a> and <a href="/entities/executive-order-14188">Executive Order 14188</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-glaring-double-standard" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/randy-fine.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const randyFine = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  randyFine as default
};
