import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael Faulkender","description":"","frontmatter":{"title":"Michael Faulkender","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["treasury","irs","trump-administration"],"sources":["raw/badlands-news-brief-11d.md"],"confidence":"low"},"headers":[],"relativePath":"entities/michael-faulkender.md","filePath":"entities/michael-faulkender.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-faulkender.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-faulkender" tabindex="-1">Michael Faulkender <a class="header-anchor" href="#michael-faulkender" aria-label="Permalink to &quot;Michael Faulkender&quot;">​</a></h1><p>Michael Faulkender is a Deputy Treasury Secretary in the second <a href="/entities/trump-administration">Trump administration</a>.[1] In April 2025 he became the focus of a dispute over the leadership of the <a href="/entities/internal-revenue-service">Internal Revenue Service</a>: Treasury Secretary <a href="/entities/scott-bessent">Scott Bessent</a> pressed President <a href="/entities/donald-trump">Donald Trump</a> to install Faulkender as acting IRS commissioner after <a href="/entities/elon-musk">Elon Musk</a> had gone around Bessent to place <a href="/entities/gary-shapley">Gary Shapley</a> in the role, despite the IRS reporting to the Treasury Department.[1] Trump agreed, capping a chaotic stretch in which the IRS was overseen by three different acting commissioners in a single week, and the confrontation is said to have culminated in the <a href="/concepts/musk-bessent-white-house-altercation">Musk–Bessent White House altercation</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Fake MAGA Break-ups and Based Accelerationism&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-11d" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-11d</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-faulkender.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelFaulkender = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelFaulkender as default
};
