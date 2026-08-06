import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Greg Price","description":"","frontmatter":{"title":"Greg Price","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","commentator","january-6","social-media"],"sources":["raw/badlands-news-brief-8f4.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/greg-price.md","filePath":"entities/greg-price.md","lastUpdated":null}');
const _sfc_main = { name: "entities/greg-price.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="greg-price" tabindex="-1">Greg Price <a class="header-anchor" href="#greg-price" aria-label="Permalink to &quot;Greg Price&quot;">​</a></h1><p>Greg Price is an American conservative commentator and social-media figure who posts under the handle @greg_price11. He is known for rapid-turnaround clips and breaking-news posts on political controversies, and his posts are frequently aggregated by alternative-media outlets.[1]</p><h2 id="january-6-footage-coverage" tabindex="-1">January 6 footage coverage <a class="header-anchor" href="#january-6-footage-coverage" aria-label="Permalink to &quot;January 6 footage coverage&quot;">​</a></h2><p>In the early hours of March 7, 2023, Price posted what he described as never-before-seen video of January 6 showing <a href="/entities/jacob-chansley">Jacob Chansley</a>, the &quot;QAnon Shaman,&quot; being led through the Capitol by police for the entire time he was inside the building.[1] The post, which circulated widely with tens of thousands of reposts and more than 200,000 likes, was among the most-shared reactions to <a href="/entities/tucker-carlson">Tucker Carlson</a>&#39;s broadcast of Capitol security footage.[1]</p><p>Later the same evening, Price posted a clip of Senate Majority Leader <a href="/entities/chuck-schumer">Chuck Schumer</a> saying that <a href="/entities/rupert-murdoch">Rupert Murdoch</a> &quot;has a special obligation to stop Tucker Carlson from going on tonight [and] from letting him go on again and again and again [because] our democracy depends on it.&quot;[1] The <a href="/concepts/badlands-news-brief">Badlands News Brief</a> used both posts to frame its argument that the establishment reaction to the <a href="/concepts/january-6-capitol-security-footage-release">footage release</a> was an attempt to suppress rather than rebut the material.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: January 6 and Nord Stream Whiplash&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-8f4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-8f4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/greg-price.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gregPrice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gregPrice as default
};
