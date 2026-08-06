import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Helen McCaw","description":"","frontmatter":{"title":"Helen McCaw","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bank-of-england","finance","alien-disclosure","uk"],"sources":["raw/badlands-brief-02a.md"],"confidence":"low"},"headers":[],"relativePath":"entities/helen-mccaw.md","filePath":"entities/helen-mccaw.md","lastUpdated":null}');
const _sfc_main = { name: "entities/helen-mccaw.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="helen-mccaw" tabindex="-1">Helen McCaw <a class="header-anchor" href="#helen-mccaw" aria-label="Permalink to &quot;Helen McCaw&quot;">​</a></h1><p><strong>Helen McCaw</strong> is a senior analyst at the <a href="/entities/bank-of-england">Bank of England</a> who, in January 2026, was associated with a public warning that financial markets could collapse if the U.S. government were to announce the existence of extraterrestrial life.[1]</p><p>The warning drew attention in the Badlands corpus chiefly for its timing. <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> noted that the article reporting McCaw&#39;s warning itself acknowledged that the disclosure trend had been years in the making, making it unclear why a senior central bank analyst would choose that particular moment to raise the alarm.[1] The proximity to the lifting of Venezuelan sanctions and the <a href="/concepts/safeguarding-venezuelan-oil-revenue-executive-order">executive order shielding Venezuelan oil revenue</a> from bank creditors led him to conclude that the timing &quot;can&#39;t be a coincidence,&quot; and to fold the episode into the broader <a href="/concepts/alien-disclosure-op">alien disclosure</a> narrative thread.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arctic Escalation and Tropic Trouble for the Financial System&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-02a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-02a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/helen-mccaw.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const helenMccaw = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  helenMccaw as default
};
