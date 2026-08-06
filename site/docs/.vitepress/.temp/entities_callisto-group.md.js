import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Callisto Group","description":"","frontmatter":{"title":"Callisto Group","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cyber","russia","fsb","spear-phishing","domain-seizure"],"sources":["raw/badlands-news-brief-41f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/callisto-group.md","filePath":"entities/callisto-group.md","lastUpdated":null}');
const _sfc_main = { name: "entities/callisto-group.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="callisto-group" tabindex="-1">Callisto Group <a class="header-anchor" href="#callisto-group" aria-label="Permalink to &quot;Callisto Group&quot;">​</a></h1><p>The <strong>Callisto Group</strong> is a cyber unit operating under Russia&#39;s <a href="/entities/fsb">Federal Security Service</a> that U.S. authorities accused in 2024 of orchestrating an &quot;ongoing and sophisticated spear phishing campaign&quot; aimed at gaining unauthorized access to the computers and email accounts of American targets.[1]</p><h2 id="_2024-domain-seizures" tabindex="-1">2024 domain seizures <a class="header-anchor" href="#_2024-domain-seizures" aria-label="Permalink to &quot;2024 domain seizures&quot;">​</a></h2><p>On Thursday, October 3, 2024, the <a href="/entities/department-of-justice">Department of Justice</a> revealed that U.S. authorities had seized dozens of internet domains used by Russian intelligence agents and their proxies to steal valuable information from U.S. government computers and email accounts.[1] A warrant unsealed that week named the Callisto Group and alleged that Russian-directed cybercriminals had pilfered &quot;valuable information and sensitive United States government intelligence.&quot;[1]</p><p>Targets described in the warrant included former U.S. intelligence employees, former and current <a href="/entities/department-of-defense">Department of Defense</a> personnel, <a href="/entities/state-department">Department of State</a> employees, <a href="/entities/department-of-energy">Department of Energy</a> staff, U.S. military contractors and U.S.-based companies.[1] The Justice Department seized 41 internet domains and coordinated the takedowns with <a href="/entities/microsoft">Microsoft</a>, which seized an additional 66 unique domains operated by the same group.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;FEMA&#39;s Broke. Ukraine is Collapsing. The EU is Doomed.&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-41f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-41f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/callisto-group.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const callistoGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  callistoGroup as default
};
