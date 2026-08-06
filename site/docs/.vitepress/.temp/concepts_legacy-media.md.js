import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Legacy Media","description":"","frontmatter":{"title":"Legacy Media","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["media","information-war","badlands-media","narrative-warfare"],"sources":["raw/badlands-blitz-episode-2.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/legacy-media.md","filePath":"concepts/legacy-media.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/legacy-media.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="legacy-media" tabindex="-1">Legacy Media <a class="header-anchor" href="#legacy-media" aria-label="Permalink to &quot;Legacy Media&quot;">​</a></h1><p><strong>Legacy media</strong> is the term used in <a href="/entities/badlands-media">Badlands Media</a> commentary for the established corporate and broadcast press, contrasted with the independent and citizen-journalist outlets that Badlands identifies with.[1]</p><p>The dismantling of legacy media supplied half the subtitle of the second episode of <a href="/concepts/the-blitz">The Blitz</a>, published 17 January 2026 as &quot;Info War Victory Laps &amp; the Dismantling of Legacy Media.&quot;[1] The episode paired that theme with a discussion of <a href="/concepts/info-war-victory-laps">Info War victory laps</a>, treating the decline of the established press and the growing confidence of independent researchers as two sides of the same development in the <a href="/concepts/information-war">Info War</a>.[1]</p><p>The framing is consistent with the outlet&#39;s wider editorial posture, in which independent and reader-funded publishing — all Badlands content, including The Blitz, being free and sustained by voluntary paid subscriptions — is presented as the successor to advertiser- and institution-funded legacy outlets.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands Blitz Episode 2&quot;, URL: <a href="https://badlands.substack.com/p/badlands-blitz-episode-2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-blitz-episode-2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/legacy-media.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const legacyMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  legacyMedia as default
};
