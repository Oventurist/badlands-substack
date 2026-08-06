import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yitzhak Rabin","description":"","frontmatter":{"title":"Yitzhak Rabin","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["israel","oslo-accords","assassination","history"],"sources":["raw/badlands-brief-8db.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/yitzhak-rabin.md","filePath":"entities/yitzhak-rabin.md","lastUpdated":null}');
const _sfc_main = { name: "entities/yitzhak-rabin.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yitzhak-rabin" tabindex="-1">Yitzhak Rabin <a class="header-anchor" href="#yitzhak-rabin" aria-label="Permalink to &quot;Yitzhak Rabin&quot;">​</a></h1><p>Yitzhak Rabin was the Israeli Prime Minister and retired <a href="/entities/israel-defense-forces">Israel Defense Forces</a> general who signed the <a href="/concepts/oslo-accords">Oslo Accords</a> in 1993.[1]</p><h2 id="oslo-and-assassination" tabindex="-1">Oslo and assassination <a class="header-anchor" href="#oslo-and-assassination" aria-label="Permalink to &quot;Oslo and assassination&quot;">​</a></h2><p>Under the agreement Rabin signed, Palestine would immediately recognize the State of <a href="/entities/israel">Israel</a>, and in exchange the IDF would implement a five-year plan to incrementally withdraw from Gaza and the West Bank, culminating in recognition of Palestine as a nation.[1]</p><p>Rabin was brutally assassinated by a Jewish terrorist, an act that Badlands commentary identifies as the pivotal event enabling the rise of a new celebrity politician, <a href="/entities/benjamin-netanyahu">Bibi Netanyahu</a>.[1] Netanyahu has since bragged that upon coming to power in 1996 he intentionally subverted the Oslo Accords and ensured that the promised troop drawdown never occurred, leaving Rabin&#39;s framework effectively dead in practice long before Finance Minister <a href="/entities/bezalel-smotrich">Bezalel Smotrich</a> called in 2026 for its formal cancellation.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Hunters Become the Hunted as Traitors Reveal Themselves&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-8db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-8db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/yitzhak-rabin.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yitzhakRabin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yitzhakRabin as default
};
