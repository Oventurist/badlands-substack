import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jamie McDonald","description":"","frontmatter":{"title":"Jamie McDonald","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["doj","us-attorney","sdny","nominations"],"sources":["raw/badlands-brief-c91.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jamie-mcdonald.md","filePath":"entities/jamie-mcdonald.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jamie-mcdonald.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jamie-mcdonald" tabindex="-1">Jamie McDonald <a class="header-anchor" href="#jamie-mcdonald" aria-label="Permalink to &quot;Jamie McDonald&quot;">​</a></h1><p>Jamie McDonald is the individual President <a href="/entities/donald-trump">Donald Trump</a> identified in June 2026 as his preferred replacement for <a href="/entities/jay-clayton">Jay Clayton</a> as United States Attorney for the Southern District of New York.[1]</p><h2 id="role-in-the-dni-nomination-standoff" tabindex="-1">Role in the DNI nomination standoff <a class="header-anchor" href="#role-in-the-dni-nomination-standoff" aria-label="Permalink to &quot;Role in the DNI nomination standoff&quot;">​</a></h2><p>McDonald&#39;s pending confirmation became a pivot point in the dispute over the directorship of national intelligence. Trump announced in June 2026 that he was canceling Clayton&#39;s Senate confirmation hearing to become director of national intelligence, saying he did not want to remove Clayton from his current post as US attorney until McDonald was confirmed as his successor.[1] Trump stated that the administration &quot;will not be going forward until Jamie McDonald is approved to be US Attorney.&quot;[1]</p><p>The practical effect of the delay was to leave <a href="/entities/bill-pulte">Bill Pulte</a> on track to assume the role of acting director of national intelligence, following the departure of <a href="/entities/tulsi-gabbard">Tulsi Gabbard</a>.[1] The standoff was entangled with negotiations over reauthorization of <a href="/concepts/section-702">Section 702</a> of the <a href="/concepts/foreign-intelligence-surveillance-act">Foreign Intelligence Surveillance Act</a>, which had lapsed the previous week.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Rugs the Deltas with an Early MOU&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c91" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c91</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jamie-mcdonald.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jamieMcdonald = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jamieMcdonald as default
};
