import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jorge Masvidal","description":"","frontmatter":{"title":"Jorge Masvidal","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ufc","mixed-martial-arts","trump-supporters","miami"],"sources":["raw/badlands-news-brief-12e.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jorge-masvidal.md","filePath":"entities/jorge-masvidal.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jorge-masvidal.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jorge-masvidal" tabindex="-1">Jorge Masvidal <a class="header-anchor" href="#jorge-masvidal" aria-label="Permalink to &quot;Jorge Masvidal&quot;">​</a></h1><p>Jorge Masvidal is a Cuban-American mixed martial artist and <a href="/entities/ufc">UFC</a> welterweight known for his public support of <a href="/entities/donald-trump">Donald Trump</a>.[1]</p><p>Masvidal fought Gilbert Burns in the welterweight co-main event of <a href="/concepts/ufc-287">UFC 287</a> in Miami in April 2023.[1] Trump attended the card at the Kaseya Center, and reporting noted that he and Masvidal had formed a friendship over the years, with Masvidal having previously shown support for the 45th president.[1]</p><p>According to <a href="/entities/badlands-media">Badlands Media</a> commentator <a href="/entities/burning-bright">Burning Bright</a>, Trump received &quot;a deafening pop&quot; on the pay-per-view broadcast in front of the largely Hispanic Miami audience that had come to see Masvidal, an anecdote he offered as evidence of the growing strength of the <a href="/concepts/america-first-movement">America First movement</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trans Mayhem, WW3 &amp; Trump&#39;s Travels&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-12e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-12e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jorge-masvidal.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jorgeMasvidal = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jorgeMasvidal as default
};
