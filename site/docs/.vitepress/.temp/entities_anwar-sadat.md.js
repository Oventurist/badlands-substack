import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Anwar Sadat","description":"","frontmatter":{"title":"Anwar Sadat","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["egypt","assassination","peace-deal","israel"],"sources":["raw/badlands-news-brief-36a.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/anwar-sadat.md","filePath":"entities/anwar-sadat.md","lastUpdated":null}');
const _sfc_main = { name: "entities/anwar-sadat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="anwar-sadat" tabindex="-1">Anwar Sadat <a class="header-anchor" href="#anwar-sadat" aria-label="Permalink to &quot;Anwar Sadat&quot;">​</a></h1><p>Anwar Sadat was the Egyptian leader who was slain after striking a peace deal with <a href="/entities/israel">Israel</a>.[1]</p><p>Sadat&#39;s fate has served as a cautionary reference point for Arab leaders contemplating normalization with Israel. In 2024, Saudi Crown Prince <a href="/entities/mohammed-bin-salman">Mohammed bin Salman</a> invoked Sadat in conversations with members of <a href="/entities/congress">Congress</a>, asking what the United States had done to protect Sadat, as he described the personal risk he believed he was taking in pursuing a grand bargain with the U.S. and Israel that would include normalizing Saudi-Israeli ties.[1] MBS used the example in part to explain why any such deal must include a true path to a Palestinian state, particularly with the war in Gaza having heightened Arab fury toward Israel.[1]</p><p>Badlands commentary placed Sadat within a longer list of assassinated peacemakers, alongside <a href="/entities/john-f-kennedy">Kennedy</a>, <a href="/entities/king-faisal">King Faisal</a>, <a href="/entities/yitzhak-rabin">Yitzhak Rabin</a> and <a href="/entities/yasser-arafat">Yasser Arafat</a> of the 1993 <a href="/concepts/oslo-accords">Oslo Accords</a> two-state framework.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Monkeypox ... For Real? And Other Info War Oddities&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-36a" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-36a</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/anwar-sadat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const anwarSadat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  anwarSadat as default
};
