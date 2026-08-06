import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Oscar Underwood","description":"","frontmatter":{"title":"Oscar Underwood","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congressman","taxation",1913],"sources":["raw/1913.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/oscar-underwood.md","filePath":"entities/oscar-underwood.md","lastUpdated":null}');
const _sfc_main = { name: "entities/oscar-underwood.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="oscar-underwood" tabindex="-1">Oscar Underwood <a class="header-anchor" href="#oscar-underwood" aria-label="Permalink to &quot;Oscar Underwood&quot;">​</a></h1><p>Oscar Underwood was the U.S. Representative who quickly moved the <a href="/concepts/revenue-act-of-1913">Revenue Act of 1913</a> through the House of Representatives.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><p>Following the ratification of the <a href="/concepts/sixteenth-amendment">Sixteenth Amendment</a> in 1913, Democratic leaders agreed to seek passage of the Revenue Act, which would dramatically lower tariffs and implement an income tax.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a> Underwood&#39;s bill won approval in the <a href="/entities/united-states-senate">United States Senate</a> after extensive lobbying by the Wilson administration, and President <a href="/entities/woodrow-wilson">Woodrow Wilson</a> signed it into law on October 3, allowing for the establishment of the <a href="/entities/internal-revenue-service">Internal Revenue Service</a>.<a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;1913: The Year the Cabal Enslaved America&quot;, URL: <a href="https://badlands.substack.com/p/1913" target="_blank" rel="noreferrer">https://badlands.substack.com/p/1913</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/oscar-underwood.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const oscarUnderwood = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  oscarUnderwood as default
};
