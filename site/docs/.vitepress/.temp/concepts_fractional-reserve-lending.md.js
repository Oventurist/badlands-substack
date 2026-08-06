import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fractional Reserve Lending","description":"","frontmatter":{"title":"Fractional Reserve Lending","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["banking","credit","monetary-policy"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/fractional-reserve-lending.md","filePath":"concepts/fractional-reserve-lending.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/fractional-reserve-lending.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fractional-reserve-lending" tabindex="-1">Fractional Reserve Lending <a class="header-anchor" href="#fractional-reserve-lending" aria-label="Permalink to &quot;Fractional Reserve Lending&quot;">​</a></h1><p>Fractional reserve lending is the banking practice the article traces back to the earliest American banks and identifies as the original mechanism of banker power.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Banks started out as a convenience market, introduced as a way for people to store their U.S.-minted coins.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> The banks then allowed their bank notes to be openly traded with other people, creating their own economy over the official <a href="/concepts/hard-money">hard money</a> economy.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> The bankers knew that over time they could loan these assets out and charge interest on them; this practice changed from coins to paper, paving the way for what is today called fractional reserve lending.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>According to the article, the only way this scam could be stopped is if the people demanded their gold back en masse, which is why getting off the <a href="/concepts/gold-standard">gold standard</a> became a priority of the bankers.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> In the resulting gold-less system, citizens can no longer demand their gold back, giving banks the ability to manipulate society in any way they want.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/fractional-reserve-lending.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fractionalReserveLending = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fractionalReserveLending as default
};
