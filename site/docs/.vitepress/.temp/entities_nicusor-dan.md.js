import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Nicusor Dan","description":"","frontmatter":{"title":"Nicusor Dan","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["romania","president","politics","europe"],"sources":["raw/badlands-brief-b62.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/nicusor-dan.md","filePath":"entities/nicusor-dan.md","lastUpdated":null}');
const _sfc_main = { name: "entities/nicusor-dan.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="nicusor-dan" tabindex="-1">Nicusor Dan <a class="header-anchor" href="#nicusor-dan" aria-label="Permalink to &quot;Nicusor Dan&quot;">​</a></h1><p>Nicusor Dan is the President of <a href="/entities/romania">Romania</a>.[1]</p><h2 id="role-in-the-may-2026-government-crisis" tabindex="-1">Role in the May 2026 government crisis <a class="header-anchor" href="#role-in-the-may-2026-government-crisis" aria-label="Permalink to &quot;Role in the May 2026 government crisis&quot;">​</a></h2><p>Following the successful no-confidence vote that toppled Prime Minister <a href="/entities/ilie-bolojan">Ilie Bolojan</a>&#39;s pro-EU minority government, constitutional responsibility fell to Dan to nominate a new prime minister, with Bolojan continuing in a limited interim role until a replacement government was approved.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Reckoning of Fake Elections, Fake Wars and Fake Allies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b62</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/nicusor-dan.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const nicusorDan = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  nicusorDan as default
};
