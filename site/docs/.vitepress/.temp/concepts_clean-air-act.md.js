import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Clean Air Act","description":"","frontmatter":{"title":"Clean Air Act","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["climate","regulation","law"],"sources":["raw/badlands-brief-05f.md"],"confidence":"low"},"headers":[],"relativePath":"concepts/clean-air-act.md","filePath":"concepts/clean-air-act.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/clean-air-act.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="clean-air-act" tabindex="-1">Clean Air Act <a class="header-anchor" href="#clean-air-act" aria-label="Permalink to &quot;Clean Air Act&quot;">​</a></h1><p>The Clean Air Act is the U.S. federal statute under which the <a href="/entities/environmental-protection-agency">Environmental Protection Agency</a> regulates air pollutant emissions.[1]</p><h2 id="role-in-climate-regulation" tabindex="-1">Role in climate regulation <a class="header-anchor" href="#role-in-climate-regulation" aria-label="Permalink to &quot;Role in climate regulation&quot;">​</a></h2><p>The EPA&#39;s 2009 <a href="/concepts/endangerment-finding">endangerment finding</a> — that greenhouse gases such as carbon dioxide endanger public health and welfare — provided the foundational basis under the Clean Air Act for regulating emissions from vehicles, power plants, oil-and-gas facilities, and other sources.[1] The <a href="/entities/trump-administration">Trump administration</a>&#39;s 2026 rescission of that finding was accordingly presented as removing the statutory hook for federal greenhouse gas rules, beginning with motor vehicle emissions standards.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Fiesta of Fake Elections, Fake Files &amp; Fake Crises&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-05f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-05f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/clean-air-act.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cleanAirAct = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  cleanAirAct as default
};
