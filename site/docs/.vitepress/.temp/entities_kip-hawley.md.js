import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Kip Hawley","description":"","frontmatter":{"title":"Kip Hawley","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["tsa","aviation-security","homeland-security","screening"],"sources":["raw/badlands-news-brief-6af.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/kip-hawley.md","filePath":"entities/kip-hawley.md","lastUpdated":null}');
const _sfc_main = { name: "entities/kip-hawley.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="kip-hawley" tabindex="-1">Kip Hawley <a class="header-anchor" href="#kip-hawley" aria-label="Permalink to &quot;Kip Hawley&quot;">​</a></h1><p>Kip Hawley is a former administrator of the <a href="/entities/transportation-security-administration">Transportation Security Administration</a>, cited in Badlands commentary for a 2010 statement explaining the agency&#39;s rationale for uniform passenger screening rules.[1]</p><h2 id="the-2010-equity-statement" tabindex="-1">The 2010 equity statement <a class="header-anchor" href="#the-2010-equity-statement" aria-label="Permalink to &quot;The 2010 equity statement&quot;">​</a></h2><p>Hawley said: &quot;We apply the same rules to everyone because it&#39;s more equitable and more effective than trying to guess who looks suspicious.&quot;[1] Badlands contributor <a href="/entities/ashe-in-america">Ashe in America</a> presented the remark as confirmation that the TSA&#39;s blanket shoe-removal requirement — imposed on all travelers from 2006 onward following the attempted shoe bombing by <a href="/entities/richard-reid">Richard Reid</a> — was driven by an equity principle rather than by security effectiveness, on the premise that profiling for terrorists had been deemed racist.[1]</p><p>That framing was invoked again in July 2025, when reporting indicated that passengers at certain US airports were no longer required to remove their shoes, ending what the commentary called &quot;a stupid and inconvenient era&quot; fifteen years in the unwinding.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: ICE Swarms, TikTok Pivots, &amp; Shoes Stay On&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-6af" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-6af</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/kip-hawley.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const kipHawley = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  kipHawley as default
};
