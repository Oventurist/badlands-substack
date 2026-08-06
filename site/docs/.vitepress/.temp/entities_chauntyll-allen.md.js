import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chauntyll Allen","description":"","frontmatter":{"title":"Chauntyll Allen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["minnesota","activism","arrests","st-paul"],"sources":["raw/badlands-brief-695.md"],"confidence":"low"},"headers":[],"relativePath":"entities/chauntyll-allen.md","filePath":"entities/chauntyll-allen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/chauntyll-allen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chauntyll-allen" tabindex="-1">Chauntyll Allen <a class="header-anchor" href="#chauntyll-allen" aria-label="Permalink to &quot;Chauntyll Allen&quot;">​</a></h1><p>Chauntyll Louisa Allen is one of two individuals arrested by federal authorities in January 2026 in connection with a coordinated attack on <a href="/entities/cities-church">Cities Church</a> in St. Paul, Minnesota.[1]</p><p>US Attorney General <a href="/entities/pam-bondi">Pam Bondi</a> identified Allen and <a href="/entities/nekima-levy-armstrong">Nekima Levy Armstrong</a> as having been taken into custody at her direction, with <a href="/entities/homeland-security-investigations">Homeland Security Investigations</a> and <a href="/entities/fbi">FBI</a> agents executing the arrests in Minnesota.[1] The arrests followed a protest at the church the previous weekend in which activists disrupted services to target a pastor they said was linked to US Immigration and Customs Enforcement.[1] Federal officials are investigating potential civil rights and other charges.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Election Bombshells, Peace Board Bangers, &amp; Clintons in Contempt&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-695" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-695</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/chauntyll-allen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chauntyllAllen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chauntyllAllen as default
};
