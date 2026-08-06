import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"U.S. Agency for Global Media","description":"","frontmatter":{"title":"U.S. Agency for Global Media","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["state-media","usagm","propaganda","kari-lake","trump"],"sources":["raw/badlands-news-brief-899.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/us-agency-for-global-media.md","filePath":"entities/us-agency-for-global-media.md","lastUpdated":null}');
const _sfc_main = { name: "entities/us-agency-for-global-media.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="u-s-agency-for-global-media" tabindex="-1">U.S. Agency for Global Media <a class="header-anchor" href="#u-s-agency-for-global-media" aria-label="Permalink to &quot;U.S. Agency for Global Media&quot;">​</a></h1><p>The U.S. Agency for Global Media (USAGM) is the federal agency that oversees the United States&#39; government-funded international broadcasting operations, including <a href="/entities/voice-of-america">Voice of America</a>.[1]</p><h2 id="trump-era-criticism-and-reform-push" tabindex="-1">Trump-era criticism and reform push <a class="header-anchor" href="#trump-era-criticism-and-reform-push" aria-label="Permalink to &quot;Trump-era criticism and reform push&quot;">​</a></h2><p>In June 2025 senior Trump adviser <a href="/entities/kari-lake">Kari Lake</a> testified before the House Foreign Affairs Committee that USAGM is &quot;rotten to the core&quot; and should be reshaped to align with President <a href="/entities/donald-trump">Donald Trump</a>&#39;s &#39;America First&#39; agenda.[1] Her testimony came the same day Trump urged congressional Republicans to back his campaign to dismantle VOA, which he argued had become partisan and represented wasteful government spending.[1]</p><p>Badlands commentary situated the USAGM fight within a broader argument that state media organizations — and outlets that pose as independent corporate media — should be shut down alongside what contributors describe as domestic psychological operations run by the intelligence community.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Daddy Issues &amp; Damage Assessments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-899" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-899</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/us-agency-for-global-media.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usAgencyForGlobalMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usAgencyForGlobalMedia as default
};
