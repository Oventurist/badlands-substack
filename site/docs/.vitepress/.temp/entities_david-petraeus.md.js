import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Petraeus","description":"","frontmatter":{"title":"David Petraeus","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["cia","general","benghazi"],"sources":["raw/a-dereliction-of-duty.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/david-petraeus.md","filePath":"entities/david-petraeus.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-petraeus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-petraeus" tabindex="-1">David Petraeus <a class="header-anchor" href="#david-petraeus" aria-label="Permalink to &quot;David Petraeus&quot;">​</a></h1><p>David Petraeus is a retired U.S. Army general who served as Director of the <a href="/entities/cia">CIA</a> from 2011 to 2012. In the Badlands Media article &quot;A Dereliction of Duty,&quot; Petraeus is identified as the CIA director during the September 11, 2012 attack on the U.S. consulate in <a href="/concepts/benghazi">Benghazi</a>, and as a participant in the covert weapons-smuggling operation that armed <a href="/entities/al-qaeda">Al Qaeda</a> and <a href="/entities/isis">ISIS</a>.</p><p>According to the article, the secret operation to smuggle weapons from Libya to Syria was conducted by the State Department under <a href="/entities/hillary-clinton">Hillary Clinton</a> and the CIA under Petraeus, with <a href="/entities/barack-obama">President Obama&#39;s</a> full approval. The source claims that Ambassador <a href="/entities/christopher-stevens">Christopher Stevens</a> was the liaison between weapons dealers and Al Qaeda in Libya, and that he was helping to coordinate these weapons transfers.</p><p>The article asserts that Petraeus was involved in the Benghazi cover-up, though it focuses more heavily on <a href="/entities/john-brennan">John Brennan</a> as the primary architect of the cover-up. It notes that Petraeus resigned as CIA director in November 2012 following an extramarital affair scandal, but claims that his departure was timed to protect him from scrutiny over the Benghazi operation.</p><p>According to the source, the CIA was smuggling weapons from Libya through Turkey into Syria, using a shadowy network of intermediaries including the <a href="/entities/muslim-brotherhood">Muslim Brotherhood</a>, paid for by Qatar, Saudi Arabia, and Turkey. The article claims this operation was exposed by a New York Times report in June 2012, and that the Obama administration was fearful of the exposure because it added fuel to the fire of Congressional investigations.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-dereliction-of-duty" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-petraeus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidPetraeus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidPetraeus as default
};
