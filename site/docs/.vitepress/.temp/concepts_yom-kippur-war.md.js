import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Yom Kippur War","description":"","frontmatter":{"title":"Yom Kippur War","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["israel",1973,"war","middle-east","nuclear-weapons","energy-crisis"],"sources":["raw/badlands-brief-b62.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/yom-kippur-war.md","filePath":"concepts/yom-kippur-war.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/yom-kippur-war.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="yom-kippur-war" tabindex="-1">Yom Kippur War <a class="header-anchor" href="#yom-kippur-war" aria-label="Permalink to &quot;Yom Kippur War&quot;">​</a></h1><p>The Yom Kippur War of 1973 was a conflict between <a href="/entities/israel">Israel</a> and Arab states that Badlands commentary links to both the era&#39;s energy crisis and the history of the <a href="/concepts/israeli-nuclear-program">Israeli nuclear program</a>.[1]</p><h2 id="alleged-nuclear-coercion-of-the-nixon-administration" tabindex="-1">Alleged nuclear coercion of the Nixon administration <a class="header-anchor" href="#alleged-nuclear-coercion-of-the-nixon-administration" aria-label="Permalink to &quot;Alleged nuclear coercion of the Nixon administration&quot;">​</a></h2><p>According to convicted Israeli spy <a href="/entities/jonathan-pollard">Jonathan Pollard</a>, President <a href="/entities/richard-nixon">Richard Nixon</a> cut off shipments of weapons and ammunition to Israel during the war in an attempt to de-escalate and free the United States of liability or involvement.[1] Pollard says Israel responded by loading a nuclear warhead onto a plane, parking it on a runway, and inviting the Nixon administration to observe by satellite, then threatening to use the weapon against the Arabs unless conventional shipments resumed immediately.[1] He claims the shipments resumed the very next day.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;The Reckoning of Fake Elections, Fake Wars and Fake Allies&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-b62" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-b62</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/yom-kippur-war.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const yomKippurWar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  yomKippurWar as default
};
