import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Talking Points Memo","description":"","frontmatter":{"title":"Talking Points Memo","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["media","news-outlet","progressive","journalism"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":false},"headers":[],"relativePath":"entities/talking-points-memo.md","filePath":"entities/talking-points-memo.md","lastUpdated":null}');
const _sfc_main = { name: "entities/talking-points-memo.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="talking-points-memo" tabindex="-1">Talking Points Memo <a class="header-anchor" href="#talking-points-memo" aria-label="Permalink to &quot;Talking Points Memo&quot;">​</a></h1><p>Talking Points Memo (TPM) is an American online political news publication founded by Josh Marshall, generally identified with a liberal or progressive editorial perspective and known for investigative reporting on Republican politics and election law.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>TPM appears in <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> as the source of biographical information on <a href="/entities/jennifer-wright">Jennifer Wright</a>. <a href="/entities/kitty-gillespie">Kitty Gillespie</a> quotes at length from an August 22, 2019 TPM article headlined &quot;GOP Voter Fraud Hawk Hired For Arizona AG&#39;s New &#39;Elections Integrity&#39; Unit,&quot; which described Wright as &quot;a Tea Party-linked voter fraud activist known for her vigilante approach to poll-monitoring&quot; and traced her prior work with <a href="/entities/verify-the-vote">Verify the Vote</a> and that group&#39;s ties to <a href="/entities/true-the-vote">True the Vote</a>. Gillespie credits the account @PrayingMedic with pointing her to the article.</p><p>The episode is a characteristic instance of the corpus&#39;s use of adversarial mainstream reporting: rather than disputing TPM&#39;s characterization, Gillespie adopts it wholesale and inverts its valence, concluding, &quot;Sounds like our kind of gal!&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/talking-points-memo.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const talkingPointsMemo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  talkingPointsMemo as default
};
