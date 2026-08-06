import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Blake Masters","description":"","frontmatter":{"title":"Blake Masters","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","elections","republican-party","senate","america-first","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"low"},"headers":[],"relativePath":"entities/blake-masters.md","filePath":"entities/blake-masters.md","lastUpdated":null}');
const _sfc_main = { name: "entities/blake-masters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="blake-masters" tabindex="-1">Blake Masters <a class="header-anchor" href="#blake-masters" aria-label="Permalink to &quot;Blake Masters&quot;">​</a></h1><p>Blake Masters was the America First, Trump-endorsed Republican candidate for the United States Senate from Arizona in the <a href="/concepts/2022-arizona-general-election">2022 general election</a>.[1]</p><p>Masters is notable in <a href="/entities/badlands-media">Badlands Media</a> coverage of the post-election litigation chiefly for his absence from it. Writing on December 12, 2022, <a href="/entities/kitty-gillespie">Kitty Gillespie</a> reported that she could find no indication that Masters had filed any lawsuit contesting his race before the deadline that fell five days after the December 5 certification — the same deadline met by <a href="/entities/kari-lake">Kari Lake</a>, <a href="/entities/abe-hamadeh">Abe Hamadeh</a>, <a href="/entities/mark-finchem">Mark Finchem</a> and <a href="/entities/jeff-zink">Jeff Zink</a>.[1] She noted that she could not find that Masters had &quot;made a peep about anything this past week, even when all the lawsuits dropped,&quot; and speculated as to whether someone had told him not to file or whether he had simply been worn out by the vitriol of a year of campaigning.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Arizona Earthquake!&quot;, URL: <a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arizona-earthquake</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/blake-masters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blakeMasters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  blakeMasters as default
};
