import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Donald Palmer","description":"","frontmatter":{"title":"Donald Palmer","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["election-assistance-commission","elections","republican-party"],"sources":["raw/badlands-brief-805.md"],"confidence":"low"},"headers":[],"relativePath":"entities/donald-palmer.md","filePath":"entities/donald-palmer.md","lastUpdated":null}');
const _sfc_main = { name: "entities/donald-palmer.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="donald-palmer" tabindex="-1">Donald Palmer <a class="header-anchor" href="#donald-palmer" aria-label="Permalink to &quot;Donald Palmer&quot;">​</a></h1><p>Donald Palmer was a Republican commissioner of the U.S. <a href="/entities/election-assistance-commission">Election Assistance Commission</a>.[1]</p><p>Palmer voluntarily left the commission earlier in 2026, before President <a href="/entities/donald-trump">Donald Trump</a>&#39;s July 9 removal of the remaining members.[1] His prior departure meant that when Democratic commissioners <a href="/entities/thomas-hicks">Thomas Hicks</a> and <a href="/entities/benjamin-hovland">Benjamin Hovland</a> were terminated by email and Republican <a href="/entities/christy-mccormick">Christy McCormick</a> resigned, the statutorily four-member agency was left entirely vacant.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;RIP Lindsey Graham&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-805" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-805</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/donald-palmer.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const donaldPalmer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  donaldPalmer as default
};
