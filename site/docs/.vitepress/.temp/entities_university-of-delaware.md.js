import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"University of Delaware","description":"","frontmatter":{"title":"University of Delaware","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","biden","classified-documents"],"sources":["raw/badlands-news-brief-2f8.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/university-of-delaware.md","filePath":"entities/university-of-delaware.md","lastUpdated":null}');
const _sfc_main = { name: "entities/university-of-delaware.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="university-of-delaware" tabindex="-1">University of Delaware <a class="header-anchor" href="#university-of-delaware" aria-label="Permalink to &quot;University of Delaware&quot;">​</a></h1><p>The University of Delaware is the alma mater of President <a href="/entities/joe-biden">Joe Biden</a> and the repository of an extensive collection of his Senate papers.[1]</p><h2 id="fbi-searches-in-the-classified-documents-investigation" tabindex="-1">FBI searches in the classified documents investigation <a class="header-anchor" href="#fbi-searches-in-the-classified-documents-investigation" aria-label="Permalink to &quot;FBI searches in the classified documents investigation&quot;">​</a></h2><p>CNN reported on February 15, 2023 that the <a href="/entities/fbi">FBI</a> had conducted two previously undisclosed searches at the University of Delaware in connection with the investigation into Biden&#39;s handling of classified documents.[1] The searches took place in recent weeks with the consent and cooperation of the president&#39;s legal team, and investigators retrieved materials from two university locations on two different days.[1] The material did not appear to bear classified markings but was being reviewed by the FBI.[1] The university library houses papers from Biden&#39;s time in the Senate, described in Badlands commentary as some 1,850 boxes whose access requires Biden&#39;s consent.[1]</p><p><a href="/entities/just-human">Just Human</a> argued in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> that Biden was granting consent precisely to avoid being served a search warrant, and that the <a href="/concepts/biden-classified-documents-scandal">classified documents investigation</a> appeared to encompass far more than misplaced papers from his vice presidency.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Media Panic, Elitist Advances &amp; Dead Chickens&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2f8" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2f8</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/university-of-delaware.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const universityOfDelaware = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  universityOfDelaware as default
};
