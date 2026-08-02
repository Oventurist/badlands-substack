import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"O. J. Simpson","description":"","frontmatter":{"title":"O. J. Simpson","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["oj-simpson",1994,"media-spectacle","mind-control","racial-division"],"sources":["raw/a-journey-of-ever-changing-truths.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/oj-simpson.md","filePath":"entities/oj-simpson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oj-simpson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="o-j-simpson" tabindex="-1">O. J. Simpson <a class="header-anchor" href="#o-j-simpson" aria-label="Permalink to &quot;O. J. Simpson&quot;">​</a></h1><p>O. J. Simpson was the American football star whose 1994–1995 murder trial dominated American television. The Badlands Media essay <a href="/concepts/a-journey-of-ever-changing-truths">A Journey of Ever-changing Truths</a> uses the case as a component of its argument that the mid-1990s saw a deliberate campaign to deepen racial division in the United States.</p><p>According to <a href="/entities/erik-carlson">Erik Carlson</a>, Simpson &quot;allegedly killed his ex-wife and a man he believed to be her lover&quot; in 1994 — the same year that President <a href="/entities/bill-clinton">Bill Clinton</a> and Senator <a href="/entities/joe-biden">Joe Biden</a> advanced the Crime Bill of 1994, a coincidence the article treats as significant rather than accidental. Americans watched the white Ford Bronco make its slow-speed police chase along the Los Angeles freeways, and the source notes as an aside that more pizzas were delivered on that day than on any other day in American history.</p><p>The article emphasizes the saturation of the coverage: twenty-four-hour attention to the incident and the ensuing trial, with Americans &quot;glued to their TVs&quot; and unable to get enough. Carlson writes that &quot;it was like mind control; check that, it literally WAS mind control.&quot;</p><p>On the racial dimension, the source records that many in the black community supported Simpson and believed him innocent while most in the white community believed him guilty. When a jury containing a single white juror acquitted him, no riots followed, but &quot;a deep-seated anger set in&quot; — an outcome the essay places alongside the <a href="/entities/rodney-king">Rodney King</a> beating and the 1992 Los Angeles riots in its account of engineered racial polarization.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-journey-of-ever-changing-truths" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oj-simpson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ojSimpson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ojSimpson as default
};
