import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"True the Vote","description":"","frontmatter":{"title":"True the Vote","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"entity","tags":["organization","election-integrity","tea-party","voter-id","poll-watching"],"sources":["raw/an-sos-from-ground-zero.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/true-the-vote.md","filePath":"entities/true-the-vote.md","lastUpdated":null}');
const _sfc_main = { name: "entities/true-the-vote.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="true-the-vote" tabindex="-1">True the Vote <a class="header-anchor" href="#true-the-vote" aria-label="Permalink to &quot;True the Vote&quot;">​</a></h1><p>True the Vote is a Houston-based election-integrity organization that grew out of the Tea Party group King Street Patriots. It is known for recruiting and training poll watchers, challenging voter registrations, and advocating restrictive election laws including voter identification requirements. Critics characterize it as a voter-suppression operation; its supporters regard it as a citizen-led check on election administration.</p><h2 id="role-in-the-corpus" tabindex="-1">Role in the corpus <a class="header-anchor" href="#role-in-the-corpus" aria-label="Permalink to &quot;Role in the corpus&quot;">​</a></h2><p>True the Vote appears in <a href="/concepts/an-sos-from-ground-zero">An SOS From Ground Zero</a> by way of a quoted <a href="/entities/talking-points-memo">Talking Points Memo</a> article of August 22, 2019, which described <a href="/entities/verify-the-vote">Verify the Vote</a> — the Arizona group for which <a href="/entities/jennifer-wright">Jennifer Wright</a> once worked — as &quot;a partner of the more well-known Houston-based group, True the Vote,&quot; and noted that &quot;in addition to its poll watcher campaign, True the Vote also advocates for restrictive election laws like voter ID.&quot;</p><p><a href="/entities/kitty-gillespie">Kitty Gillespie</a> cites this passage approvingly rather than critically, treating Wright&#39;s connection to the True the Vote network as evidence of her suitability to investigate <a href="/entities/maricopa-county">Maricopa County</a>: &quot;Sounds like our kind of gal!&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/an-sos-from-ground-zero" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/true-the-vote.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trueTheVote = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trueTheVote as default
};
