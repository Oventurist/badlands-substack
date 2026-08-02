import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Judy Shelton","description":"","frontmatter":{"title":"Judy Shelton","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","agency"],"sources":["raw/1913.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/judy-shelton.md","filePath":"entities/judy-shelton.md","lastUpdated":null}');
const _sfc_main = { name: "entities/judy-shelton.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="judy-shelton" tabindex="-1">Judy Shelton <a class="header-anchor" href="#judy-shelton" aria-label="Permalink to &quot;Judy Shelton&quot;">​</a></h1><p>Judy Shelton is identified in the article as a nominee to the Federal Reserve selected by <a href="/entities/donald-trump">Donald Trump</a> during his presidency. According to the source, Shelton was nominated because she was &quot;an advocate of bringing back the gold standard,&quot; which the article dates from 1873 to 1933.</p><p>The article frames Shelton&#39;s nomination as part of Trump&#39;s broader attempt, reminiscent of <a href="/entities/andrew-jackson">Andrew Jackson</a>&#39;s opposition to central banking, to restore the hard-money system that existed before the cabal&#39;s consolidation in 1913. The source presents Shelton as aligned with the Jacksonian tradition of opposing paper money and fiat currency.</p><h2 id="related-entities" tabindex="-1">Related Entities <a class="header-anchor" href="#related-entities" aria-label="Permalink to &quot;Related Entities&quot;">​</a></h2><ul><li><a href="/entities/donald-trump">Donald Trump</a> — nominated Shelton to the Federal Reserve</li><li><a href="/entities/federal-reserve">Federal Reserve</a> — the institution to which Shelton was nominated</li><li><a href="/entities/andrew-jackson">Andrew Jackson</a> — the historical figure whose monetary opposition Shelton is said to share</li><li><a href="/entities/coinage-act-of-1873">Coinage Act of 1873</a> — the gold standard legislation Shelton allegedly supports</li><li><a href="/concepts/1913">1913</a> — the year of the cabal&#39;s consolidation that Shelton&#39;s nomination is said to challenge</li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
