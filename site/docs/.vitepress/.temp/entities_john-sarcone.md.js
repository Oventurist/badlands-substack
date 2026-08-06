import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"John Sarcone III","description":"","frontmatter":{"title":"John Sarcone III","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["us-attorney","new-york","appointments","doj"],"sources":["raw/badlands-brief-094.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/john-sarcone.md","filePath":"entities/john-sarcone.md","lastUpdated":null}');
const _sfc_main = { name: "entities/john-sarcone.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="john-sarcone-iii" tabindex="-1">John Sarcone III <a class="header-anchor" href="#john-sarcone-iii" aria-label="Permalink to &quot;John Sarcone III&quot;">​</a></h1><p>John Sarcone III served as US Attorney for the Northern District of New York until a federal judge disqualified him in January 2026, ruling that he had been serving unlawfully.[1]</p><h2 id="disqualification" tabindex="-1">Disqualification <a class="header-anchor" href="#disqualification" aria-label="Permalink to &quot;Disqualification&quot;">​</a></h2><p>US District Judge <a href="/entities/lorna-schofield">Lorna Schofield</a>, an Obama appointee, issued a 24-page opinion removing Sarcone and invalidating subpoenas his office had issued to New York Attorney General <a href="/entities/letitia-james">Letitia James</a>.[1] Schofield wrote that when the executive branch &quot;skirts restraints put in place by Congress and then uses that power to subject political adversaries to criminal investigations,&quot; it acts without lawful authority.[1]</p><h2 id="contested-tenure" tabindex="-1">Contested tenure <a class="header-anchor" href="#contested-tenure" aria-label="Permalink to &quot;Contested tenure&quot;">​</a></h2><p>Sarcone&#39;s authority was challenged after unconventional moves were made to keep him in office beyond his 120-day interim term. When local judges declined to reappoint him, Attorney General <a href="/entities/pam-bondi">Pam Bondi</a> named him a &quot;special attorney&quot; with an indefinite term.[1] The ruling was one of a series in which judges removed US attorneys installed without Senate confirmation, including in New Jersey, Delaware, Nevada, Los Angeles, and Virginia.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Somali Shatterpoints, Cartel Countermeasures, &amp; Erosion of the World Order&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-094" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-094</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/john-sarcone.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const johnSarcone = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  johnSarcone as default
};
