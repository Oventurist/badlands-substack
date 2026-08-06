import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hyde Amendment","description":"","frontmatter":{"title":"Hyde Amendment","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["healthcare","abortion","congress","appropriations"],"sources":["raw/badlands-news-brief-824.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/hyde-amendment.md","filePath":"concepts/hyde-amendment.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/hyde-amendment.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hyde-amendment" tabindex="-1">Hyde Amendment <a class="header-anchor" href="#hyde-amendment" aria-label="Permalink to &quot;Hyde Amendment&quot;">​</a></h1><p>The Hyde amendment is a longstanding U.S. legislative provision barring federal funding for abortion.[1]</p><h2 id="_2025-health-care-negotiations" tabindex="-1">2025 health care negotiations <a class="header-anchor" href="#_2025-health-care-negotiations" aria-label="Permalink to &quot;2025 health care negotiations&quot;">​</a></h2><p>In November 2025 the fight over the Hyde amendment emerged as one of several obstacles to a deal extending expiring <a href="/concepts/affordable-care-act">Affordable Care Act</a> subsidies.[1] The White House&#39;s health care framework was silent on how it would handle abortion, a decision that caught congressional Republicans off guard and created what Politico described as a headache on Capitol Hill.[1] For many GOP members, an expansion of abortion restrictions within Obamacare was regarded as a must-have element of any agreement, and aides granted anonymity said lawmakers were left in the dark about whether President <a href="/entities/donald-trump">Donald Trump</a> would ultimately stake out a public position.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Saudi Scoops, Slender Stabbers, &amp; Scorned Scouts&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-824" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-824</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/hyde-amendment.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hydeAmendment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  hydeAmendment as default
};
