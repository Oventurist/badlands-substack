import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Latakia","description":"","frontmatter":{"title":"Latakia","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["syria","russia","airbase","mediterranean"],"sources":["raw/badlands-news-brief-86f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/latakia.md","filePath":"entities/latakia.md","lastUpdated":null}');
const _sfc_main = { name: "entities/latakia.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="latakia" tabindex="-1">Latakia <a class="header-anchor" href="#latakia" aria-label="Permalink to &quot;Latakia&quot;">​</a></h1><p>Latakia is a coastal Syrian province and city that hosts the Hmeimim airbase used by Russian forces, the aerial counterpart to the Russian naval facility at <a href="/entities/tartus">Tartus</a>.[1]</p><p>Israeli airstrikes on the night of December 16, 2024 targeted sites in Latakia province alongside the heavier bombardment of Tartus.[1] The Syrian Observatory for Human Rights reported that Israeli aircraft struck air defense units and ground-to-ground missile bases along the Syrian coast.[1] Following the collapse of the Assad government, Western reporting claimed Russia was abandoning both Hmeimim and Tartus, a claim rejected by Russian Foreign Minister <a href="/entities/sergei-lavrov">Sergei Lavrov</a>.[1] Badlands commentary noted that the two bases serve as the staging ground for the <a href="/entities/wagner-group">Wagner Group</a>&#39;s Africa Corps operations across the African continent, making strikes against them consequential well beyond Syria.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Media Apologies, Fake &amp; Gay Drones and Trump Appointments&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-86f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-86f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/latakia.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const latakia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  latakia as default
};
