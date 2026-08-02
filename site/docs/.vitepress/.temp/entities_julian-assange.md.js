import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Julian Assange","description":"","frontmatter":{"title":"Julian Assange","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["person","journalist","wikileaks","press-freedom"],"sources":["raw/a-swan-song-for-the-msm.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"entities/julian-assange.md","filePath":"entities/julian-assange.md","lastUpdated":null}');
const _sfc_main = { name: "entities/julian-assange.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="julian-assange" tabindex="-1">Julian Assange <a class="header-anchor" href="#julian-assange" aria-label="Permalink to &quot;Julian Assange&quot;">​</a></h1><p>Julian Assange is the Australian publisher and founder of WikiLeaks, whose disclosures of classified U.S. military and diplomatic material made him the central figure in modern press-freedom litigation.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p><a href="/concepts/a-swan-song-for-the-msm">A Swan Song for the MSM</a> cites Assange, with <a href="/entities/gary-webb">Gary Webb</a>, as an exemplar of the journalistic function that the <a href="/concepts/first-amendment">First Amendment</a> was written to protect — &quot;a mechanism to confront, undermine, subvert and check institutions of authority and the most powerful people in our country.&quot; The article contrasts his record of exposing corruption within the <a href="/entities/cia">CIA</a>, the <a href="/entities/fbi">FBI</a>, Wall Street and the <a href="/concepts/military-industrial-complex">military industrial complex</a> with the output of credentialed corporate journalists such as <a href="/entities/taylor-lorenz">Taylor Lorenz</a>, arguing that institutional employment is no guarantee of journalism and that its absence is no bar to it.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-swan-song-for-the-msm" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/julian-assange.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const julianAssange = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  julianAssange as default
};
