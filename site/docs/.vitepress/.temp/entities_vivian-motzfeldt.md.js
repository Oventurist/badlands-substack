import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Vivian Motzfeldt","description":"","frontmatter":{"title":"Vivian Motzfeldt","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["greenland","diplomacy","arctic"],"sources":["raw/badlands-brief-e3b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/vivian-motzfeldt.md","filePath":"entities/vivian-motzfeldt.md","lastUpdated":null}');
const _sfc_main = { name: "entities/vivian-motzfeldt.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="vivian-motzfeldt" tabindex="-1">Vivian Motzfeldt <a class="header-anchor" href="#vivian-motzfeldt" aria-label="Permalink to &quot;Vivian Motzfeldt&quot;">​</a></h1><p>Vivian Motzfeldt is the Foreign Minister of <a href="/entities/greenland">Greenland</a>.[1]</p><p>In January 2026 Motzfeldt announced via social media a joint Greenlandic–Danish request for a high-level ministerial meeting with US Secretary of State <a href="/entities/marco-rubio">Marco Rubio</a> to address escalating American interest in acquiring the Arctic territory.[1] The joint request followed repeated unsuccessful attempts throughout 2025 to engage Rubio, and aimed to establish direct diplomatic channels in response to strong statements from the <a href="/entities/trump-administration">Trump administration</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mad-Lad Maduro, Media Meltdowns &amp; Weapons of the Future&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/vivian-motzfeldt.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const vivianMotzfeldt = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  vivianMotzfeldt as default
};
