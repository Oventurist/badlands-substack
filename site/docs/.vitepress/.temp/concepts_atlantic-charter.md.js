import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Atlantic Charter","description":"","frontmatter":{"title":"Atlantic Charter","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"concept","tags":["fdr","international-law","wwii","anglo-american-relations"],"sources":["raw/a-gateway-to-a-new-world-of-cooperation.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"concepts/atlantic-charter.md","filePath":"concepts/atlantic-charter.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/atlantic-charter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="atlantic-charter" tabindex="-1">Atlantic Charter <a class="header-anchor" href="#atlantic-charter" aria-label="Permalink to &quot;Atlantic Charter&quot;">​</a></h1><p>The Atlantic Charter was the joint statement of war and post-war aims issued by <a href="/entities/franklin-d-roosevelt">Franklin Roosevelt</a> and Winston Churchill in 1941. In the Badlands Media article <a href="/concepts/a-gateway-to-a-new-world-of-cooperation">A Gateway to a New World of Cooperation</a>, <a href="/entities/matthew-ehret">Matthew Ehret</a> cites the Charter as one of the documents whose spirit rests on Roosevelt&#39;s <a href="/concepts/four-freedoms">Four Freedoms</a>, alongside the <a href="/concepts/un-charter">UN Charter</a> and the original <a href="/concepts/bretton-woods-system">Bretton Woods</a> design.</p><h2 id="the-revised-charter" tabindex="-1">The revised charter <a class="header-anchor" href="#the-revised-charter" aria-label="Permalink to &quot;The revised charter&quot;">​</a></h2><p>Ehret is careful to specify the original document, referring parenthetically to the version &quot;pre-Biden/Bojo edits&quot; and linking to commentary on the 2021 New Atlantic Charter signed by Joe Biden and Boris Johnson. The implication drawn in the article is that the later revision departed from the anti-colonial, sovereignty-respecting and development-oriented content of the 1941 text, in the same way that the <a href="/concepts/rules-based-international-order">rules-based international order</a> departs from the UN Charter.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-gateway-to-a-new-world-of-cooperation" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/atlantic-charter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const atlanticCharter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  atlanticCharter as default
};
