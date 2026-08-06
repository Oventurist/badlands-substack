import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mujahideen","description":"","frontmatter":{"title":"Mujahideen","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["cia","proxy-war","al-qaeda","cold-war"],"sources":["raw/assad-day-in-damascus.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/mujahideen.md","filePath":"entities/mujahideen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mujahideen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mujahideen" tabindex="-1">Mujahideen <a class="header-anchor" href="#mujahideen" aria-label="Permalink to &quot;Mujahideen&quot;">​</a></h1><p>The Mujahideen were the Afghan fighters built up by the <a href="/entities/cia">CIA</a> to fight the Soviets in the twilight of the Cold War, and are described by Badlands Media as the precursor to <a href="/entities/al-qaeda">al-Qaeda</a>.[1]</p><p>The article uses the Mujahideen as the founding example of a newer era of warfare in which localized proxy groups are used instead of sending U.S. troops directly — a pattern it says characterizes most conflicts since World War II.[1] That lineage runs forward through CIA and <a href="/entities/pentagon">Pentagon</a> sponsorship of Syrian proxy groups, including <a href="/concepts/timber-sycamore">Timber Sycamore</a>, to the rise of <a href="/entities/hayat-tahrir-al-sham">Hayat Tahrir al-Sham</a> and the December 2024 ouster of <a href="/entities/bashar-al-assad">Bashar al-Assad</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Assad Day in Damascus&quot;, URL: <a href="https://badlands.substack.com/p/assad-day-in-damascus" target="_blank" rel="noreferrer">https://badlands.substack.com/p/assad-day-in-damascus</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mujahideen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mujahideen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mujahideen as default
};
