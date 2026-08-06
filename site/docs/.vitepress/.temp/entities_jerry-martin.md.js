import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jerry Martin","description":"","frontmatter":{"title":"Jerry Martin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["canada","drug-policy","harm-reduction","vancouver"],"sources":["raw/badlands-news-brief-3f5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/jerry-martin.md","filePath":"entities/jerry-martin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jerry-martin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jerry-martin" tabindex="-1">Jerry Martin <a class="header-anchor" href="#jerry-martin" aria-label="Permalink to &quot;Jerry Martin&quot;">​</a></h1><p>Jerry Martin is a Vancouver man who, at age 51, opened <a href="/entities/the-drugs-store">The Drugs Store</a> in Vancouver&#39;s Downtown Eastside in May 2023 — the only known brick-and-mortar shop in Canada or the United States selling heroin, cocaine, methamphetamine, MDMA and other drugs.[1]</p><p>Martin told VICE News that he opened the store because he wanted to give people drugs that have been tested and are free from adulterants, including fentanyl.[1] Although fentanyl is the primary street opioid used in Vancouver and is driving record overdose deaths across North America, Martin sells heroin instead.[1] The operation is completely illegal: British Columbia&#39;s three-year pilot project decriminalized possession of small amounts of several drugs, but not their sale.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Drone Strikes, Hunter Hunted &amp; Obama Resurfaces&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3f5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3f5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jerry-martin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jerryMartin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jerryMartin as default
};
