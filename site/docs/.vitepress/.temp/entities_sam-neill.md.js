import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sam Neill","description":"","frontmatter":{"title":"Sam Neill","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["actor","obituary","jurassic-park","entertainment"],"sources":["raw/badlands-brief-805.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/sam-neill.md","filePath":"entities/sam-neill.md","lastUpdated":null}');
const _sfc_main = { name: "entities/sam-neill.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sam-neill" tabindex="-1">Sam Neill <a class="header-anchor" href="#sam-neill" aria-label="Permalink to &quot;Sam Neill&quot;">​</a></h1><p>Sam Neill was an actor best known for playing Dr. Alan Grant in the original <em>Jurassic Park</em> film.[1] He died at the age of 78, his death reported in the same 24-hour period as those of Senator <a href="/entities/lindsey-graham">Lindsey Graham</a> and former Qatari Emir <a href="/entities/hamad-bin-khalifa-al-thani">Hamad bin Khalifa Al Thani</a>.[1]</p><p>Neill&#39;s death was cited in the July 13, 2026 <a href="/concepts/badlands-brief">Badlands Brief</a> by <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> as part of an unusually dense cluster of notable deaths — the basis for the observation that &quot;the Grim Reaper was busy yesterday.&quot;[1] Unlike the political deaths reported in the same edition, Neill&#39;s passing was recounted without accompanying speculation about foul play.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/sam-neill.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const samNeill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  samNeill as default
};
