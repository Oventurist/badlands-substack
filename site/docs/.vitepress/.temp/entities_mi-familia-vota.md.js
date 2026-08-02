import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mi Familia Vota","description":"","frontmatter":{"title":"Mi Familia Vota","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["advocacy-organization","voting-rights","litigation","latino-politics"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/mi-familia-vota.md","filePath":"entities/mi-familia-vota.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mi-familia-vota.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mi-familia-vota" tabindex="-1">Mi Familia Vota <a class="header-anchor" href="#mi-familia-vota" aria-label="Permalink to &quot;Mi Familia Vota&quot;">​</a></h1><p>Mi Familia Vota is a national civic-engagement organization focused on Latino voter registration, turnout, and political participation. It was one of three plaintiff organizations in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a>, joining the <a href="/entities/naacp">NAACP</a>&#39;s Colorado/Montana/Wyoming Area Conference and the <a href="/entities/league-of-women-voters">League of Women Voters of Colorado</a> in the March 2022 complaint against the <a href="/entities/useip">United States Election Integrity Plan</a>.</p><p>In <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a>, defendant <a href="/entities/ashe-in-america">Ashe in America</a> groups Mi Familia Vota with the other plaintiffs as organizations that themselves conduct door-to-door canvassing as a matter of business, arguing that their litigation position — that canvassing by election skeptics constitutes intimidation — could not be reconciled with their own practices. The case ended in July 2024 with judgment for the defendants and an award of costs.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mi-familia-vota.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const miFamiliaVota = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  miFamiliaVota as default
};
