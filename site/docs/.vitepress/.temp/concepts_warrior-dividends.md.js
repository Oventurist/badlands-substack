import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Warrior Dividends","description":"","frontmatter":{"title":"Warrior Dividends","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["military","policy","state-of-the-union"],"sources":["raw/badlands-brief-fbb.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/warrior-dividends.md","filePath":"concepts/warrior-dividends.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/warrior-dividends.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="warrior-dividends" tabindex="-1">Warrior Dividends <a class="header-anchor" href="#warrior-dividends" aria-label="Permalink to &quot;Warrior Dividends&quot;">​</a></h1><p>&quot;Warrior Dividends&quot; is a payment program for U.S. military personnel promoted by the second <a href="/entities/donald-trump">Trump</a> administration and described as being for &quot;our great military heroes.&quot;[1]</p><p>The program appeared on the list of accomplishments in the <a href="/entities/white-house">White House</a> statement issued after the <a href="/concepts/2026-state-of-the-union">2026 State of the Union Address</a>, among the items the administration said congressional Democrats refused to applaud.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Unity, Patricide, &amp; Political Violence&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-fbb" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-fbb</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/warrior-dividends.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const warriorDividends = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  warriorDividends as default
};
