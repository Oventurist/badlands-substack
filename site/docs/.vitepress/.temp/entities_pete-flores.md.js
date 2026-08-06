import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pete Flores","description":"","frontmatter":{"title":"Pete Flores","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["texas","immigration","state-legislature","republican"],"sources":["raw/badlands-news-brief-780.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pete-flores.md","filePath":"entities/pete-flores.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pete-flores.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pete-flores" tabindex="-1">Pete Flores <a class="header-anchor" href="#pete-flores" aria-label="Permalink to &quot;Pete Flores&quot;">​</a></h1><p>Pete Flores is a Republican member of the <a href="/entities/texas-senate">Texas Senate</a> representing Pleasanton.[1]</p><h2 id="senate-bill-4-2023" tabindex="-1">Senate Bill 4 (2023) <a class="header-anchor" href="#senate-bill-4-2023" aria-label="Permalink to &quot;Senate Bill 4 (2023)&quot;">​</a></h2><p>Flores sponsored Senate Bill 4 during the third special legislative session of 2023, legislation that would raise the minimum sentence for smuggling immigrants or operating a stash house from two years to ten years.[1] The bill passed the Texas Senate with bipartisan support by a vote of 29-2 on Thursday evening, 12 October 2023, alongside Senate Bill 11, sponsored by <a href="/entities/brian-birdwell">Brian Birdwell</a>, which would authorize state police to arrest migrants crossing the southern border.[1]</p><p>The two immigration measures advanced after Governor <a href="/entities/greg-abbott">Greg Abbott</a> convened the special session to press lawmakers on immigration enforcement and school vouchers.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: US Carriers, FBI Warnings &amp; Election Wins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-780" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-780</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pete-flores.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const peteFlores = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  peteFlores as default
};
