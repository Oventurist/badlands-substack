import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nelson W. Aldrich","description":"","frontmatter":{"title":"Nelson W. Aldrich","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","administration","cabal"],"sources":["raw/1913.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/nelson-aldrich.md","filePath":"entities/nelson-aldrich.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nelson-aldrich.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nelson-w-aldrich" tabindex="-1">Nelson W. Aldrich <a class="header-anchor" href="#nelson-w-aldrich" aria-label="Permalink to &quot;Nelson W. Aldrich&quot;">​</a></h1><p>Nelson W. Aldrich served as a Republican Senator and is identified in the article as a central figure in the cabal&#39;s plan to establish a central bank. According to the source, after the Panic of 1907, Aldrich set up the National Monetary Commission to investigate a better economic system for the United States. The Commission concluded that the European model—which included the Central Bank of England—was superior, and its reports and recommendations became &quot;one of the principal bases in the enactment of the Federal Reserve Act of 1913.&quot;</p><p>The article claims that in 1910, leaders of the <a href="/entities/populist-party">Populist Party</a> convinced Aldrich, then leader of the Republican Party, to transform the entire monetary system of the United States. This conviction allegedly led to the <a href="/entities/jekyll-island-meeting">Jekyll Island meeting</a>, where the plan for the Federal Reserve was drafted in secrecy.</p><p>The source notes that Aldrich&#39;s daughter married a Rockefeller, framing this family connection as part of the broader web of elite relationships that allegedly constituted the cabal. Aldrich is presented as the political bridge between the secretive bankers at Jekyll Island and the legislative machinery in Congress that ultimately passed the Federal Reserve Act.</p><h2 id="related-entities" tabindex="-1">Related Entities <a class="header-anchor" href="#related-entities" aria-label="Permalink to &quot;Related Entities&quot;">​</a></h2><ul><li><a href="/entities/jekyll-island-meeting">Jekyll Island meeting</a> — the meeting Aldrich allegedly organized</li><li><a href="/entities/federal-reserve">Federal Reserve Act</a> — legislation based on Aldrich&#39;s National Monetary Commission recommendations</li><li><a href="/entities/populist-party">Populist Party</a> — the party that allegedly convinced Aldrich to transform the monetary system</li><li>Rockefeller family — connected to Aldrich through his daughter&#39;s marriage</li><li><a href="/concepts/1913">1913</a> — the year Aldrich&#39;s recommendations were enacted</li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nelson-aldrich.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nelsonAldrich = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nelsonAldrich as default
};
