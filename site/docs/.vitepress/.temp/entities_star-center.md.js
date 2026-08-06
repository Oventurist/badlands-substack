import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Star Center","description":"","frontmatter":{"title":"Star Center","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","maricopa-county","elections","vendors","ballot-curing","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"low"},"headers":[],"relativePath":"entities/star-center.md","filePath":"entities/star-center.md","lastUpdated":null}');
const _sfc_main = { name: "entities/star-center.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="star-center" tabindex="-1">Star Center <a class="header-anchor" href="#star-center" aria-label="Permalink to &quot;Star Center&quot;">​</a></h1><p>The Star Center is described in <a href="/entities/kari-lake">Kari Lake</a>&#39;s December 2022 election contest as a third-party contractor involved in the curing of ballots for <a href="/entities/maricopa-county">Maricopa County</a> during the <a href="/concepts/2022-arizona-general-election">2022 Arizona general election</a>.[1]</p><p>According to witness material summarized in the complaint, the Star Center cured ballots &quot;completely off site&quot; with no observers present, and the workers involved &quot;were not able to see the actual ballot with the signature on it.&quot;[1] The allegation formed part of the suit&#39;s broader attack on the county&#39;s signature-verification regime, which also included claims that level-two managers were reversing and approving previously rejected signatures largely outside the accountability of observers, that rejected ballots were re-run through processing because managers wanted them approved, and that there was no way to know who had placed &quot;verified&quot; stickers on ballots — leaving the system, in one witness&#39;s words, &quot;wide open to abuse.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Arizona Earthquake!&quot;, URL: <a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arizona-earthquake</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/star-center.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const starCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  starCenter as default
};
