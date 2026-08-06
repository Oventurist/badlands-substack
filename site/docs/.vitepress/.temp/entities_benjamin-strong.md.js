import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Benjamin Strong","description":"","frontmatter":{"title":"Benjamin Strong","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","jekyll-island","money-trust"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/benjamin-strong.md","filePath":"entities/benjamin-strong.md","lastUpdated":null}');
const _sfc_main = { name: "entities/benjamin-strong.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="benjamin-strong" tabindex="-1">Benjamin Strong <a class="header-anchor" href="#benjamin-strong" aria-label="Permalink to &quot;Benjamin Strong&quot;">​</a></h1><p>Benjamin Strong attended the secret 1910 meeting at the <a href="/entities/jekyll-island-club">Jekyll Island Club</a> as a representative of <a href="/entities/jp-morgan">J. P. Morgan</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Strong, listed in the <a href="/entities/pujo-committee">Pujo Committee</a> report as Benjamin Strong Jr., was among the individual bankers singled out in that committee&#39;s findings on the banking trade, alongside <a href="/entities/paul-warburg">Paul Warburg</a>, Jacob H. Schiff, Felix M. Warburg, Frank E. Peabody, and William Rockefeller.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/benjamin-strong.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const benjaminStrong = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  benjaminStrong as default
};
