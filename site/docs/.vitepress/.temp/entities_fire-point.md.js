import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Fire Point","description":"","frontmatter":{"title":"Fire Point","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["ukraine","drones","defense-industry","mindich"],"sources":["raw/badlands-brief-6f4.md"],"confidence":"low"},"headers":[],"relativePath":"entities/fire-point.md","filePath":"entities/fire-point.md","lastUpdated":null}');
const _sfc_main = { name: "entities/fire-point.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="fire-point" tabindex="-1">Fire Point <a class="header-anchor" href="#fire-point" aria-label="Permalink to &quot;Fire Point&quot;">​</a></h1><p>Fire Point is a Ukrainian drone manufacturer described in Badlands coverage as &quot;now notorious.&quot;[1] The company originally produced drones used for scouting filming locations and subsequently shifted to producing drones for warfare amid the <a href="/concepts/russian-invasion-of-ukraine">Russian invasion of Ukraine</a>.[1]</p><p>Ukrainian businessman <a href="/entities/timur-mindich">Timur Mindich</a> is alleged to be connected to the company.[1] Those allegations circulate in political commentary and had not been substantiated by evidence presented by the Ukrainian government at the time of reporting.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Illegal Psychological Warfare Campaigns &amp; Misprision of Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6f4" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6f4</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/fire-point.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const firePoint = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  firePoint as default
};
