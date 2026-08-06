import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"National Monetary Commission","description":"","frontmatter":{"title":"National Monetary Commission","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["commission","banking","panic-of-1907"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/national-monetary-commission.md","filePath":"entities/national-monetary-commission.md","lastUpdated":null}');
const _sfc_main = { name: "entities/national-monetary-commission.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="national-monetary-commission" tabindex="-1">National Monetary Commission <a class="header-anchor" href="#national-monetary-commission" aria-label="Permalink to &quot;National Monetary Commission&quot;">​</a></h1><p>The National Monetary Commission was established by Senator <a href="/entities/nelson-aldrich">Nelson W. Aldrich</a> in the wake of the <a href="/concepts/panic-of-1907">Panic of 1907</a> to investigate a better economic system for the United States.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The Commission concluded that the European model was superior, a model that included the Central Bank of England.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> Its reports and recommendations became one of the principal bases for the enactment of the <a href="/concepts/federal-reserve-act-of-1913">Federal Reserve Act of 1913</a>, which led to the creation of the modern <a href="/entities/federal-reserve">Federal Reserve</a> system.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The article situates the Commission alongside the secret 1910 <a href="/entities/jekyll-island-club">Jekyll Island Club</a> meeting as the two mechanisms — one public, one hidden — by which the <a href="/concepts/cabal">cabal</a> achieved central banking in the United States.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/national-monetary-commission.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nationalMonetaryCommission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nationalMonetaryCommission as default
};
