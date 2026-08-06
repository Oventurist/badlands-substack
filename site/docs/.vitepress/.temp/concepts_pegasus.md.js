import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pegasus","description":"","frontmatter":{"title":"Pegasus","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["surveillance","spyware","cia","iran","psyop"],"sources":["raw/badlands-brief-949.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/pegasus.md","filePath":"concepts/pegasus.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/pegasus.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pegasus" tabindex="-1">Pegasus <a class="header-anchor" href="#pegasus" aria-label="Permalink to &quot;Pegasus&quot;">​</a></h1><p>Pegasus is surveillance and intrusion software developed by the Israeli firm <a href="/entities/nso-group">NSO Group</a>.[1]</p><p>In April 2026, a report carried by the Times of Israel and cited by Badlands stated that the <a href="/entities/cia">CIA</a> had used Pegasus to conduct a deception operation against <a href="/entities/islamic-revolutionary-guard-corps">Islamic Revolutionary Guard Corps</a> officials during the rescue of a U.S. airman reported shot down over <a href="/entities/iran">Iran</a>.[1]</p><p>Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> used the disclosure to argue that if deception operations are acknowledged at the tactical level, larger elements of the <a href="/concepts/iran-war">Iran War</a> narrative — including the shootdown itself, and potentially the war as a whole — may also be deception operations.[1] He cited Iran&#39;s practice of responding to U.S. missile attacks with AI-generated videos in a LEGO aesthetic as evidence inconsistent with the conduct of a genuine belligerent regime.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tulsi Exposes Traitors; Peace Talks in Pakistan&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-949" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-949</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/pegasus.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pegasus = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pegasus as default
};
