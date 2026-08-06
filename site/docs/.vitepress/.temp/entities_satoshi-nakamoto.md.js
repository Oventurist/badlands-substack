import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Satoshi Nakamoto","description":"","frontmatter":{"title":"Satoshi Nakamoto","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bitcoin","satoshi","anonymity","cryptocurrency"],"sources":["raw/are-we-entering-the-millennial-reign.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/satoshi-nakamoto.md","filePath":"entities/satoshi-nakamoto.md","lastUpdated":null}');
const _sfc_main = { name: "entities/satoshi-nakamoto.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="satoshi-nakamoto" tabindex="-1">Satoshi Nakamoto <a class="header-anchor" href="#satoshi-nakamoto" aria-label="Permalink to &quot;Satoshi Nakamoto&quot;">​</a></h1><p><strong>Satoshi Nakamoto</strong> is the pseudonym used by the anonymous person or group who released the <a href="/concepts/bitcoin">Bitcoin</a> White Paper and launched the network.[1]</p><h2 id="the-immaculate-conception" tabindex="-1">The &quot;Immaculate Conception&quot; <a class="header-anchor" href="#the-immaculate-conception" aria-label="Permalink to &quot;The &quot;Immaculate Conception&quot;&quot;">​</a></h2><p>In a phenomenon the Badlands Media essay &quot;Are We Entering the Millennial Reign?&quot; calls the &quot;Immaculate Conception,&quot; the Bitcoin White Paper was released on October 31, 2008.[1] On January 3, 2009, Satoshi began the timechain by mining the first block, known as the Genesis block, and continued mining for six days — creating the foundation — before releasing the software to the rest of the world.[1] The author observes that, whether intended or not, this can be viewed as a metaphor for the six days of creation in the Bible.[1]</p><p>Satoshi helped the network for a few years, then disappeared and has not been heard from since.[1]</p><h2 id="anonymity-as-prophetic-parallel" tabindex="-1">Anonymity as prophetic parallel <a class="header-anchor" href="#anonymity-as-prophetic-parallel" aria-label="Permalink to &quot;Anonymity as prophetic parallel&quot;">​</a></h2><p>The essay&#39;s discussion of the <a href="/concepts/millennial-reign">Millennial Reign</a> notes that the returning Christ is described as having a name written that no one knows except Himself, leading the author to ask whether Christ returns as an anon — &quot;Anon like Satoshi? Anon like Q? Anon like Pepe?&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Are We Entering the Millennial Reign?&quot;, URL: <a href="https://badlands.substack.com/p/are-we-entering-the-millennial-reign" target="_blank" rel="noreferrer">https://badlands.substack.com/p/are-we-entering-the-millennial-reign</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/satoshi-nakamoto.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const satoshiNakamoto = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  satoshiNakamoto as default
};
