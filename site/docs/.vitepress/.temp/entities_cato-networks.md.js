import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Cato Networks","description":"","frontmatter":{"title":"Cato Networks","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","cybersecurity","israel"],"sources":["raw/badlands-brief.md"],"confidence":"low"},"headers":[],"relativePath":"entities/cato-networks.md","filePath":"entities/cato-networks.md","lastUpdated":null}');
const _sfc_main = { name: "entities/cato-networks.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="cato-networks" tabindex="-1">Cato Networks <a class="header-anchor" href="#cato-networks" aria-label="Permalink to &quot;Cato Networks&quot;">​</a></h1><p>Cato Networks is a cybersecurity and networking company led by Israeli-American chief executive <a href="/entities/shlomo-kramer">Shlomo Kramer</a>.[1]</p><h2 id="public-profile" tabindex="-1">Public profile <a class="header-anchor" href="#public-profile" aria-label="Permalink to &quot;Public profile&quot;">​</a></h2><p>The company entered Badlands coverage on December 29, 2025, when Kramer appeared on CNBC in his capacity as Cato Networks CEO and argued for limiting the <a href="/concepts/first-amendment">First Amendment</a> to &quot;protect it&quot; from AI-generated deepfakes and misinformation.[1] In the same appearance he promoted AI-driven &quot;authenticity scores&quot; for social media content and closer government-platform cooperation to verify information, presented as national security measures against rising cyber warfare risks — a framing consistent with the company&#39;s cybersecurity business.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Iran&#39;s MIC, Our Boy Mam, &amp; Monumental Illumination&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/cato-networks.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const catoNetworks = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  catoNetworks as default
};
