import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Miami-Dade College","description":"","frontmatter":{"title":"Miami-Dade College","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["education","florida","miami","land-transfer"],"sources":["raw/badlands-brief-c5b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/miami-dade-college.md","filePath":"entities/miami-dade-college.md","lastUpdated":null}');
const _sfc_main = { name: "entities/miami-dade-college.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="miami-dade-college" tabindex="-1">Miami-Dade College <a class="header-anchor" href="#miami-dade-college" aria-label="Permalink to &quot;Miami-Dade College&quot;">​</a></h1><p>Miami-Dade College is a public college in Miami, Florida. It entered national political coverage in 2026 as the institution that conveyed prime waterfront land to the <a href="/entities/trump-library-foundation">Trump Library Foundation</a> for construction of the <a href="/concepts/donald-j-trump-presidential-library">Donald J. Trump Presidential Library</a>.[1]</p><h2 id="the-2026-land-transfer" tabindex="-1">The 2026 land transfer <a class="header-anchor" href="#the-2026-land-transfer" aria-label="Permalink to &quot;The 2026 land transfer&quot;">​</a></h2><p>Plans announced on March 31, 2026 by <a href="/entities/eric-trump">Eric Trump</a> specified that the proposed 50-story library tower would be built on land transferred to the Trump Library Foundation by Miami-Dade College.[1] The arrangement drew criticism from historian <a href="/entities/marvin-dunn">Marvin Dunn</a>, who described it as a &quot;land giveaway.&quot;[1] No construction timeline was released at the time of the announcement.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Christian Court Victory, Sovereign Alliance Comms and Off-Ramps Galore?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c5b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c5b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/miami-dade-college.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const miamiDadeCollege = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  miamiDadeCollege as default
};
