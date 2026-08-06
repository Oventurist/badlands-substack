import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Najd","description":"","frontmatter":{"title":"Najd","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["arabia","geography","saudi-arabia","wahhabism"],"sources":["raw/arabian-nights.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/najd.md","filePath":"entities/najd.md","lastUpdated":null}');
const _sfc_main = { name: "entities/najd.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="najd" tabindex="-1">Najd <a class="header-anchor" href="#najd" aria-label="Permalink to &quot;Najd&quot;">​</a></h1><p>The Najd is the central region of Arabia and the birthplace of both the <a href="/entities/house-of-saud">House of Saud</a> and <a href="/concepts/wahhabism">Wahhabism</a>.[1]</p><p><a href="/entities/muhammad-ibn-abd-al-wahhab">Muhammad ibn Abd al-Wahhab</a> was born there in the early 1700s to a family of jurists and raised under a strict orthodox view of Islam.[1] At the same time <a href="/entities/mohammed-bin-saud">Mohammed bin Saud</a>, emir of the farming settlement of Diriyah near <a href="/entities/riyadh">Riyadh</a>, was growing discontent with the status quo in the same region.[1] Bin Saud organized and funded long-distance merchant caravans with the <a href="/concepts/bedouin">Bedouin</a> and over time established an expanding network of influence across the Najd.[1]</p><p>The oasis town of Uyayna, from which al-Wahhab was expelled, lay only a short distance from Diriyah.[1] Bin Saud&#39;s pledge at the founding of their alliance invoked the region directly: &quot;if all Nejd was summoned to throw you out, we will never agree to expel you.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/najd.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const najd = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  najd as default
};
