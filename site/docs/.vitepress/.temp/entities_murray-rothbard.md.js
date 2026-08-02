import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Murray Rothbard","description":"","frontmatter":{"title":"Murray Rothbard","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","outlet"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/murray-rothbard.md","filePath":"entities/murray-rothbard.md","lastUpdated":null}');
const _sfc_main = { name: "entities/murray-rothbard.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="murray-rothbard" tabindex="-1">Murray Rothbard <a class="header-anchor" href="#murray-rothbard" aria-label="Permalink to &quot;Murray Rothbard&quot;">​</a></h1><p>Murray Rothbard is cited in the article as the author of the book <em>History of Money and Banking of the United States</em>, in which he argues that the so-called &quot;Long Depression&quot; was &quot;only a misunderstood recession&quot; because real wages and production were increasing throughout the period. According to the source, Rothbard attributed falling prices to the deflationary gold standard in the United States in the aftermath of the Civil War.</p><p>The article invokes Rothbard&#39;s argument to support its broader claim that the gold standard benefited ordinary citizens while only harming bankers, loaners, and corrupt elements within the economic system. The source claims Rothbard&#39;s analysis demonstrates that the period from 1873 onward, which bankers labeled the &quot;Long Depression,&quot; actually represented prosperity for the American people.</p><h2 id="related-entities" tabindex="-1">Related Entities <a class="header-anchor" href="#related-entities" aria-label="Permalink to &quot;Related Entities&quot;">​</a></h2><ul><li><a href="/entities/coinage-act-of-1873">Coinage Act of 1873</a> — the legislation whose gold standard Rothbard defended</li><li><a href="/concepts/long-depression">Long Depression</a> — the period Rothbard characterized as a misunderstood recession</li><li><a href="/entities/david-ames-wells">David Ames Wells</a> — contemporary observer of the period whose observations are also cited</li><li><a href="/concepts/1913">1913</a> — the year that ended the gold standard period Rothbard discussed</li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">Original article</a></p></div>`);
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
