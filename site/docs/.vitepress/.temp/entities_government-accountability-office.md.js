import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Government Accountability Office","description":"","frontmatter":{"title":"Government Accountability Office","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","oversight","auditing","ukraine-aid"],"sources":["raw/badlands-news-brief-5b2.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/government-accountability-office.md","filePath":"entities/government-accountability-office.md","lastUpdated":null}');
const _sfc_main = { name: "entities/government-accountability-office.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="government-accountability-office" tabindex="-1">Government Accountability Office <a class="header-anchor" href="#government-accountability-office" aria-label="Permalink to &quot;Government Accountability Office&quot;">​</a></h1><p>The Government Accountability Office (GAO) is the audit and investigative arm of the United States Congress, responsible for reviewing how federal agencies spend appropriated funds.[1]</p><h2 id="oversight-of-ukraine-aid" tabindex="-1">Oversight of Ukraine aid <a class="header-anchor" href="#oversight-of-ukraine-aid" aria-label="Permalink to &quot;Oversight of Ukraine aid&quot;">​</a></h2><p>In March 2024, the GAO reported on the lack of oversight over funds and materiel flowing to Ukraine during the war, finding that the <a href="/entities/department-of-defense">Department of Defense</a> lacked the ability to properly account for the resources being sent.[1] The GAO wrote that &quot;DOD does not have quality data to track delivery of defense articles to Ukraine&quot; and that &quot;DOD guidance on PDA does not clearly define at what point in the delivery process defense articles should be recorded as delivered or provide clear instructions for how DOD service branches are to confirm delivery.&quot;[1] The office added that full documentation of funding sent to the military effort had been lacking.[1]</p><h2 id="badlands-interpretation" tabindex="-1">Badlands interpretation <a class="header-anchor" href="#badlands-interpretation" aria-label="Permalink to &quot;Badlands interpretation&quot;">​</a></h2><p>Badlands commentator <a href="/entities/burning-bright">Burning Bright</a> paired the GAO&#39;s findings with Ukrainian reporting on diverted fortification funds in Kharkiv, asking whether the Pentagon genuinely lacked delivery data or was simply declining to share it — a question he tied to speculation about <a href="/concepts/continuity-of-government">continuity of government</a> operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Sovereign Alliance Comms and Tapwater Goblins&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-5b2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-5b2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/government-accountability-office.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const governmentAccountabilityOffice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  governmentAccountabilityOffice as default
};
