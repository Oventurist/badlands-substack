import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Assad al-Shaibani","description":"","frontmatter":{"title":"Assad al-Shaibani","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","diplomacy","middle-east"],"sources":["raw/badlands-brief-e3b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/assad-al-shaibani.md","filePath":"entities/assad-al-shaibani.md","lastUpdated":null}');
const _sfc_main = { name: "entities/assad-al-shaibani.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="assad-al-shaibani" tabindex="-1">Assad al-Shaibani <a class="header-anchor" href="#assad-al-shaibani" aria-label="Permalink to &quot;Assad al-Shaibani&quot;">​</a></h1><p>Assad al-Shaibani is the Foreign Minister of <a href="/entities/syria">Syria</a> under the government of President <a href="/entities/ahmed-al-sharaa">Ahmed al-Sharaa</a>.[1]</p><p>Al-Shaibani participated in senior-level talks in Paris hosted by the United States that produced an agreement between Israel and Syria to establish a joint &quot;fusion mechanism&quot; for intelligence sharing, military de-escalation, diplomatic engagement and exploration of commercial opportunities.[1] He attended alongside Syrian intelligence chief Hussein Salameh, Israeli officials including Ambassador <a href="/entities/yechiel-leiter">Yechiel Leiter</a>, and US envoys <a href="/entities/steve-witkoff">Steve Witkoff</a>, <a href="/entities/jared-kushner">Jared Kushner</a> and <a href="/entities/tom-barrack">Tom Barrack</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mad-Lad Maduro, Media Meltdowns &amp; Weapons of the Future&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/assad-al-shaibani.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const assadAlShaibani = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  assadAlShaibani as default
};
