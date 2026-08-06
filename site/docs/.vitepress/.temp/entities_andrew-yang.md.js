import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Andrew Yang","description":"","frontmatter":{"title":"Andrew Yang","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["politician","universal-basic-income","artificial-intelligence","2020-election"],"sources":["raw/badlands-brief-f62.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/andrew-yang.md","filePath":"entities/andrew-yang.md","lastUpdated":null}');
const _sfc_main = { name: "entities/andrew-yang.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="andrew-yang" tabindex="-1">Andrew Yang <a class="header-anchor" href="#andrew-yang" aria-label="Permalink to &quot;Andrew Yang&quot;">​</a></h1><p>Andrew Yang is an American entrepreneur and former presidential candidate who ran in the 2020 Democratic primary on a platform centered on automation-driven job loss and universal basic income.[1]</p><h2 id="automation-ubi-and-the-2026-ai-debate" tabindex="-1">Automation, UBI, and the 2026 AI debate <a class="header-anchor" href="#automation-ubi-and-the-2026-ai-debate" aria-label="Permalink to &quot;Automation, UBI, and the 2026 AI debate&quot;">​</a></h2><p>In commentary on the 2026 controversy over artificial intelligence and employment, Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> recalled that Yang had presented technological displacement as the imperative for universal basic income during the 2020 election, and that &quot;most people laughed him off as a technology-enabled communist.&quot;[1] She argued that voter worry about AI taking jobs had arrived &quot;way too little too late,&quot; noting that World Economic Forum partners had described the transformation as inevitable since 2015 or earlier.[1]</p><p>Ashe advanced an alternative to government-funded UBI: rather than paying displaced workers from public funds, humans should own their data and technology companies should be required to pay users for it — a change she argued would slow AI deployment, raise costs on AI firms, create liability for exploitation, generate new human jobs, and properly compensate people for what she called their most valuable asset.[1] She paired this with a call for a &quot;Data Bill of Rights, with teeth,&quot; restricting infringement by both technology companies and the U.S. government.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Sovereign Signals, Israeli Subversion, and the SAVE America Ultimatum&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-f62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-f62</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/andrew-yang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const andrewYang = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  andrewYang as default
};
