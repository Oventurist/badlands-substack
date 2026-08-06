import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"William Henry Harrison","description":"","frontmatter":{"title":"William Henry Harrison","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["president","american-history","whig-party","national-bank"],"sources":["raw/avoiding-wwiii.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/william-henry-harrison.md","filePath":"entities/william-henry-harrison.md","lastUpdated":null}');
const _sfc_main = { name: "entities/william-henry-harrison.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="william-henry-harrison" tabindex="-1">William Henry Harrison <a class="header-anchor" href="#william-henry-harrison" aria-label="Permalink to &quot;William Henry Harrison&quot;">​</a></h1><p><strong>William Henry Harrison</strong> was the ninth president of the United States, elected in 1840 as the first victory of the American nationalist grouping that rallied around the Whig Party of <a href="/entities/john-quincy-adams">John Quincy Adams</a>.[1]</p><h2 id="program" tabindex="-1">Program <a class="header-anchor" href="#program" aria-label="Permalink to &quot;Program&quot;">​</a></h2><p>Harrison took office on the basis of reviving Alexander Hamilton&#39;s national bank and re-launching protective tariffs and internal improvements.[1] Legislation for a Third National Bank passed both houses of Congress, but Harrison served only three months and died under mysterious circumstances before it could be signed into law.[1]</p><h2 id="death" tabindex="-1">Death <a class="header-anchor" href="#death" aria-label="Permalink to &quot;Death&quot;">​</a></h2><p><a href="/entities/matthew-ehret">Matthew Ehret</a> states flatly that both Whig presidents of this period — Harrison and <a href="/entities/zachary-taylor">Zachary Taylor</a> — were poisoned.[1] Harrison is counted among the five presidents who made serious efforts to revive America&#39;s nationalist system after the killing of the Second National Bank in 1836 and who ended up dead while in office: Harrison in 1841, Taylor in 1850, <a href="/entities/abraham-lincoln">Lincoln</a> in 1865, Garfield in 1880 and McKinley in 1901.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Avoiding WWIII&quot;, URL: <a href="https://badlands.substack.com/p/avoiding-wwiii" target="_blank" rel="noreferrer">https://badlands.substack.com/p/avoiding-wwiii</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/william-henry-harrison.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const williamHenryHarrison = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  williamHenryHarrison as default
};
