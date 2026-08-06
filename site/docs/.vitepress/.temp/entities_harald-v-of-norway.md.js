import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"King Harald V of Norway","description":"","frontmatter":{"title":"King Harald V of Norway","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["norway","monarchy","europe"],"sources":["raw/badlands-brief-fbb.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/harald-v-of-norway.md","filePath":"entities/harald-v-of-norway.md","lastUpdated":null}');
const _sfc_main = { name: "entities/harald-v-of-norway.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="king-harald-v-of-norway" tabindex="-1">King Harald V of Norway <a class="header-anchor" href="#king-harald-v-of-norway" aria-label="Permalink to &quot;King Harald V of Norway&quot;">​</a></h1><p>Harald V is the reigning monarch of <a href="/entities/norway">Norway</a>, on the throne since 1991. In February 2026, at age 89, he was admitted to a hospital on Spain&#39;s Canary Island of Tenerife during a private winter vacation with Queen Sonja.[1]</p><p>The royal palace confirmed on Tuesday, February 24, 2026, that the king was being treated for an unspecified infection and dehydration and was in good condition. His personal physician traveled to Tenerife for further evaluation, with an update expected the following day.[1]</p><p>The hospitalization drew attention because it coincided with the hospitalization of former prime minister <a href="/entities/thorbjorn-jagland">Thorbjørn Jagland</a> amid a corruption investigation tied to the <a href="/concepts/epstein-files">Epstein Files</a>. Badlands commentator <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> described the timing as &quot;a notable coincidence, but probably just that: a coincidence.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Unity, Patricide, &amp; Political Violence&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fbb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fbb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/harald-v-of-norway.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const haraldVOfNorway = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  haraldVOfNorway as default
};
