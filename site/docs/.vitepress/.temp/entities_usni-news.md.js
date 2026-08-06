import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"USNI News","description":"","frontmatter":{"title":"USNI News","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","us-navy","naval-institute","reporting"],"sources":["raw/badlands-brief-6fd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/usni-news.md","filePath":"entities/usni-news.md","lastUpdated":null}');
const _sfc_main = { name: "entities/usni-news.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="usni-news" tabindex="-1">USNI News <a class="header-anchor" href="#usni-news" aria-label="Permalink to &quot;USNI News&quot;">​</a></h1><p>USNI News is the news service of the United States Naval Institute, widely used as an authoritative open-source tracker of U.S. Navy fleet movements and deployments.[1]</p><p>On May 6, 2026, USNI News reported that the aircraft carrier <a href="/entities/uss-gerald-r-ford">USS Gerald R. Ford</a> had transited the Strait of Gibraltar and entered the Atlantic, homeward bound for Norfolk, Virginia after 315 days of deployment.[1] The report included an imagery post from X showing the carrier passing through the strait, timestamped 7:08 AM EST.[1] Badlands contributor <a href="/entities/ghostofbasedpatrickhenry">GhostofBasedPatrickHenry</a> treated the timing of the USNI report — nine minutes before President <a href="/entities/donald-trump">Donald Trump</a> threatened to resume bombing <a href="/entities/iran">Iran</a> — as the decisive &quot;tell&quot; that the conflict had already been settled and that <a href="/concepts/project-freedom">Project Freedom</a> was narrative theater.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Trump Rugs the Zionists; FBI Raids the Virginia Democrats&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-6fd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-6fd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/usni-news.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usniNews = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  usniNews as default
};
