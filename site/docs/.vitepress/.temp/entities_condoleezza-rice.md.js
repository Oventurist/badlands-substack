import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Condoleezza Rice","description":"","frontmatter":{"title":"Condoleezza Rice","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["bush-administration","nato","ukraine"],"sources":["raw/a-bright-red-line.md"],"confidence":"low"},"headers":[],"relativePath":"entities/condoleezza-rice.md","filePath":"entities/condoleezza-rice.md","lastUpdated":null}');
const _sfc_main = { name: "entities/condoleezza-rice.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="condoleezza-rice" tabindex="-1">Condoleezza Rice <a class="header-anchor" href="#condoleezza-rice" aria-label="Permalink to &quot;Condoleezza Rice&quot;">​</a></h1><p>Condoleezza Rice is named in &quot;A Bright Red Line&quot; as one of the Bush-administration figures who, together with <a href="/entities/victoria-nuland">Victoria Nuland</a>, affirmatively discussed the expansion of <a href="/entities/nato">NATO</a> to include Ukraine specifically.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a> The article uses her involvement to date the policy&#39;s origins to the mid-2000s, well before the events of 2014 and 2022, and to argue that the risk of provoking Russia was understood at the time it was adopted.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a> That same period produced the February 2008 cable by <a href="/entities/william-burns">William Burns</a> warning that Ukrainian NATO entry was the brightest of all Russian redlines.<a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Bright Red Line&quot;, URL: <a href="https://badlands.substack.com/p/a-bright-red-line" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-bright-red-line</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/condoleezza-rice.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const condoleezzaRice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  condoleezzaRice as default
};
