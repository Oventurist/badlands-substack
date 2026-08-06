import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Hussein Salameh","description":"","frontmatter":{"title":"Hussein Salameh","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","intelligence","middle-east"],"sources":["raw/badlands-brief-e3b.md"],"confidence":"low"},"headers":[],"relativePath":"entities/hussein-salameh.md","filePath":"entities/hussein-salameh.md","lastUpdated":null}');
const _sfc_main = { name: "entities/hussein-salameh.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="hussein-salameh" tabindex="-1">Hussein Salameh <a class="header-anchor" href="#hussein-salameh" aria-label="Permalink to &quot;Hussein Salameh&quot;">​</a></h1><p>Hussein Salameh is the intelligence chief of <a href="/entities/syria">Syria</a> under the post-Assad government.[1]</p><p>Salameh took part in the US-hosted Paris talks that produced the Israel–Syria joint &quot;fusion mechanism&quot; for intelligence sharing and de-escalation, attending alongside Syrian Foreign Minister <a href="/entities/assad-al-shaibani">Assad al-Shaibani</a> and US envoys <a href="/entities/steve-witkoff">Steve Witkoff</a>, <a href="/entities/jared-kushner">Jared Kushner</a> and <a href="/entities/tom-barrack">Tom Barrack</a>.[1] The channel the parties agreed to establish is designed to manage sensitive exchanges, coordinate security messaging and resolve disputes promptly under US supervision.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Mad-Lad Maduro, Media Meltdowns &amp; Weapons of the Future&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3b" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3b</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/hussein-salameh.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const husseinSalameh = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  husseinSalameh as default
};
