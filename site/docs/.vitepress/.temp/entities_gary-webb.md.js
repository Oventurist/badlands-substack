import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Gary Webb","description":"","frontmatter":{"title":"Gary Webb","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","investigative-reporting","cia"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"low"},"headers":[],"relativePath":"entities/gary-webb.md","filePath":"entities/gary-webb.md","lastUpdated":null}');
const _sfc_main = { name: "entities/gary-webb.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="gary-webb" tabindex="-1">Gary Webb <a class="header-anchor" href="#gary-webb" aria-label="Permalink to &quot;Gary Webb&quot;">​</a></h1><p>Gary Webb was an American investigative journalist invoked by Badlands Media as a benchmark of genuine journalistic practice.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><p>The article names Webb alongside <a href="/entities/julian-assange">Julian Assange</a> as a reporter who challenged and exposed consequential lies, dark secrets and corruption within institutions such as the <a href="/entities/cia">CIA</a>, the <a href="/entities/fbi">FBI</a>, Wall Street and the <a href="/concepts/military-industrial-complex">military-industrial complex</a>.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a> He is contrasted with <a href="/entities/taylor-lorenz">Taylor Lorenz</a>, who Badlands argues has done nothing comparable and has instead pursued cancellation campaigns over language.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a> The comparison supports the article&#39;s central claim that the modern corporate press no longer performs the journalistic function protected by the <a href="/concepts/first-amendment">First Amendment</a>.<a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Swan Song for the MSM&quot;, URL: <a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-swan-song-for-the-msm</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/gary-webb.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const garyWebb = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  garyWebb as default
};
