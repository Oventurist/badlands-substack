import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"RMS Titanic","description":"","frontmatter":{"title":"RMS Titanic","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":[1912,"disaster","banking-opposition"],"sources":["raw/1913.md"],"confidence":"low"},"headers":[],"relativePath":"entities/rms-titanic.md","filePath":"entities/rms-titanic.md","lastUpdated":null}');
const _sfc_main = { name: "entities/rms-titanic.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="rms-titanic" tabindex="-1">RMS Titanic <a class="header-anchor" href="#rms-titanic" aria-label="Permalink to &quot;RMS Titanic&quot;">​</a></h1><p>The Titanic is invoked in the article as a &quot;potentially-related event&quot; in the run-up to the <a href="/concepts/federal-reserve-act-of-1913">Federal Reserve Act</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Several prominent names died on the Titanic one year prior to the signing of the Act, including the American millionaire John Jacob Astor IV, industrialist Benjamin Guggenheim, Macy&#39;s owner <a href="/entities/isidor-straus">Isidor Straus</a>, and journalist and social reformer William Thomas Stead.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> The article states that it has long been suggested that these men all opposed the Federal Reserve Act to various degrees, and frames the sinking within its claim that the plan&#39;s architects needed to silence their opposition in order to pass the necessary acts through the House of Representatives and <a href="/entities/congress">Congress</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/rms-titanic.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rmsTitanic = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  rmsTitanic as default
};
