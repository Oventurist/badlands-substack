import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"James Dickinson","description":"","frontmatter":{"title":"James Dickinson","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["military","space","pentagon"],"sources":["raw/badlands-news-brief-810.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/james-dickinson.md","filePath":"entities/james-dickinson.md","lastUpdated":null}');
const _sfc_main = { name: "entities/james-dickinson.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="james-dickinson" tabindex="-1">James Dickinson <a class="header-anchor" href="#james-dickinson" aria-label="Permalink to &quot;James Dickinson&quot;">​</a></h1><p>James Dickinson is a United States Army general who served as commander of <a href="/entities/united-states-space-command">United States Space Command</a>, the <a href="/entities/pentagon">Pentagon</a>&#39;s eleventh combatant command.[1]</p><h2 id="full-operational-capability-declaration" tabindex="-1">Full operational capability declaration <a class="header-anchor" href="#full-operational-capability-declaration" aria-label="Permalink to &quot;Full operational capability declaration&quot;">​</a></h2><p>On December 15, 2023, Dickinson declared during a headquarters town hall that USSPACECOM had reached full operating capability.[1] He stated that since its establishment in 2019 the command had been &quot;singularly focused on delivering exquisite capability to the joint force to deter conflict, defend our vital interests, and, if necessary, defeat aggression,&quot; crediting &quot;the disciplined initiative of our people and the support of our joint, combined, and partnered team.&quot;[1]</p><p>Dickinson said the declaration followed an &quot;in-depth evaluation of the command&#39;s capabilities,&quot; including the ability to execute its mission on &quot;our worst day, when we are needed the most,&quot; and noted that meeting full operating capability required both appropriate human-capital skill levels and established command processes and functions.[1] He named China and Russia as key adversaries whose space capabilities threaten the United States.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Trump 2024 Has the Deep State a Little Testy …&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-810" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-810</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/james-dickinson.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jamesDickinson = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jamesDickinson as default
};
