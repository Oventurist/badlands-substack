import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Great Awakening","description":"","frontmatter":{"title":"Great Awakening","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["qanon","great-awakening","badlands-media","truth-community"],"sources":["raw/badlands-media-weekly-show-schedule-36d.md"],"confidence":"high"},"headers":[],"relativePath":"concepts/great-awakening.md","filePath":"concepts/great-awakening.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/great-awakening.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><p>The Great Awakening is a theme within the <a href="/concepts/truth-community">truth-community</a> served by <a href="/entities/badlands-media">badlands-media</a>, referring to a perceived collective political and spiritual awakening.[1] The network&#39;s Raising a Nation show (Saturday, 9pm ET), hosted by The Kate Awakening and Defender of the Republic, centers on &quot;all things Great Awakening from the perspective of parents trying to raise the next generation of sovereign citizens.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Weekly Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-weekly-show-schedule-36d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/great-awakening.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const greatAwakening = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  greatAwakening as default
};
