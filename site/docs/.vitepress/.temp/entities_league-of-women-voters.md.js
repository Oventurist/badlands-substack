import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"League of Women Voters","description":"","frontmatter":{"title":"League of Women Voters","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["advocacy-organization","voting-rights","litigation","colorado"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/league-of-women-voters.md","filePath":"entities/league-of-women-voters.md","lastUpdated":null}');
const _sfc_main = { name: "entities/league-of-women-voters.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="league-of-women-voters" tabindex="-1">League of Women Voters <a class="header-anchor" href="#league-of-women-voters" aria-label="Permalink to &quot;League of Women Voters&quot;">​</a></h1><p>The League of Women Voters is a long-established American civic organization focused on voter education, registration, and election administration. Its Colorado affiliate, the League of Women Voters of Colorado, was a plaintiff in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a> alongside the <a href="/entities/naacp">NAACP</a>&#39;s Colorado/Montana/Wyoming Area Conference and <a href="/entities/mi-familia-vota">Mi Familia Vota</a>.</p><p>The essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a> by defendant <a href="/entities/ashe-in-america">Ashe in America</a> notes that the League itself published a piece titled &quot;The 2016 Presidential Election was Rigged&quot; on November 23, 2016, and argues that this undercuts the plaintiffs&#39; position that questioning an election outcome is inherently intimidating conduct. The article also observes that the League, like the other plaintiff organizations, engages in political canvassing as a routine part of its work — the same activity the suit sought to characterize as voter intimidation when performed by the <a href="/entities/useip">United States Election Integrity Plan</a>.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/league-of-women-voters.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const leagueOfWomenVoters = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  leagueOfWomenVoters as default
};
