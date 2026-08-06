import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Service Employees International Union","description":"","frontmatter":{"title":"Service Employees International Union","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["labor","unions","immigration","minnesota"],"sources":["raw/badlands-brief-a20.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/seiu.md","filePath":"entities/seiu.md","lastUpdated":null}');
const _sfc_main = { name: "entities/seiu.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="service-employees-international-union-seiu" tabindex="-1">Service Employees International Union (SEIU) <a class="header-anchor" href="#service-employees-international-union-seiu" aria-label="Permalink to &quot;Service Employees International Union (SEIU)&quot;">​</a></h1><p>The Service Employees International Union (SEIU) is a large American labor union representing workers in health care, public services and property services.[1]</p><h2 id="minnesota-general-strike-endorsement-january-2026" tabindex="-1">Minnesota general strike endorsement (January 2026) <a class="header-anchor" href="#minnesota-general-strike-endorsement-january-2026" aria-label="Permalink to &quot;Minnesota general strike endorsement (January 2026)&quot;">​</a></h2><p>In January 2026, local and regional SEIU affiliates joined the <a href="/entities/afl-cio">AFL-CIO</a>, the <a href="/entities/american-federation-of-teachers">American Federation of Teachers</a> and other labor organizations in publicly endorsing the &quot;ICE Out of Minnesota: Day of Truth and Freedom,&quot; a statewide economic blackout and general strike called for Friday, January 23, 2026 in response to <a href="/concepts/operation-metro-surge">Operation Metro Surge</a>.[1] The coalition of faith leaders, community groups and unions behind the action called for no work except emergency services, no school and no shopping, and issued demands including the withdrawal of <a href="/entities/immigration-and-customs-enforcement">ICE</a> from Minnesota, punishment of the officer involved in the death of Renée Good, no additional ICE funding, and state and local policies further severing ties with ICE.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Prosecutions for Democracy &amp; Double-Hatted Peace Panelists&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-a20" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-a20</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/seiu.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const seiu = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  seiu as default
};
