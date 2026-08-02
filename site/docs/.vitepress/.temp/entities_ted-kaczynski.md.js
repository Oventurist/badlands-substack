import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Ted Kaczynski","description":"","frontmatter":{"title":"Ted Kaczynski","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["unabomber","anti-industrialism","transhumanism","ideology"],"sources":["raw/a-look-at-recent-features-84d.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/ted-kaczynski.md","filePath":"entities/ted-kaczynski.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ted-kaczynski.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ted-kaczynski" tabindex="-1">Ted Kaczynski <a class="header-anchor" href="#ted-kaczynski" aria-label="Permalink to &quot;Ted Kaczynski&quot;">​</a></h1><p>Theodore &quot;Ted&quot; Kaczynski, referred to in the source as Theodor Kaczynski and better known as the Unabomber, is the subject of the Badlands Media feature &quot;On Ted Kaczynski and False Prophets,&quot; published October 25, 2025 by <a href="/entities/matthew-ehret">Matthew Ehret</a> and highlighted in the November 7, 2025 roundup <a href="/concepts/a-look-at-recent-features-84d">&quot;A Look At Recent Features&quot;</a>.</p><h2 id="treatment-in-the-badlands-corpus" tabindex="-1">Treatment in the Badlands corpus <a class="header-anchor" href="#treatment-in-the-badlands-corpus" aria-label="Permalink to &quot;Treatment in the Badlands corpus&quot;">​</a></h2><p>Ehret&#39;s excerpt describes the feature as a continuation of earlier writing in which readers &quot;were introduced to the figure of Theodor Kaczynski (aka: The Unabomber,) and the common axioms he shared with the leading oligarchists running the <a href="/entities/world-economic-forum">World Economic Forum</a> and <a href="/concepts/great-reset">Great Reset</a> today.&quot;</p><p>The argument implied by this framing is unusual and interpretive: rather than treating Kaczynski as a lone anti-technology extremist opposed to elite power, the Badlands treatment presents him as sharing underlying premises — &quot;common axioms&quot; — with the technocratic and depopulationist currents the outlet attributes to Davos-aligned institutions. The reference to &quot;false prophets&quot; in the title suggests that Ehret regards Kaczynski as a figure whose anti-industrial critique functions, whether wittingly or not, as a controlled or convergent expression of the same anti-human philosophy he claimed to oppose. This theme connects to Ehret&#39;s related features on transhumanism and on eco-terrorism, both also listed in the same roundup.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-look-at-recent-features-84d" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ted-kaczynski.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tedKaczynski = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tedKaczynski as default
};
