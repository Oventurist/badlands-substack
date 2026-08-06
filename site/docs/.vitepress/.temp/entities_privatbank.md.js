import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PrivatBank","description":"","frontmatter":{"title":"PrivatBank","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","banking","corruption","kolomoisky"],"sources":["raw/badlands-news-brief-58e.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/privatbank.md","filePath":"entities/privatbank.md","lastUpdated":null}');
const _sfc_main = { name: "entities/privatbank.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="privatbank" tabindex="-1">PrivatBank <a class="header-anchor" href="#privatbank" aria-label="Permalink to &quot;PrivatBank&quot;">​</a></h1><p><strong>PrivatBank</strong> is a major Ukrainian bank at the center of a long-running embezzlement investigation conducted by the <a href="/entities/national-anti-corruption-bureau-of-ukraine">National Anti-Corruption Bureau of Ukraine</a> (NABU).[1]</p><h2 id="embezzlement-investigation" tabindex="-1">Embezzlement investigation <a class="header-anchor" href="#embezzlement-investigation" aria-label="Permalink to &quot;Embezzlement investigation&quot;">​</a></h2><p>On July 23, 2025, NABU announced it had completed its investigation into businessman <a href="/entities/ihor-kolomoisky">Ihor Kolomoiskyi</a> in a case involving the misappropriation of UAH 9.2 billion from PrivatBank.[1] The case marked the fourth episode in the broader investigation into the embezzlement of PrivatBank funds, but the first directly implicating Kolomoiskyi.[1]</p><p>The investigation concluded one day after public remarks by Ukrainian Prosecutor General Ruslan Kravchenko criticizing NABU for the slow pace of progress in cases related to Kolomoisky.[1] Badlands commentary observed that the completion of the probe meant the trial or trials against the detained billionaire could now begin, and situated the timing within the political crisis over President <a href="/entities/volodymyr-zelensky">Volodymyr Zelensky</a>&#39;s move to place Ukraine&#39;s anti-corruption bodies under executive oversight.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Pardon Probes &amp; Russia Gate Redux&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-58e" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-58e</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/privatbank.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privatbank = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  privatbank as default
};
