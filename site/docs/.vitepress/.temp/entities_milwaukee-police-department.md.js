import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Milwaukee Police Department","description":"","frontmatter":{"title":"Milwaukee Police Department","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["law-enforcement","milwaukee","2020-election","fbi"],"sources":["raw/badlands-brief-739.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/milwaukee-police-department.md","filePath":"entities/milwaukee-police-department.md","lastUpdated":null}');
const _sfc_main = { name: "entities/milwaukee-police-department.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="milwaukee-police-department" tabindex="-1">Milwaukee Police Department <a class="header-anchor" href="#milwaukee-police-department" aria-label="Permalink to &quot;Milwaukee Police Department&quot;">​</a></h1><p>The Milwaukee Police Department is the municipal law enforcement agency for Milwaukee, Wisconsin, whose officers provided security at election facilities during the 2020 general election.[1]</p><p>In May 2026 the <a href="/entities/fbi">FBI</a> was reportedly preparing to interview multiple department officers as part of its investigation into Wisconsin&#39;s 2020 election, according to sources cited by the Milwaukee Journal Sentinel.[1] The interviews, which could begin within a week, were expected to focus on officers stationed at Milwaukee&#39;s central count facility and at polling places on Election Night, in an inquiry that also touched the <a href="/entities/milwaukee-election-commission">Milwaukee Election Commission</a> and the <a href="/entities/wisconsin-elections-commission">Wisconsin Elections Commission</a>.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Weapons Stockpiles &amp; Bundt Cake Treason&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-739" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-739</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/milwaukee-police-department.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const milwaukeePoliceDepartment = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  milwaukeePoliceDepartment as default
};
