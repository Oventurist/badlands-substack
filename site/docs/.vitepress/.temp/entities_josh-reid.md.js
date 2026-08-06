import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Josh Reid","description":"","frontmatter":{"title":"Josh Reid","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["badlands-media","host","podcast"],"sources":["raw/badlands-media-show-schedule-c28.md","raw/badlands-media-show-schedule-e18.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/josh-reid.md","filePath":"entities/josh-reid.md","lastUpdated":null}');
const _sfc_main = { name: "entities/josh-reid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="josh-reid" tabindex="-1">Josh Reid <a class="header-anchor" href="#josh-reid" aria-label="Permalink to &quot;Josh Reid&quot;">​</a></h1><p>Josh Reid is a host affiliated with <a href="/entities/badlands-media">Badlands Media</a>. He co-hosts <strong>The Earth Chronicles</strong> with <a href="/entities/david-whitehead">David Whitehead</a>, airing Wednesdays at 3pm ET as of the network&#39;s December 2022 schedule.[1]</p><p>The program discusses ongoing sociopolitical events from a global perspective, supplying the international dimension of the Badlands lineup.[1]</p><p>A second Badlands Media schedule post, published January 3, 2023 to open the 2023 broadcast year, carried the same listing and description, and reiterated that all network shows air live on the Patel Patriot Rumble channel with replays archived on the Badlands Media library channel.[2]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-c28" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-c28</a></li><li>Badlands Brief — &quot;Badlands Media Show Schedule&quot;, URL: <a href="https://badlands.substack.com/p/badlands-media-show-schedule-e18" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-media-show-schedule-e18</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/josh-reid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joshReid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joshReid as default
};
