import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeff Zink","description":"","frontmatter":{"title":"Jeff Zink","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arizona","elections","republican-party","congress","america-first","2022-midterms"],"sources":["raw/arizona-earthquake.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jeff-zink.md","filePath":"entities/jeff-zink.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeff-zink.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeff-zink" tabindex="-1">Jeff Zink <a class="header-anchor" href="#jeff-zink" aria-label="Permalink to &quot;Jeff Zink&quot;">​</a></h1><p>Jeff Zink was the America First Republican candidate for Arizona&#39;s Third Congressional District in the <a href="/concepts/2022-arizona-general-election">2022 general election</a>, losing to incumbent Democrat Representative <a href="/entities/ruben-gallego">Ruben Gallego</a>.[1]</p><p>On Friday afternoon, December 9, 2022 — the final day of the five-day window for contesting certified results — Zink joined Secretary of State candidate <a href="/entities/mark-finchem">Mark Finchem</a> in filing a joint lawsuit seeking to overturn the November election. The named defendants were Gallego, Finchem&#39;s opponent <a href="/entities/adrian-fontes">Adrian Fontes</a>, and Secretary of State <a href="/entities/katie-hobbs">Katie Hobbs</a>.[1] The suit centered on allegations that Hobbs abused her office by failing to ensure the tabulation machines were properly certified, by threatening the Mohave and Cochise county boards of supervisors with criminal charges over certification, and by flagging content on a Twitter account in January 2021; it also argued she should have recused herself as Secretary of State while a candidate for governor.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Arizona Earthquake!&quot;, URL: <a href="https://badlands.substack.com/p/arizona-earthquake" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arizona-earthquake</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeff-zink.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeffZink = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeffZink as default
};
