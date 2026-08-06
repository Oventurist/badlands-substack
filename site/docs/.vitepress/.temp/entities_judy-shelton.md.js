import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Judy Shelton","description":"","frontmatter":{"title":"Judy Shelton","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economist","gold-standard","federal-reserve"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/judy-shelton.md","filePath":"entities/judy-shelton.md","lastUpdated":null}');
const _sfc_main = { name: "entities/judy-shelton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="judy-shelton" tabindex="-1">Judy Shelton <a class="header-anchor" href="#judy-shelton" aria-label="Permalink to &quot;Judy Shelton&quot;">​</a></h1><p>Judy Shelton is the economist whom President <a href="/entities/donald-trump">Donald Trump</a> nominated to the <a href="/entities/federal-reserve">Federal Reserve</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The article states that Trump chose Shelton because she was an advocate of bringing back the <a href="/concepts/gold-standard">gold standard</a>, which it dates as spanning from 1873 to 1933.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> Her nomination is presented as evidence of Trump&#39;s attempt to restore the older American monetary system in the manner of <a href="/entities/andrew-jackson">Andrew Jackson</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/judy-shelton.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const judyShelton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  judyShelton as default
};
