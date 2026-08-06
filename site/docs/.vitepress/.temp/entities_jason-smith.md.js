import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jason Smith","description":"","frontmatter":{"title":"Jason Smith","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","missouri","ways-and-means"],"sources":["raw/badlands-news-brief-090.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jason-smith.md","filePath":"entities/jason-smith.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jason-smith.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jason-smith" tabindex="-1">Jason Smith <a class="header-anchor" href="#jason-smith" aria-label="Permalink to &quot;Jason Smith&quot;">​</a></h1><p>Jason Smith is a Republican member of the United States House of Representatives from Missouri who played a public role in releasing testimony from <a href="/entities/internal-revenue-service">IRS</a> whistleblowers concerning the federal investigation of <a href="/entities/hunter-biden">Hunter Biden</a>.[1]</p><h2 id="role-in-the-irs-whistleblower-disclosures" tabindex="-1">Role in the IRS whistleblower disclosures <a class="header-anchor" href="#role-in-the-irs-whistleblower-disclosures" aria-label="Permalink to &quot;Role in the IRS whistleblower disclosures&quot;">​</a></h2><p>In June 2023, Smith stated that U.S. Attorney <a href="/entities/david-weiss">David Weiss</a> had sought to be appointed as a special counsel in the Hunter Biden case during the previous year and had been denied.[1] That claim formed part of a broader set of whistleblower allegations that the <a href="/entities/department-of-justice">Department of Justice</a> under Attorney General <a href="/entities/merrick-garland">Merrick Garland</a> had buried evidence of Hunter Biden&#39;s tax crimes and had reduced recommended felony charges to two misdemeanors.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Hunter Hunted, Billionaire Boxing &amp; Snopes Nopes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-090" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-090</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jason-smith.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jasonSmith = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jasonSmith as default
};
