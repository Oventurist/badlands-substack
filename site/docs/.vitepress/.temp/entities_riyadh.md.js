import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Riyadh","description":"","frontmatter":{"title":"Riyadh","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["saudi-arabia","najd","city","oases"],"sources":["raw/arabian-nights.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/riyadh.md","filePath":"entities/riyadh.md","lastUpdated":null}');
const _sfc_main = { name: "entities/riyadh.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="riyadh" tabindex="-1">Riyadh <a class="header-anchor" href="#riyadh" aria-label="Permalink to &quot;Riyadh&quot;">​</a></h1><p>Riyadh — &quot;The Gardens&quot; — is the modern capital of <a href="/entities/saudi-arabia">Saudi Arabia</a> and the hometown of the <a href="/entities/house-of-saud">House of Saud</a>.[1]</p><p>The name derives from the string of oases in the area around which communities formed and on which <a href="/concepts/bedouin">Bedouin</a> nomads depended in order to traverse the desert.[1] <a href="/entities/mohammed-bin-saud">Mohammed bin Saud</a> was emir of Diriyah, a small farming community on the outskirts of Riyadh, where the ancient symbiosis between sedentary oasis farmers and warlike nomads gave rise to the politics of government.[1]</p><p>Riyadh does not appear on maps of Arabian tribes circa 600 AD because it was not yet a place of significance; its location corresponds roughly to where al-Yamamah is shown.[1] In 2017 the city was the setting for both the <a href="/concepts/sword-dance">Sword Dance</a> and the <a href="/concepts/ritz-carlton-purge">Ritz-Carlton Purge</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Arabian Nights&quot;, URL: <a href="https://badlands.substack.com/p/arabian-nights" target="_blank" rel="noreferrer">https://badlands.substack.com/p/arabian-nights</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/riyadh.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const riyadh = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  riyadh as default
};
