import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Massachusetts v. EPA","description":"","frontmatter":{"title":"Massachusetts v. EPA","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["supreme-court","climate","regulation","law"],"sources":["raw/badlands-brief-05f.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/massachusetts-v-epa.md","filePath":"concepts/massachusetts-v-epa.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/massachusetts-v-epa.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="massachusetts-v-epa" tabindex="-1">Massachusetts v. EPA <a class="header-anchor" href="#massachusetts-v-epa" aria-label="Permalink to &quot;Massachusetts v. EPA&quot;">​</a></h1><p>Massachusetts v. EPA is the U.S. Supreme Court decision that enabled the <a href="/entities/environmental-protection-agency">Environmental Protection Agency</a> to treat greenhouse gases as pollutants subject to regulation under the <a href="/concepts/clean-air-act">Clean Air Act</a>.[1]</p><h2 id="significance-in-the-badlands-framing" tabindex="-1">Significance in the Badlands framing <a class="header-anchor" href="#significance-in-the-badlands-framing" aria-label="Permalink to &quot;Significance in the Badlands framing&quot;">​</a></h2><p>Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> wrote that the case enabled the 2009 <a href="/concepts/endangerment-finding">endangerment finding</a>, describing the resulting regime as a &quot;bureaucratic nightmare&quot; that unlocked sweeping carbon mandates across energy, manufacturing, transportation, and logistics.[1] Environmental groups challenging the 2026 rescission cited Supreme Court precedent upholding the finding as a basis for litigation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Fiesta of Fake Elections, Fake Files &amp; Fake Crises&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-05f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-05f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/massachusetts-v-epa.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const massachusettsVEpa = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  massachusettsVEpa as default
};
