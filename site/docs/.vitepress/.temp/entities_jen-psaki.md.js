import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jen Psaki","description":"","frontmatter":{"title":"Jen Psaki","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","television-host","msnbc","white-house"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/jen-psaki.md","filePath":"entities/jen-psaki.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jen-psaki.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jen-psaki" tabindex="-1">Jen Psaki <a class="header-anchor" href="#jen-psaki" aria-label="Permalink to &quot;Jen Psaki&quot;">​</a></h1><p>Jen Psaki is an American political figure who served as White House Press Secretary in the Biden administration before moving to a hosting role at <a href="/entities/msnbc">MSNBC</a>.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> pairs Psaki with <a href="/entities/joy-reid">Joy Reid</a> as illustrations of the state of cable punditry, describing their MSNBC programs in dismissive terms and using them to argue that mainstream news now consists of &quot;substance-free affirmations of the modern liberal cult-of-personality talking points.&quot; Her career trajectory from government spokesperson to network host is consistent with the article&#39;s broader thesis that &quot;the media IS the establishment&quot; rather than a check upon it.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jen-psaki.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jenPsaki = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jenPsaki as default
};
