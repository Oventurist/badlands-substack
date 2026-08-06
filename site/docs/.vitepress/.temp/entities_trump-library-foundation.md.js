import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Trump Library Foundation","description":"","frontmatter":{"title":"Trump Library Foundation","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["foundation","presidential-library","miami","trump-family"],"sources":["raw/badlands-brief-c5b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/trump-library-foundation.md","filePath":"entities/trump-library-foundation.md","lastUpdated":null}');
const _sfc_main = { name: "entities/trump-library-foundation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="trump-library-foundation" tabindex="-1">Trump Library Foundation <a class="header-anchor" href="#trump-library-foundation" aria-label="Permalink to &quot;Trump Library Foundation&quot;">​</a></h1><p>The Trump Library Foundation is the entity organized to develop and hold assets for the <a href="/concepts/donald-j-trump-presidential-library">Donald J. Trump Presidential Library</a> in Miami, Florida.[1]</p><h2 id="role" tabindex="-1">Role <a class="header-anchor" href="#role" aria-label="Permalink to &quot;Role&quot;">​</a></h2><p>Prime waterfront land in Miami was transferred to the foundation by <a href="/entities/miami-dade-college">Miami-Dade College</a> as the site for the proposed 50-story library announced on March 31, 2026 by <a href="/entities/eric-trump">Eric Trump</a>.[1] The transfer became the focus of criticism from historian <a href="/entities/marvin-dunn">Marvin Dunn</a>, who called it a &quot;land giveaway,&quot; while critics of <a href="/entities/donald-trump">Donald Trump</a> more broadly mocked the building&#39;s gold cladding and giant statue.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Christian Court Victory, Sovereign Alliance Comms and Off-Ramps Galore?&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c5b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c5b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/trump-library-foundation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const trumpLibraryFoundation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  trumpLibraryFoundation as default
};
