import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fred Fleitz","description":"","frontmatter":{"title":"Fred Fleitz","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["national-security","america-first","trump-administration"],"sources":["raw/badlands-brief-c7b.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/fred-fleitz.md","filePath":"entities/fred-fleitz.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fred-fleitz.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fred-fleitz" tabindex="-1">Fred Fleitz <a class="header-anchor" href="#fred-fleitz" aria-label="Permalink to &quot;Fred Fleitz&quot;">​</a></h1><p>Fred Fleitz is an American national security figure who served as chief of staff of the National Security Council during <a href="/entities/donald-trump">Donald Trump</a>&#39;s first term and who later became vice chair of American security at the <a href="/entities/america-first-policy-institute">American First Policy Institute</a>.[1]</p><p>Following the sudden death of Sen. <a href="/entities/lindsey-graham">Lindsey Graham</a> in July 2026, Fleitz was quoted describing the close advisory relationship between Trump and Graham, saying that Trump &quot;would call him for advice, and Graham would call him constantly to try to give him his counsel to help him push responsible national security policy.&quot;[1] Fleitz added that Trump &quot;learned from what Graham told him, from Graham&#39;s trips abroad, from Graham&#39;s vast number of international contacts.&quot;[1]</p><p>The Badlands Brief treated Fleitz&#39;s characterization skeptically, with contributor <a href="/entities/ashe-in-america">Ashe in America</a> reading the description of Graham&#39;s constant counsel and foreign contacts as suggesting Graham functioned less as a friendly adviser than as an &quot;asset&quot; positioned close to the president.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;TACO Tuesday Returns as the War of Stories Gets Weird&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-c7b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-c7b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fred-fleitz.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fredFleitz = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  fredFleitz as default
};
