import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"David Ames Wells","description":"","frontmatter":{"title":"David Ames Wells","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","outlet"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/david-ames-wells.md","filePath":"entities/david-ames-wells.md","lastUpdated":null}');
const _sfc_main = { name: "entities/david-ames-wells.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="david-ames-wells" tabindex="-1">David Ames Wells <a class="header-anchor" href="#david-ames-wells" aria-label="Permalink to &quot;David Ames Wells&quot;">​</a></h1><p>David Ames Wells is cited in the article as an observer of the technological advancements and economic changes during the period from 1870 to 1890. The source quotes Wells&#39;s book <em>Recent Economic Changes and Their Effect on Production and Distribution of Wealth and Well-Being of Society</em> (1891): &quot;The economic changes that have occurred during the last quarter of a century—or during the present generation of living men—have unquestionably been more important and more varied than during any period of the world&#39;s history.&quot;</p><p>According to the article, Wells explained how deflation gave more power to the people and increased productivity during the gold standard era. The source invokes Wells&#39;s observations to support its claim that the deflationary gold standard benefited ordinary citizens by empowering them and fostering economic advancement.</p><h2 id="related-entities" tabindex="-1">Related Entities <a class="header-anchor" href="#related-entities" aria-label="Permalink to &quot;Related Entities&quot;">​</a></h2><ul><li><a href="/entities/coinage-act-of-1873">Coinage Act of 1873</a> — the legislation that established the gold standard period Wells observed</li><li><a href="/entities/murray-rothbard">Murray Rothbard</a> — another cited observer of the same period</li><li><a href="/concepts/long-depression">Long Depression</a> — the period during which Wells made his observations</li><li><a href="/concepts/1913">1913</a> — the year that ended the era Wells described</li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
