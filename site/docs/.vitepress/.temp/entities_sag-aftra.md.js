import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SAG-AFTRA","description":"","frontmatter":{"title":"SAG-AFTRA","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["labor","union","hollywood","actors","entertainment"],"sources":["raw/badlands-news-brief-47a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sag-aftra.md","filePath":"entities/sag-aftra.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sag-aftra.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sag-aftra" tabindex="-1">SAG-AFTRA <a class="header-anchor" href="#sag-aftra" aria-label="Permalink to &quot;SAG-AFTRA&quot;">​</a></h1><p>The Screen Actors Guild-American Federation of Television and Radio Artists (SAG-AFTRA) is the union representing American film and television performers.[1]</p><h2 id="_2023-strike" tabindex="-1">2023 strike <a class="header-anchor" href="#_2023-strike" aria-label="Permalink to &quot;2023 strike&quot;">​</a></h2><p>In July 2023, tens of thousands of SAG-AFTRA members hit the picket lines, joining 11,000 <a href="/entities/writers-guild-of-america">Writers Guild of America</a> screenwriters who had been on strike since May, bringing the film and TV industry to a halt for the second time in three years.[1] The dispute centered on how streaming, which advanced rapidly during the pandemic, had upended the economics of entertainment.[1]</p><p>Union president <a href="/entities/fran-drescher">Fran Drescher</a> announced the strike in a press conference, arguing that a changed business model necessarily required a changed contract and rejecting &quot;incremental changes on a contract that no longer honors what is happening right now.&quot;[1] Striking actors mobilized to picket studio lots and streamer headquarters, an escalation that coincided with the release of &quot;Oppenheimer.&quot;[1]</p><p>The strike is covered in greater detail at <a href="/concepts/2023-hollywood-labor-strikes">2023 Hollywood labor strikes</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The System of Systems Fades ... and Fights&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-47a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-47a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sag-aftra.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sagAftra = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  sagAftra as default
};
