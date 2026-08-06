import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Michael McAuliffe","description":"","frontmatter":{"title":"Michael McAuliffe","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["attorney","florida","dei","commentary"],"sources":["raw/badlands-news-brief-3b0.md"],"confidence":"low"},"headers":[],"relativePath":"entities/michael-mcauliffe.md","filePath":"entities/michael-mcauliffe.md","lastUpdated":null}');
const _sfc_main = { name: "entities/michael-mcauliffe.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="michael-mcauliffe" tabindex="-1">Michael McAuliffe <a class="header-anchor" href="#michael-mcauliffe" aria-label="Permalink to &quot;Michael McAuliffe&quot;">​</a></h1><p>Michael McAuliffe is a former federal prosecutor and former elected state attorney in Florida who has commented publicly on the legal reach of the state&#39;s actions against <a href="/entities/disney">disney</a>.[1]</p><p>In August 2023 he told <a href="/entities/newsweek">Newsweek</a> that the <a href="/entities/central-florida-tourism-oversight-district">Central Florida Tourism Oversight District</a>&#39;s announcement that it had summarily ended all diversity, equity, and inclusion initiatives within its jurisdiction &quot;appears to be a mixture of political posturing and legal implementation.&quot;[1] He added that Disney, like many other American companies, was &quot;likely revamping its DEI initiatives to identify ways to promote a productive and vibrant workforce without running afoul of the newly announced prohibition on race as an explicit remedial factor in its business decisions.&quot;[1]</p><p>His assessment was cited by <a href="/entities/badlands-media">Badlands Media</a> commentators as evidence that the policy change might produce less substantive effect at Disney than its political framing suggested.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Trump Card ...&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-3b0" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-3b0</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/michael-mcauliffe.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const michaelMcauliffe = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  michaelMcauliffe as default
};
