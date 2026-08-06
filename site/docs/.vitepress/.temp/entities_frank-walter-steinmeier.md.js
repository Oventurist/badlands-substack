import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Frank-Walter Steinmeier","description":"","frontmatter":{"title":"Frank-Walter Steinmeier","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["germany","transatlantic-relations","world-order"],"sources":["raw/badlands-brief-094.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/frank-walter-steinmeier.md","filePath":"entities/frank-walter-steinmeier.md","lastUpdated":null}');
const _sfc_main = { name: "entities/frank-walter-steinmeier.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="frank-walter-steinmeier" tabindex="-1">Frank-Walter Steinmeier <a class="header-anchor" href="#frank-walter-steinmeier" aria-label="Permalink to &quot;Frank-Walter Steinmeier&quot;">​</a></h1><p>Frank-Walter Steinmeier is the President of Germany. In January 2026 he publicly warned that United States policy under President <a href="/entities/donald-trump">Donald Trump</a> was helping erode the global order, citing the US operation that captured Venezuelan President <a href="/entities/nicolas-maduro">Nicolás Maduro</a> among the developments he described as destabilizing.[1]</p><h2 id="a-den-of-robbers" tabindex="-1">&quot;A den of robbers&quot; <a class="header-anchor" href="#a-den-of-robbers" aria-label="Permalink to &quot;&quot;A den of robbers&quot;&quot;">​</a></h2><p>Steinmeier accused the United States of undermining the world order and warned against turning global politics into &quot;a den of robbers.&quot;[1] His comments were paired in press coverage with those of French President <a href="/entities/emmanuel-macron">Emmanuel Macron</a>, who lamented that the US was turning away from its allies.[1]</p><p>Badlands contributor GhostofBasedPatrickHenry dismissed the complaint, suggesting that great-power politics had always operated on the basis of raw capability and that Trump was merely pulling back the curtain on an arrangement that predated him.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Somali Shatterpoints, Cartel Countermeasures, &amp; Erosion of the World Order&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-094" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-094</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/frank-walter-steinmeier.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const frankWalterSteinmeier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  frankWalterSteinmeier as default
};
