import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Pepe Escobar","description":"","frontmatter":{"title":"Pepe Escobar","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["journalism","geopolitics","china","multipolarity"],"sources":["raw/badlands-news-brief-4b9.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/pepe-escobar.md","filePath":"entities/pepe-escobar.md","lastUpdated":null}');
const _sfc_main = { name: "entities/pepe-escobar.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pepe-escobar" tabindex="-1">Pepe Escobar <a class="header-anchor" href="#pepe-escobar" aria-label="Permalink to &quot;Pepe Escobar&quot;">​</a></h1><p>Pepe Escobar is a geopolitical journalist whose reporting on multipolar-world affairs is frequently cited in <a href="/entities/badlands-media">Badlands Media</a> commentary.[1]</p><h2 id="reporting-on-trump-s-chinese-reception" tabindex="-1">Reporting on Trump&#39;s Chinese reception <a class="header-anchor" href="#reporting-on-trump-s-chinese-reception" aria-label="Permalink to &quot;Reporting on Trump&#39;s Chinese reception&quot;">​</a></h2><p>Following the July 13, 2024 <a href="/concepts/attempted-assassination-of-donald-trump-2024">attempted assassination of Donald Trump</a>, Escobar reported that the event had made <a href="/entities/donald-trump">Trump</a> a viral sensation on Chinese social media.[1] He noted that Trump has for years been known in China as <em>Comrade Jianguo</em> (建国同志), meaning &quot;Comrade Build-Country,&quot; and by the related phrase <em>Chuān Jiànguó</em> (川建国), literally &quot;Build the Country Trump&quot; but commonly rendered as &quot;Making China Great Again,&quot; reflecting a popular Chinese perception that Trump&#39;s actions ultimately benefit the Chinese working class.[1] According to Escobar, Chinese social media users were broadly wishing &quot;Comrade Jianguo&quot; a speedy recovery and praying for his safety.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: The Shot Heard Around the World&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-4b9" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-4b9</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/pepe-escobar.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pepeEscobar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  pepeEscobar as default
};
