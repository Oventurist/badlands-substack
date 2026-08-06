import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Qui Tam Lawsuit","description":"","frontmatter":{"title":"Qui Tam Lawsuit","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["law","fraud","false-claims-act","doj","taxpayer-recovery"],"sources":["raw/badlands-news-brief-19a.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/qui-tam.md","filePath":"concepts/qui-tam.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/qui-tam.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="qui-tam-lawsuit" tabindex="-1">Qui Tam Lawsuit <a class="header-anchor" href="#qui-tam-lawsuit" aria-label="Permalink to &quot;Qui Tam Lawsuit&quot;">​</a></h1><p>A qui tam lawsuit is an action in which a private plaintiff sues on behalf of the United States government to recoup taxpayer dollars, typically alleging fraud, misuse, or theft of public funds.[1] Because the government is the real party in interest, the Justice Department retains the ability to intervene in, or move to dismiss, such actions.[1]</p><h2 id="crescent-dunes-application" tabindex="-1">Crescent Dunes application <a class="header-anchor" href="#crescent-dunes-application" aria-label="Permalink to &quot;Crescent Dunes application&quot;">​</a></h2><p>The mechanism came to prominence in Badlands coverage through the <a href="/concepts/crescent-dunes">Crescent Dunes</a> matter, in which a qui tam suit sought to recover the significant losses taxpayers allegedly incurred from a failed solar plant in Nevada.[1] On 5 November 2024, at 5:20 p.m. ET — less than an hour before the first polls closed on election night — an attorney with the <a href="/entities/department-of-justice">Justice Department</a> emailed plaintiffs&#39; lawyers to say the DOJ intended to dismiss the suit it had previously allowed to proceed, thereby undercutting the private push to recoup taxpayer losses.[1]</p><p><a href="/entities/ashe-in-america">Ashe in America</a> argued in the <a href="/concepts/badlands-news-brief">Badlands News Brief</a> that the timing indicated the DOJ was tying off investigations and lawsuits for nefarious purposes, since a legitimate action would be left to continue under incoming Attorney General <a href="/entities/pam-bondi">Pam Bondi</a> and her team rather than closed out in advance.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Ceasefires, Olive Branches ... and Scare Events?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-19a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-19a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/qui-tam.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quiTam = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  quiTam as default
};
