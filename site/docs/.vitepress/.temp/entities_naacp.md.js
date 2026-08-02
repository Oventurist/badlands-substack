import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"NAACP","description":"","frontmatter":{"title":"NAACP","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["civil-rights","advocacy-organization","litigation","voting-rights"],"sources":["raw/always-fight-back.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/naacp.md","filePath":"entities/naacp.md","lastUpdated":null}');
const _sfc_main = { name: "entities/naacp.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="naacp" tabindex="-1">NAACP <a class="header-anchor" href="#naacp" aria-label="Permalink to &quot;NAACP&quot;">​</a></h1><p>The National Association for the Advancement of Colored People (NAACP) is one of the oldest and best-known civil rights organizations in the United States. In the Badlands Media corpus it appears principally through its Colorado/Montana/Wyoming Area Conference, which served as lead plaintiff in <a href="/concepts/naacp-v-useip">NAACP et al. v. USEIP et al.</a></p><p>That suit, filed on March 9, 2022 together with the <a href="/entities/league-of-women-voters">League of Women Voters of Colorado</a> and <a href="/entities/mi-familia-vota">Mi Familia Vota</a>, alleged voter intimidation and suppression by the <a href="/entities/useip">United States Election Integrity Plan</a> under Section 11(b) of the <a href="/concepts/voting-rights-act-of-1965">Voting Rights Act of 1965</a> and the <a href="/concepts/ku-klux-klan-act-of-1871">Ku Klux Klan Act of 1871</a>. In the essay <a href="/concepts/always-fight-back">&quot;Always Fight Back&quot;</a>, defendant <a href="/entities/ashe-in-america">Ashe in America</a> argues that the organization&#39;s participation in the case amounted to attaching the stigma of the Klan to lawful canvassers without evidence, and describes the court&#39;s July 2024 findings — that plaintiffs &quot;failed to introduce any evidence that can remotely be perceived as intimidating or threatening&quot; and that a witness had been prompted by counsel to name USEIP — as &quot;a damning rebuke of both the civil rights organizations and their lawyers.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/always-fight-back" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/naacp.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const naacp = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  naacp as default
};
