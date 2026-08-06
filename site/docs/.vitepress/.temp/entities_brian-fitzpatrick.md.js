import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Brian Fitzpatrick","description":"","frontmatter":{"title":"Brian Fitzpatrick","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","healthcare","pennsylvania"],"sources":["raw/badlands-news-brief-143.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/brian-fitzpatrick.md","filePath":"entities/brian-fitzpatrick.md","lastUpdated":null}');
const _sfc_main = { name: "entities/brian-fitzpatrick.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="brian-fitzpatrick" tabindex="-1">Brian Fitzpatrick <a class="header-anchor" href="#brian-fitzpatrick" aria-label="Permalink to &quot;Brian Fitzpatrick&quot;">​</a></h1><p>Brian Fitzpatrick is a Republican U.S. Representative from Pennsylvania, generally counted among the House GOP moderates representing competitive districts.[1]</p><h2 id="obamacare-subsidies-and-the-johnson-health-plan" tabindex="-1">Obamacare subsidies and the Johnson health plan <a class="header-anchor" href="#obamacare-subsidies-and-the-johnson-health-plan" aria-label="Permalink to &quot;Obamacare subsidies and the Johnson health plan&quot;">​</a></h2><p>In December 2025 Fitzpatrick was among a band of vulnerable House Republicans who had long warned about the expiration of key Obamacare subsidies. Speaker <a href="/entities/mike-johnson">Mike Johnson</a> moved toward a Wednesday vote on a health care bill that he and other Republican leaders presented as an alternative to the tax credits set to expire at the end of the month, with no plans to allow a vote before then on extending the subsidies.[1]</p><p>Early signs indicated the moderates would fall in line. &quot;I haven&#39;t seen anything objectionable yet,&quot; Fitzpatrick said on Monday, December 15. &quot;For me to vote against it, I&#39;d have to find something objectionable. I wouldn&#39;t vote against it in protest.&quot; He said it would be &quot;a huge mistake&quot; not to include an extension, but that he votes &quot;for or against legislation based on the merits of the bill.&quot;[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands News Brief — &quot;Pedish Patricide, ISIS-Inspired Disarmament, &amp; Trump&#39;s Love Language&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-143" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-143</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/brian-fitzpatrick.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const brianFitzpatrick = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  brianFitzpatrick as default
};
