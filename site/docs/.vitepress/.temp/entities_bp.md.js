import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"BP","description":"","frontmatter":{"title":"BP","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["energy","oil","lobbying","atlantic-council","blackrock"],"sources":["raw/and-iran-iran-so-far-away.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/bp.md","filePath":"entities/bp.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bp" tabindex="-1">BP <a class="header-anchor" href="#bp" aria-label="Permalink to &quot;BP&quot;">​</a></h1><p>BP, referred to in the source as British Petroleum, is a British multinational energy company identified in the Badlands Media essay <a href="/concepts/and-iran-iran-so-far-away">&quot;And Iran, Iran So Far Away&quot;</a> as one of the major Western energy firms that fund the <a href="/entities/atlantic-council">atlantic-council</a>.</p><p>The article places BP alongside <a href="/entities/chevron">chevron</a>, <a href="/entities/exxonmobil">Exxon</a> and <a href="/entities/shell">Royal Dutch Shell</a> as donors with &quot;a vested interest in the Iran deal,&quot; arguing that their financial support of the Council translates into influence over the <a href="/entities/state-department">state-department</a>, the <a href="/entities/cia">cia</a> and the <a href="/entities/pentagon">pentagon</a> and the ability to lobby for policies that would open <a href="/entities/iran">iran</a>. It further notes that <a href="/entities/blackrock">blackrock</a> holds considerable — if not majority — equity stakes in BP and the other majors, all of which stood to gain tremendously from the <a href="/concepts/joint-comprehensive-plan-of-action">JCPOA</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/and-iran-iran-so-far-away" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bp as default
};
