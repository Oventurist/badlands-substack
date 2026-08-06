import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michelle Behnke","description":"","frontmatter":{"title":"Michelle Behnke","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["aba","dei","law","testimony"],"sources":["raw/badlands-brief-245.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/michelle-behnke.md","filePath":"entities/michelle-behnke.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michelle-behnke.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michelle-behnke" tabindex="-1">Michelle Behnke <a class="header-anchor" href="#michelle-behnke" aria-label="Permalink to &quot;Michelle Behnke&quot;">​</a></h1><p>Michelle Behnke is the President of the <a href="/entities/american-bar-association">American Bar Association</a>.[1]</p><p>At a July 2026 House hearing, Behnke defended the association&#39;s approach to diversity, equity and inclusion, testifying that diversity initiatives strengthen the legal profession and that diversity and excellence are &quot;not mutually exclusive.&quot;[1] Her testimony came as the ABA had begun rescinding its DEI requirements for law schools following an executive order signed by President <a href="/entities/donald-trump">Donald Trump</a> addressing such mandates, and immediately preceded Rep. <a href="/entities/brandon-gill">Brandon Gill</a>&#39;s announcement that he would pursue legislation stripping the ABA of its law school accreditation authority.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Roasts The Press; Teases 2028 Run&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-245" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-245</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michelle-behnke.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michelleBehnke = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michelleBehnke as default
};
