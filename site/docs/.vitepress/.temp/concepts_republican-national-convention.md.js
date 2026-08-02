import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Republican National Convention","description":"","frontmatter":{"title":"Republican National Convention","created":"2026-08-02T00:00:00.000Z","updated":"2026-08-02T00:00:00.000Z","type":"concept","tags":["event","2024-election","republican-party","nomination"],"sources":["raw/a-week-to-remember.md"],"confidence":"high","contested":false},"headers":[],"relativePath":"concepts/republican-national-convention.md","filePath":"concepts/republican-national-convention.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/republican-national-convention.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="republican-national-convention" tabindex="-1">Republican National Convention <a class="header-anchor" href="#republican-national-convention" aria-label="Permalink to &quot;Republican National Convention&quot;">​</a></h1><p>The Republican National Convention is the quadrennial gathering at which the Republican Party formally nominates its presidential and vice-presidential candidates. The 2024 convention took place in the days immediately following the July 13 assassination attempt on <a href="/entities/donald-trump">Donald Trump</a> at Butler, Pennsylvania.</p><h2 id="in-the-badlands-corpus" tabindex="-1">In the Badlands corpus <a class="header-anchor" href="#in-the-badlands-corpus" aria-label="Permalink to &quot;In the Badlands corpus&quot;">​</a></h2><p>The Badlands Media essay <a href="/concepts/a-week-to-remember">A Week to Remember</a> cites the convention as one element of an extraordinarily compressed political sequence. Summarising the period, <a href="/entities/erik-carlson">Erik Carlson</a> writes: &quot;Since the rally in Butler, Trump has picked <a href="/entities/jd-vance">JD Vance</a> as his VP, the RNC occurred, and <a href="/entities/joe-biden">Biden</a> has dropped out of the race.&quot;</p><p>The article uses this concentration of events — a shooting, a running-mate selection, a nominating convention, and the withdrawal of the sitting president from his own re-election campaign, all within roughly ten days — to establish its opening premise that &quot;with every new day, a tectonic shift of the narrative occurs.&quot;</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-week-to-remember" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/republican-national-convention.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const republicanNationalConvention = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  republicanNationalConvention as default
};
