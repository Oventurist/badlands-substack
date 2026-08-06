import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Murray Rothbard","description":"","frontmatter":{"title":"Murray Rothbard","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economist","austrian-economics","gold-standard"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/murray-rothbard.md","filePath":"entities/murray-rothbard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/murray-rothbard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="murray-rothbard" tabindex="-1">Murray Rothbard <a class="header-anchor" href="#murray-rothbard" aria-label="Permalink to &quot;Murray Rothbard&quot;">​</a></h1><p>Murray Rothbard was an economist cited in the article for his revisionist reading of the <a href="/concepts/long-depression">Long Depression</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>In his book <em>History of Money and Banking of the United States</em>, Rothbard argues that the Long Depression was only a misunderstood recession, since real wages and production were increasing throughout the period.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> He attributed the era&#39;s falling prices to the deflationary <a href="/concepts/gold-standard">gold standard</a> in the United States in the aftermath of the Civil War.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The article uses Rothbard&#39;s argument to support its central claim that deflation under hard money benefited ordinary citizens while harming banks and lenders.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/murray-rothbard.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const murrayRothbard = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  murrayRothbard as default
};
