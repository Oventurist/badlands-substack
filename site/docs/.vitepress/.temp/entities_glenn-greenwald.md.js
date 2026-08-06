import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Glenn Greenwald","description":"","frontmatter":{"title":"Glenn Greenwald","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","independent-media","commentary"],"sources":["raw/a-cancer-on-modern-journalism.md"],"confidence":"low"},"headers":[],"relativePath":"entities/glenn-greenwald.md","filePath":"entities/glenn-greenwald.md","lastUpdated":null}');
const _sfc_main = { name: "entities/glenn-greenwald.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="glenn-greenwald" tabindex="-1">Glenn Greenwald <a class="header-anchor" href="#glenn-greenwald" aria-label="Permalink to &quot;Glenn Greenwald&quot;">​</a></h1><p>Glenn Greenwald is an author and independent journalist cited by Badlands Media on the subject of <a href="/entities/david-brock">David Brock</a>&#39;s political reversal.<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a></p><p>Greenwald is quoted as saying: &quot;I don&#39;t know what happened to David Brock, I don&#39;t know what was done to him, but overnight he went from one of the most psychotic Hillary haters to someone who treats <a href="/entities/hillary-clinton">Hillary Clinton</a> like a deity.&quot;<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a> His commentary is presented in the article as representative of the skepticism with which independent journalists regard the founding narrative of <a href="/entities/media-matters">Media Matters</a>.<a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Cancer on Modern Journalism&quot;, URL: <a href="https://badlands.substack.com/p/a-cancer-on-modern-journalism" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-cancer-on-modern-journalism</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/glenn-greenwald.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const glennGreenwald = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  glennGreenwald as default
};
