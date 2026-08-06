import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trevor Noah","description":"","frontmatter":{"title":"Trevor Noah","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","comedy","hollywood","grammy"],"sources":["raw/badlands-brief-ac2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/trevor-noah.md","filePath":"entities/trevor-noah.md","lastUpdated":null}');
const _sfc_main = { name: "entities/trevor-noah.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trevor-noah" tabindex="-1">Trevor Noah <a class="header-anchor" href="#trevor-noah" aria-label="Permalink to &quot;Trevor Noah&quot;">​</a></h1><p>Trevor Noah is a comedian and television host who served as host of the <a href="/concepts/68th-annual-grammy-awards">68th Annual Grammy Awards</a>, broadcast live from Crypto.com Arena in Los Angeles on February 1, 2026.[1]</p><p>During the ceremony Noah made on-air comments about President <a href="/entities/donald-trump">Donald Trump</a> and <a href="/entities/jeffrey-epstein">Jeffrey Epstein</a>, asserting that Trump and <a href="/entities/bill-clinton">Bill Clinton</a> had spent time on Epstein Island.[1] Trump responded on <a href="/entities/truth-social">Truth Social</a>, calling the statement false and defamatory, saying he had never been to the island &quot;nor anywhere close,&quot; and describing Noah as &quot;a total loser&quot; and &quot;almost as bad as Jimmy Kimmel at the Low Ratings Academy Awards.&quot;[1] Trump said he would send his lawyers to sue Noah, invoking prior litigation against other media figures and <a href="/entities/cbs">CBS</a> as precedent.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;NeoCon Goggles &amp; Phantom Whistleblowers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-ac2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-ac2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/trevor-noah.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trevorNoah = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trevorNoah as default
};
