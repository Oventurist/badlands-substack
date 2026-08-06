import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"McKinsey & Company","description":"","frontmatter":{"title":"McKinsey & Company","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["consulting","globalism","polycrisis"],"sources":["raw/badlands-brief-5a2.md"],"confidence":"low"},"headers":[],"relativePath":"entities/mckinsey.md","filePath":"entities/mckinsey.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mckinsey.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mckinsey-company" tabindex="-1">McKinsey &amp; Company <a class="header-anchor" href="#mckinsey-company" aria-label="Permalink to &quot;McKinsey &amp; Company&quot;">​</a></h1><p>McKinsey &amp; Company is a global management consulting firm invoked in Badlands commentary for its role in popularizing the concept of a &quot;polycrisis.&quot;[1]</p><h2 id="polycrisis-framing" tabindex="-1">Polycrisis framing <a class="header-anchor" href="#polycrisis-framing" aria-label="Permalink to &quot;Polycrisis framing&quot;">​</a></h2><p><a href="/entities/ashe-in-america">Ashe in America</a> wrote that McKinsey &quot;told us a Polycrisis was coming&quot; and that the sustained crisis cascade which followed overwhelmed the nation — suggesting the firm was revealing a plan rather than making a prediction.[1] She attributed the pattern not to Democrats but to &quot;unipartisan globalists,&quot; adding that the system was interconnected and was now being dismantled and restructured.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Tina Peters&#39; Sentence Commuted; ISIS Killed in Africa&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-5a2" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-5a2</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mckinsey.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mckinsey = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mckinsey as default
};
