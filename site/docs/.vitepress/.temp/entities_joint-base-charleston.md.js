import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Joint Base Charleston","description":"","frontmatter":{"title":"Joint Base Charleston","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","air-force","south-carolina","installations"],"sources":["raw/badlands-news-brief-82f.md"],"confidence":"low"},"headers":[],"relativePath":"entities/joint-base-charleston.md","filePath":"entities/joint-base-charleston.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joint-base-charleston.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joint-base-charleston" tabindex="-1">Joint Base Charleston <a class="header-anchor" href="#joint-base-charleston" aria-label="Permalink to &quot;Joint Base Charleston&quot;">​</a></h1><p>Joint Base Charleston is a United States military installation in South Carolina.[1]</p><h2 id="_2023-f-35b-search" tabindex="-1">2023 F-35B search <a class="header-anchor" href="#_2023-f-35b-search" aria-label="Permalink to &quot;2023 F-35B search&quot;">​</a></h2><p>In September 2023 the base played the lead public role in the search for a missing Marine Corps <a href="/entities/f-35">F-35B Lightning II</a> stealth fighter, an episode documented at <a href="/concepts/2023-f-35b-disappearance-in-south-carolina">2023 F-35B disappearance in South Carolina</a>.[1] The base said on Sunday, September 17, that its personnel were working with Marine Corps Air Station Beaufort to locate the aircraft, and that, based on the jet&#39;s last-known position and in coordination with the FAA, the search was focused north of the base around Lake Moultrie and Lake Marion.[1] The following day it announced that a debris field had been located in Williamsburg County, roughly two hours northeast of the base, and told nearby residents to stay away while the recovery team secured the site and the <a href="/entities/united-states-marine-corps">U.S. Marine Corps</a> began recovery operations.[1] The ejected pilot was taken to a local medical center in stable condition.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Missing Planes, Missing Funds &amp; Missing Metrics&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-82f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-82f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joint-base-charleston.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jointBaseCharleston = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jointBaseCharleston as default
};
