import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Lipka Tatars","description":"","frontmatter":{"title":"Lipka Tatars","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["poland","tatars","cavalry","golden-horde","military-history"],"sources":["raw/badlands-news-brief-017.md"],"confidence":"low"},"headers":[],"relativePath":"entities/lipka-tatars.md","filePath":"entities/lipka-tatars.md","lastUpdated":null}');
const _sfc_main = { name: "entities/lipka-tatars.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="lipka-tatars" tabindex="-1">Lipka Tatars <a class="header-anchor" href="#lipka-tatars" aria-label="Permalink to &quot;Lipka Tatars&quot;">​</a></h1><p>The Lipka Tartars were an all-Muslim military unit maintained by Poland whose members traced their lineage to the Mongolian Golden Horde.[1]</p><p>Exiled from Hungary in the 1500s, they formed a mercenary group in Poland and shared their mastery of horses with the Poles; that lineage eventually produced the <a href="/entities/winged-hussars">Winged Hussars</a>, the heavy shock cavalry that dominated the plains of Eastern Europe.[1] Part of the cavalry force that relieved Vienna in 1683 consisted of Lipka Tartars, a fact Badlands cites to complicate the popular framing of the <a href="/concepts/battle-of-vienna">Battle of Vienna</a> as a purely &quot;Christianity vs Islam&quot; conflict.[1]</p><p>Badlands notes that Europeans referred to the Mongols as &quot;Tatars,&quot; sometimes spelled &quot;Tartars,&quot; and to the Mongolian Empire as &quot;Tartaria,&quot; and that Crimea — where many Mongols settled — is known throughout Russian history as &quot;Little Tartaria.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Tracking Resignations, Scare Events &amp; the Death of Taxes&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-017" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-017</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/lipka-tatars.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const lipkaTatars = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  lipkaTatars as default
};
