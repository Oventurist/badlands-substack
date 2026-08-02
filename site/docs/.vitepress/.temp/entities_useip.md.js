import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"United States Election Integrity Plan","description":"","frontmatter":{"title":"United States Election Integrity Plan","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["election-integrity","colorado","grassroots","canvassing"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/useip.md","filePath":"entities/useip.md","lastUpdated":null}');
const _sfc_main = { name: "entities/useip.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="united-states-election-integrity-plan" tabindex="-1">United States Election Integrity Plan <a class="header-anchor" href="#united-states-election-integrity-plan" aria-label="Permalink to &quot;United States Election Integrity Plan&quot;">​</a></h1><p>The United States Election Integrity Plan (USEIP) is a Colorado-based grassroots election-integrity organization. It became the lead named defendant in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a>, the federal civil suit filed in March 2022 by the <a href="/entities/naacp">NAACP</a>&#39;s Colorado/Montana/Wyoming Area Conference, the <a href="/entities/league-of-women-voters">League of Women Voters of Colorado</a>, and <a href="/entities/mi-familia-vota">Mi Familia Vota</a>.</p><p>According to the essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a> by defendant <a href="/entities/ashe-in-america">Ashe in America</a>, the plaintiffs accused USEIP of deploying &quot;armed agents to knock on doors throughout the state of Colorado&quot; for the purpose of intimidating voters. The article states that no evidence supporting these allegations was produced in discovery, in motions practice, or at trial, and that the only witness who claimed to have been approached by USEIP admitted under oath that she had named the group at the suggestion of plaintiffs&#39; counsel. Judge <a href="/entities/charlotte-sweeney">Charlotte Sweeney</a> entered judgment for the defendants under Rule 52(c) in July 2024 and awarded them costs.</p><p>The organization&#39;s canvassing activity — door-to-door contact with Colorado residents in connection with questions about the 2020 election — is defended in the article as ordinary grassroots political organizing protected by the <a href="/concepts/first-amendment">First Amendment</a>, of the same type routinely conducted by the plaintiff organizations themselves.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/useip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useip = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  useip as default
};
