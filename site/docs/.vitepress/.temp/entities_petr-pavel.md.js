import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Petr Pavel","description":"","frontmatter":{"title":"Petr Pavel","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["czech-republic","nato","ukraine","heads-of-state"],"sources":["raw/badlands-news-brief-1f2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/petr-pavel.md","filePath":"entities/petr-pavel.md","lastUpdated":null}');
const _sfc_main = { name: "entities/petr-pavel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="petr-pavel" tabindex="-1">Petr Pavel <a class="header-anchor" href="#petr-pavel" aria-label="Permalink to &quot;Petr Pavel&quot;">​</a></h1><p>Petr Pavel is the President of the Czech Republic, a retired general and former chairman of <a href="/entities/nato">NATO</a>&#39;s military committee.[1]</p><p>Speaking around the IISS Prague Defence Summit in November 2024, Pavel assessed <a href="/entities/donald-trump">Donald Trump</a>&#39;s pledge to end the war in <a href="/entities/ukraine">Ukraine</a> &quot;within 24 hours&quot; as unrealistic, while allowing that Trump would make a genuine effort: &quot;I don&#39;t think it is realistic, but at the same time I believe that he will make an effort to end this war and to make a deal with President <a href="/entities/vladimir-putin">Putin</a>.&quot; He added that such a deal would &quot;most probably not be in our interest and in the interest of Ukraine.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Storm Shadows and the Contours of Peace&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-1f2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-1f2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/petr-pavel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const petrPavel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  petrPavel as default
};
