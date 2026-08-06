import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Global Times","description":"","frontmatter":{"title":"Global Times","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["media","china","state-media","information-war"],"sources":["raw/badlands-news-brief-579.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/global-times.md","filePath":"entities/global-times.md","lastUpdated":null}');
const _sfc_main = { name: "entities/global-times.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="global-times" tabindex="-1">Global Times <a class="header-anchor" href="#global-times" aria-label="Permalink to &quot;Global Times&quot;">​</a></h1><p>Global Times is a Chinese state-affiliated newspaper used as an outlet for official and semi-official messaging directed at foreign audiences.[1]</p><h2 id="publication-of-the-cia-color-revolution-report" tabindex="-1">Publication of the CIA color revolution report <a class="header-anchor" href="#publication-of-the-cia-color-revolution-report" aria-label="Permalink to &quot;Publication of the CIA color revolution report&quot;">​</a></h2><p>On May 4, 2023, Global Times released a report compiled by China&#39;s National Computer Virus Emergency Response Center and the cybersecurity company 360, alleging that the <a href="/entities/cia">Central Intelligence Agency</a> had spent decades fomenting <a href="/concepts/color-revolution">color revolutions</a> around the world using technical means.[1] The document claimed that Washington&#39;s technological advantage allowed it to hold sway over institutions and individuals worldwide that rely on US-made digital equipment or software.[1]</p><p>According to the report as published, the CIA had attempted to overthrow governments in at least 50 states, with the 2014 Maidan coup in Ukraine, the 2014 &quot;Sunflower Revolution&quot; in Taiwan and the 2009 &quot;Green Revolution&quot; in Iran among the most notable examples.[1] It further alleged that the agency relied on methods including &quot;48 advanced cyber weapons,&quot; and that the toolkit involved encrypted network communication services such as US-developed TOR technology to help protesters communicate while avoiding government surveillance.[1]</p><p><a href="/entities/badlands-media">Badlands Media</a> commentary held that the report indicated that long-standing claims about CIA-driven regime change no longer amounted to conspiracy theory.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Resignations Tracked, Banks Shuttered &amp; Woke Fails&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-579" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-579</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/global-times.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const globalTimes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  globalTimes as default
};
