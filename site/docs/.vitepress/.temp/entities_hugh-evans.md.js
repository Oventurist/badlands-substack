import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hugh Evans","description":"","frontmatter":{"title":"Hugh Evans","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["fbi","elections","2020-election","georgia"],"sources":["raw/badlands-brief-05f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/hugh-evans.md","filePath":"entities/hugh-evans.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hugh-evans.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hugh-evans" tabindex="-1">Hugh Evans <a class="header-anchor" href="#hugh-evans" aria-label="Permalink to &quot;Hugh Evans&quot;">​</a></h1><p>Hugh Evans is an <a href="/entities/fbi">FBI</a> Special Agent assigned to the Atlanta Field Office who authored the search warrant affidavits underpinning the bureau&#39;s 2026 investigation into <a href="/entities/fulton-county">Fulton County</a>&#39;s handling of ballots from the 2020 presidential election.[1]</p><h2 id="role-in-the-fulton-county-probe" tabindex="-1">Role in the Fulton County probe <a class="header-anchor" href="#role-in-the-fulton-county-probe" aria-label="Permalink to &quot;Role in the Fulton County probe&quot;">​</a></h2><p>Evans&#39;s affidavits, filed with federal court documents on February 10, 2026, by the <a href="/entities/department-of-justice">Department of Justice</a>, describe alleged deficiencies in vote counting and record-keeping, including missing ballot images, inconsistent totals across recounts, chain-of-custody documentation issues, duplicate ballot images, and absentee ballots lacking the creases typically expected from being folded and mailed.[1] He wrote that access to the physical ballots was necessary to determine whether the anomalies stemmed from administrative errors or intentional acts.[1]</p><p>Evans emphasized that any deliberate interference with election records would constitute a violation of federal law even if it did not alter the outcome of Georgia&#39;s 2020 presidential race, which <a href="/entities/donald-trump">Donald Trump</a> lost by a narrow margin.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Fiesta of Fake Elections, Fake Files &amp; Fake Crises&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-05f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-05f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hugh-evans.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hughEvans = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hughEvans as default
};
