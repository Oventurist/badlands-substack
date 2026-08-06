import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Charles Nenner","description":"","frontmatter":{"title":"Charles Nenner","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["finance","cycles-analysis","war-cycle","forecasting"],"sources":["raw/badlands-news-brief-3b2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/charles-nenner.md","filePath":"entities/charles-nenner.md","lastUpdated":null}');
const _sfc_main = { name: "entities/charles-nenner.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="charles-nenner" tabindex="-1">Charles Nenner <a class="header-anchor" href="#charles-nenner" aria-label="Permalink to &quot;Charles Nenner&quot;">​</a></h1><p>Charles Nenner is a geopolitical and financial cycle analyst known for forecasting market and conflict cycles.[1] In coverage cited in October 2023, Nenner had warned that the world was teetering on the edge of a war cycle that could last many years — a forecast presented as increasingly plausible given that the war in Ukraine had by then been ongoing for roughly 1.7 years and <a href="/entities/hamas">Hamas</a> had just invaded Israel, opening a second major geopolitical flashpoint.[1] His war-cycle framing accompanied a related warning about severe downside for equity indices.[1]</p><p>Nenner&#39;s forecast was invoked by <a href="/entities/zerohedge">ZeroHedge</a> in reporting that Google searches for &quot;Will I get drafted to war?&quot; had risen above the February 2022 peak recorded when Russia invaded Ukraine, reaching their highest level since the 2007 Iraq troop surge.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Peacemakers, Fake Kennedys &amp; Fear Mongers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/charles-nenner.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const charlesNenner = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  charlesNenner as default
};
