import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Pressman","description":"","frontmatter":{"title":"David Pressman","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["hungary","diplomacy","ambassador","lgbtq","tucker-carlson"],"sources":["raw/badlands-news-brief-050.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-pressman.md","filePath":"entities/david-pressman.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-pressman.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-pressman" tabindex="-1">David Pressman <a class="header-anchor" href="#david-pressman" aria-label="Permalink to &quot;David Pressman&quot;">​</a></h1><p>David Pressman is the United States ambassador to <a href="/entities/hungary">Hungary</a>, described in reporting as a gay activist and a donor to <a href="/entities/joe-biden">Joe Biden</a>.[1]</p><h2 id="carlson-criticism" tabindex="-1">Carlson criticism <a class="header-anchor" href="#carlson-criticism" aria-label="Permalink to &quot;Carlson criticism&quot;">​</a></h2><p>Pressman drew sharp criticism after he publicly lectured the Hungarian government over LGBTQ rights in remarks at a U.S. Embassy family pride event.[1] Speaking in Hungary in August 2023, <a href="/entities/tucker-carlson">Tucker Carlson</a> apologized to Hungarians on behalf of the United States, saying that &quot;the behavior of the American ambassador to Hungary makes me want to apologize&quot; and calling it &quot;disgusting and inexcusable.&quot;[1] Carlson argued that &quot;the point of diplomacy is not to hector other nations for its own sake&quot; or &quot;to show up in someone else&#39;s country and scream at them because they&#39;re different from you.&quot;[1] He characterized Pressman as &quot;not a diplomat&quot; but &quot;a political activist and Biden donor&quot; whose conduct &quot;hurts the United States.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Lake Lasts, Biden Slumps &amp; Powell Blinks&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-050" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-050</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-pressman.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidPressman = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidPressman as default
};
