import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Don Davis","description":"","frontmatter":{"title":"Don Davis","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["north-carolina","congress","democrat","redistricting"],"sources":["raw/badlands-news-brief-623.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/don-davis.md","filePath":"entities/don-davis.md","lastUpdated":null}');
const _sfc_main = { name: "entities/don-davis.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="don-davis" tabindex="-1">Don Davis <a class="header-anchor" href="#don-davis" aria-label="Permalink to &quot;Don Davis&quot;">​</a></h1><p>Don Davis is a Democratic member of the U.S. House of Representatives from North Carolina&#39;s 1st congressional district.[1]</p><p>His district, in northeastern North Carolina, is a historically Black area that has elected Black representatives since 1992 and Democratic representatives for a century before that, and as of October 2025 it was the state&#39;s only remaining swing district.[1] It became the focal point of a rapidly advancing Republican redistricting measure that state senator <a href="/entities/ralph-hise">Ralph Hise</a> said was designed with the &quot;simple and singular&quot; purpose of producing an additional Republican seat, over Democratic accusations that the map diluted the Black vote.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Fair Trade, Debt Slavery, &amp; Your Mom&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-623" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-623</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/don-davis.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const donDavis = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  donDavis as default
};
