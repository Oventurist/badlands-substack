import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Joy Reid","description":"","frontmatter":{"title":"Joy Reid","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","television-host","msnbc","media-criticism"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/joy-reid.md","filePath":"entities/joy-reid.md","lastUpdated":null}');
const _sfc_main = { name: "entities/joy-reid.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="joy-reid" tabindex="-1">Joy Reid <a class="header-anchor" href="#joy-reid" aria-label="Permalink to &quot;Joy Reid&quot;">​</a></h1><p>Joy Reid is an American television host and commentator who anchored a primetime program on <a href="/entities/msnbc">MSNBC</a>.</p><h2 id="in-the-badlands-critique" tabindex="-1">In the Badlands critique <a class="header-anchor" href="#in-the-badlands-critique" aria-label="Permalink to &quot;In the Badlands critique&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> cites Reid, together with <a href="/entities/jen-psaki">Jen Psaki</a>, as evidence of what it calls the rampant mediocrity of cable news, inviting the reader to &quot;try to sit through five minutes of Joy Reid or Jen Psaki&#39;s god awful MSNBC shows.&quot; The author notes that he attempts this exercise &quot;semi regularly&quot; and that &quot;it takes a strong stomach.&quot; Reid&#39;s program is offered as a specimen of programming whose emphasis is on &quot;highlighting our differences and smugly asserting why &#39;our team&#39; is better than &#39;their team&#39;&quot; rather than on the adversarial function the corpus assigns to genuine journalism.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/joy-reid.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const joyReid = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  joyReid as default
};
