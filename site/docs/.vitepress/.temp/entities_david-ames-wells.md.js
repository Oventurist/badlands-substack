import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Ames Wells","description":"","frontmatter":{"title":"David Ames Wells","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["economist","19th-century","deflation"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-ames-wells.md","filePath":"entities/david-ames-wells.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-ames-wells.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-ames-wells" tabindex="-1">David Ames Wells <a class="header-anchor" href="#david-ames-wells" aria-label="Permalink to &quot;David Ames Wells&quot;">​</a></h1><p>David Ames Wells was a nineteenth-century economist who wrote of the technological advancements of the period from 1870 to 1890 and, in the article&#39;s reading, explained how deflation gave more power to the people by increasing productivity.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The article quotes his 1891 work <em>Recent Economic Changes and Their Effect on Production and Distribution of Wealth and Well-Being of Society</em>: &quot;The economic changes that have occurred during the last quarter of a century—or during the present generation of living men—have unquestionably been more important and more varied than during any period of the world&#39;s history.&quot;<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Wells is cited alongside <a href="/entities/murray-rothbard">Murray Rothbard</a> to support the argument that the <a href="/concepts/long-depression">Long Depression</a> was a period of genuine prosperity for ordinary citizens under the <a href="/concepts/gold-standard">gold standard</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/david-ames-wells.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const davidAmesWells = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  davidAmesWells as default
};
