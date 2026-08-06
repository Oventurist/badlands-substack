import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"OpenTheBooks","description":"","frontmatter":{"title":"OpenTheBooks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["transparency","foia","nih","watchdog","government-spending"],"sources":["raw/badlands-news-brief-88b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/openthebooks.md","filePath":"entities/openthebooks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/openthebooks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="openthebooks" tabindex="-1">OpenTheBooks <a class="header-anchor" href="#openthebooks" aria-label="Permalink to &quot;OpenTheBooks&quot;">​</a></h1><p><strong>OpenTheBooks.com</strong> is a transparency watchdog organization that publishes government spending and payment records obtained through public-records litigation.[1]</p><h2 id="nih-royalty-disclosures" tabindex="-1">NIH royalty disclosures <a class="header-anchor" href="#nih-royalty-disclosures" aria-label="Permalink to &quot;NIH royalty disclosures&quot;">​</a></h2><p>In August 2023, OpenTheBooks published more than 1,500 pages of unredacted records identifying which companies paid which <a href="/entities/national-institutes-of-health">National Institutes of Health</a> scientists for which inventions and when, following a mostly successful Freedom of Information Act battle with the agency.[1] The records covered some 56,000 transactions adding up to more than $325 million, although the individual amounts for each payment and corresponding license were not listed.[1]</p><p>The disclosures showed that <a href="/entities/francis-collins">Francis Collins</a> and <a href="/entities/anthony-fauci">Anthony Fauci</a>, the longtime directors of NIH and its <a href="/entities/national-institute-of-allergy-and-infectious-diseases">National Institute of Allergy and Infectious Diseases</a> respectively, personally received 58 royalty payments from companies licensing inventions developed with taxpayer money.[1] Fauci received 37 payments from three companies between 2010 and 2021: 15 from Santa Cruz Biotechnology, which creates products for medical research including antibodies and made the fifth-most payments in the royalty database; 14 from Ancell Corp., which produces immunology tools; and eight from Chiron Corp., which was acquired by Novartis in 2006.[1] The findings were reported by <a href="/entities/just-the-news">Just the News</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;The Trump Hunt &amp; the Biden Blitz&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-88b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-88b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/openthebooks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const openthebooks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  openthebooks as default
};
