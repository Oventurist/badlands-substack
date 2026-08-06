import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"J. P. Morgan","description":"","frontmatter":{"title":"J. P. Morgan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["banking","money-trust","finance"],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jp-morgan.md","filePath":"entities/jp-morgan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jp-morgan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="j-p-morgan" tabindex="-1">J. P. Morgan <a class="header-anchor" href="#j-p-morgan" aria-label="Permalink to &quot;J. P. Morgan&quot;">​</a></h1><p>J. P. Morgan was the banker and financial house at the center of the article&#39;s account of American banking power in the early twentieth century.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Two of the seven men present at the secret 1910 <a href="/entities/jekyll-island-club">Jekyll Island Club</a> meeting were tied to the firm: Henry P. Davison, Senior Partner of the J. P. Morgan Company, and <a href="/entities/benjamin-strong">Benjamin Strong</a>, who attended representing J. P. Morgan.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> Charles D. Norton, also present, was President of the Morgan-dominated First National Bank of New York.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>The <a href="/entities/pujo-committee">Pujo Committee</a> was formed specifically to investigate the monopoly of J. P. Morgan and New York&#39;s other powerful bankers.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> Its report found that no fewer than eighteen major financial corporations were under the control of a cartel led by J. P. Morgan, George F. Baker, and James Stillman, and identified over $22 billion in resources and capitalization controlled through 341 directorships held in 112 corporations by members of the empire headed by Morgan.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jp-morgan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jpMorgan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jpMorgan as default
};
