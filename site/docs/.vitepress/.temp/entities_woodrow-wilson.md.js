import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Woodrow Wilson","description":"","frontmatter":{"title":"Woodrow Wilson","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","administration"],"sources":["raw/1913.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/woodrow-wilson.md","filePath":"entities/woodrow-wilson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/woodrow-wilson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="woodrow-wilson" tabindex="-1">Woodrow Wilson <a class="header-anchor" href="#woodrow-wilson" aria-label="Permalink to &quot;Woodrow Wilson&quot;">​</a></h1><p>Woodrow Wilson served as President of the United States during the passage of the Federal Reserve Act and the Revenue Act of 1913. According to the article, Wilson signed the Revenue Act of 1913 into law on October 3, 1913, allowing for the establishment of the Internal Revenue Service (IRS). He signed the Federal Reserve Act into law on December 23, 1913, after it was passed by the 63rd United States Congress.</p><p>The article claims that Wilson &quot;had successfully enslaved every American to the fiat monetary system&quot; through these actions. It states that under Wilson&#39;s leadership, &quot;every American had to pay Income Tax, see the continued devaluation of their money, and the Federal Reserve, a privately owned bank became the most powerful organization in the US.&quot; The source asserts that Wilson signed these laws &quot;with their opposition out of the way, the necessary representatives, senators and President ready to sign off and pass the necessary laws.&quot;</p><p>The article notes that the Wilson administration engaged in extensive lobbying to secure Senate approval for the Revenue Act of 1913. The source frames Wilson as a central figure in the cabal&#39;s 1913 master plan, though it does not attribute specific personal motivation to him beyond his role as signatory.</p><h2 id="related-entities" tabindex="-1">Related Entities <a class="header-anchor" href="#related-entities" aria-label="Permalink to &quot;Related Entities&quot;">​</a></h2><ul><li><a href="/entities/federal-reserve">Federal Reserve</a> — created by the Act Wilson signed into law</li><li><a href="/entities/revenue-act-of-1913">Revenue Act of 1913</a> — signed by Wilson on October 3, 1913</li><li><a href="/entities/sixteenth-amendment">Sixteenth Amendment</a> — ratified during Wilson&#39;s presidency</li><li>Oscar Underwood — moved the Revenue Act through the House</li><li><a href="/concepts/1913">1913</a> — the pivotal year of Wilson&#39;s legislative actions</li></ul><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/woodrow-wilson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const woodrowWilson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  woodrowWilson as default
};
