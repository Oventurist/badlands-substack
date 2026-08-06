import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Police Scotland","description":"","frontmatter":{"title":"Police Scotland","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["scotland","police","hate-crime-law","free-speech"],"sources":["raw/badlands-news-brief-2db.md"],"confidence":"low"},"headers":[],"relativePath":"entities/police-scotland.md","filePath":"entities/police-scotland.md","lastUpdated":null}');
const _sfc_main = { name: "entities/police-scotland.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="police-scotland" tabindex="-1">Police Scotland <a class="header-anchor" href="#police-scotland" aria-label="Permalink to &quot;Police Scotland&quot;">​</a></h1><p>Police Scotland is the national police service of Scotland, and the body charged with enforcing the <a href="/concepts/hate-crime-and-public-order-scotland-act-2021">Hate Crime and Public Order (Scotland) Act 2021</a> after it took effect on April 1, 2024.[1]</p><h2 id="role-in-hate-crime-enforcement" tabindex="-1">Role in hate crime enforcement <a class="header-anchor" href="#role-in-hate-crime-enforcement" aria-label="Permalink to &quot;Role in hate crime enforcement&quot;">​</a></h2><p>Senior police officers were reported to be expecting a deluge of complaints over online posts once the new &quot;stirring up hatred&quot; offence commenced.[1] During the force&#39;s training program on enforcing the law, officers were taught that even the content of plays and comedy gigs should be considered as potential hate crimes.[1]</p><p>Scottish community safety minister <a href="/entities/siobhian-brown">Siobhian Brown</a> placed the determination of criminality squarely with the service, stating that a misgendering complaint &quot;could be reported and it could be investigated. Whether or not the police would think it was criminal is up to Police Scotland for that.&quot;[1] Among those identified as potentially exposed to prosecution was author <a href="/entities/jk-rowling">J.K. Rowling</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Trump Counters, Musk Sues &amp; Biden Lies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-2db" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-2db</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/police-scotland.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const policeScotland = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  policeScotland as default
};
