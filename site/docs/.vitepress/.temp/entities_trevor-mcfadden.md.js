import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trevor McFadden","description":"","frontmatter":{"title":"Trevor McFadden","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["judiciary","federal-court","district-court"],"sources":["raw/badlands-brief-618.md"],"confidence":"low"},"headers":[],"relativePath":"entities/trevor-mcfadden.md","filePath":"entities/trevor-mcfadden.md","lastUpdated":null}');
const _sfc_main = { name: "entities/trevor-mcfadden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trevor-mcfadden" tabindex="-1">Trevor McFadden <a class="header-anchor" href="#trevor-mcfadden" aria-label="Permalink to &quot;Trevor McFadden&quot;">​</a></h1><p><strong>Trevor McFadden</strong> is a United States District Judge presiding over the federal prosecution of the man accused of attempting to assassinate President <a href="/entities/donald-trump">Donald Trump</a> at the <a href="/concepts/white-house-correspondents-association-dinner">White House Correspondents&#39; Association dinner</a>.[1]</p><p>At a May 2026 hearing at which the defendant pleaded not guilty, McFadden considered a defense motion to remove Acting Attorney General <a href="/entities/todd-blanche">Todd Blanche</a> and US Attorney <a href="/entities/jeanine-pirro">Jeanine Pirro</a> from the case on conflict-of-interest grounds.[1] He did not immediately rule, instead asking the defense to further explain the scope of its request, which counsel indicated could extend to the recusal of Pirro&#39;s entire office.[1] The case is described at <a href="/concepts/whca-dinner-assassination-attempt-prosecution">the WHCA dinner assassination attempt prosecution</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Triggering Summits &amp; Allegedly Fair Elections&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-618" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-618</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/trevor-mcfadden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trevorMcfadden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trevorMcfadden as default
};
