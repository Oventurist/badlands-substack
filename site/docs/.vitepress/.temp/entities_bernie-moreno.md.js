import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bernie Moreno","description":"","frontmatter":{"title":"Bernie Moreno","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["senate","canada","sanctions","wildfires"],"sources":["raw/badlands-brief-1c6.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/bernie-moreno.md","filePath":"entities/bernie-moreno.md","lastUpdated":null}');
const _sfc_main = { name: "entities/bernie-moreno.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bernie-moreno" tabindex="-1">Bernie Moreno <a class="header-anchor" href="#bernie-moreno" aria-label="Permalink to &quot;Bernie Moreno&quot;">​</a></h1><p>Bernie Moreno is a Republican U.S. Senator who announced plans to introduce legislation imposing sanctions on Canada and certain Canadian government officials in response to wildfire smoke degrading air quality across portions of the United States.[1] In a Fox News interview, Moreno said the proposal would include sanctions, asset freezes, visa restrictions and tariffs.[1]</p><p>The proposal was reported alongside the <a href="/concepts/canadian-wildfire-smoke-crisis-2026">2026 Canadian wildfire smoke crisis</a>, in which smoke produced unhealthy air quality across the Great Lakes, Ohio Valley, Mid-Atlantic and Northeast, and alongside a letter from four Republican House members criticizing the Canadian government&#39;s forest management policies.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Spain Wins The [American] World Cup&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-1c6" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-1c6</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/bernie-moreno.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bernieMoreno = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bernieMoreno as default
};
