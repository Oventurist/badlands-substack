import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Timber Sycamore","description":"","frontmatter":{"title":"Timber Sycamore","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["cia","syria","proxy-war","regime-change"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/timber-sycamore.md","filePath":"concepts/timber-sycamore.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/timber-sycamore.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="timber-sycamore" tabindex="-1">Timber Sycamore <a class="header-anchor" href="#timber-sycamore" aria-label="Permalink to &quot;Timber Sycamore&quot;">​</a></h1><p>Timber Sycamore was a <a href="/entities/cia">CIA</a> program through which the agency armed and trained militant groups aimed at pressuring the government of <a href="/entities/bashar-al-assad">Bashar al-Assad</a> in Syria.[1]</p><p>Badlands Media cites the program as public evidence that both the CIA and the <a href="/entities/pentagon">Pentagon</a> were involved in funding and bolstering Syrian proxy groups, while the Pentagon&#39;s own efforts were focused more on fighting <a href="/entities/isis">ISIS</a>, particularly through support for the predominantly Kurdish <a href="/entities/syrian-democratic-forces">Syrian Democratic Forces</a>.[1] The termination of the CIA&#39;s program in 2017 under President <a href="/entities/donald-trump">Donald Trump</a> was seen as a shift in U.S. policy toward counter-terrorism rather than regime change.[1]</p><p>The article invokes Timber Sycamore to argue that the rebel forces who toppled Assad in December 2024 were backed by foreign money, arms, and motives, situating the program within a longer lineage of proxy warfare that runs from CIA support for the <a href="/entities/mujahideen">Mujahideen</a> against the Soviets forward to <a href="/entities/hayat-tahrir-al-sham">Hayat Tahrir al-Sham</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/timber-sycamore.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const timberSycamore = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  timberSycamore as default
};
