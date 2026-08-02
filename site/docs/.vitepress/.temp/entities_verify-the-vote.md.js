import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Verify the Vote","description":"","frontmatter":{"title":"Verify the Vote","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","arizona","election-integrity","poll-watching","tea-party"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/verify-the-vote.md","filePath":"entities/verify-the-vote.md","lastUpdated":null}');
const _sfc_main = { name: "entities/verify-the-vote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="verify-the-vote" tabindex="-1">Verify the Vote <a class="header-anchor" href="#verify-the-vote" aria-label="Permalink to &quot;Verify the Vote&quot;">​</a></h1><p>Verify the Vote is an Arizona election-integrity group described in press coverage as a partner of the Houston-based <a href="/entities/true-the-vote">True the Vote</a> and characterized by critics as a &quot;voter fraud alarmist&quot; organization. Like its larger affiliate, it grew out of Tea Party–era poll-watching activism.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>The group is mentioned in <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> through a quoted <a href="/entities/talking-points-memo">Talking Points Memo</a> article of August 22, 2019 headlined &quot;GOP Voter Fraud Hawk Hired For Arizona AG&#39;s New &#39;Elections Integrity&#39; Unit.&quot; That article reported that <a href="/entities/jennifer-wright">Jennifer Wright</a> — &quot;a former GOP mayoral candidate who once worked for the voter fraud alarmist group Verify the Vote&quot; — had been hired as an assistant attorney general focused on election integrity, as first reported by KPNX, the NBC affiliate in Phoenix.</p><p><a href="/entities/kitty-gillespie">Kitty Gillespie</a> reproduces this description not as an indictment but as a credential, framing Wright&#39;s activist background as the reason she could be trusted to press <a href="/entities/maricopa-county">Maricopa County</a> for answers after the 2022 general election.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/verify-the-vote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const verifyTheVote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  verifyTheVote as default
};
