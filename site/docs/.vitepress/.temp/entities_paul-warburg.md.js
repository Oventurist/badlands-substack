import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Paul Warburg","description":"","frontmatter":{"title":"Paul Warburg","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","jekyll-island","money-trust"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/paul-warburg.md","filePath":"entities/paul-warburg.md","lastUpdated":null}');
const _sfc_main = { name: "entities/paul-warburg.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="paul-warburg" tabindex="-1">Paul Warburg <a class="header-anchor" href="#paul-warburg" aria-label="Permalink to &quot;Paul Warburg&quot;">​</a></h1><p>Paul Warburg was one of the seven participants in the secret 1910 meeting at the <a href="/entities/jekyll-island-club">Jekyll Island Club</a> that produced the plan to transform the monetary system of the United States.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The article identifies Warburg as an employee of Jacob Schiff who had family ties with the Rothschilds.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> He was later singled out by name in the <a href="/entities/pujo-committee">Pujo Committee</a>&#39;s report on the banking trade, alongside Jacob H. Schiff, Felix M. Warburg, Frank E. Peabody, William Rockefeller, and <a href="/entities/benjamin-strong">Benjamin Strong Jr.</a><a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/paul-warburg.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const paulWarburg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  paulWarburg as default
};
