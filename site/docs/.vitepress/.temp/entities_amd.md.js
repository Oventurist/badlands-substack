import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AMD","description":"","frontmatter":{"title":"AMD","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","semiconductors","artificial-intelligence"],"sources":["raw/badlands-brief-bb1.md","raw/badlands-news-brief-18e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/amd.md","filePath":"entities/amd.md","lastUpdated":null}');
const _sfc_main = { name: "entities/amd.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="amd" tabindex="-1">AMD <a class="header-anchor" href="#amd" aria-label="Permalink to &quot;AMD&quot;">​</a></h1><p>AMD (Advanced Micro Devices) is a U.S. semiconductor company named, alongside <a href="/entities/nvidia">Nvidia</a>, as one of the foreign AI-chip providers that Beijing&#39;s <a href="/concepts/china-ai-data-center-buildout">AI data center buildout</a> plan explicitly aims to displace.[1]</p><p>Under the plan, at least 80 percent of core technology — notably AI chips — is to be sourced from Chinese suppliers such as <a href="/entities/huawei">Huawei</a>, accelerating the maturation of domestic alternatives to AMD and Nvidia hardware.[1]</p><h2 id="exclusion-from-chinese-government-procurement-2024" tabindex="-1">Exclusion from Chinese government procurement (2024) <a class="header-anchor" href="#exclusion-from-chinese-government-procurement-2024" aria-label="Permalink to &quot;Exclusion from Chinese government procurement (2024)&quot;">​</a></h2><p>In March 2024, <a href="/entities/china">China</a> issued new government procurement guidelines phasing AMD processors, along with those of <a href="/entities/intel">Intel</a>, out of state PCs and servers as part of a drive to replace foreign technology with domestic alternatives.[2] The guidance also targeted Microsoft&#39;s Windows operating system and foreign database software, and accompanied a localization push inside state-owned enterprises.[2] The measure was described as retaliation for US restrictions on Chinese access to advanced Nvidia AI chips and ASML lithography equipment.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Peaceful Retaliations, Futuristic Fusions and Based Puritans&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-bb1" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-bb1</a></li><li>Badlands Media — &quot;Badlands News Brief: Irregular Warfare, Washington &amp; So Much Winning&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-18e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-18e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/amd.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const amd = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  amd as default
};
