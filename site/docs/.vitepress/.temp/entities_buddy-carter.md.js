import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Buddy Carter","description":"","frontmatter":{"title":"Buddy Carter","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["congress","republican","georgia","taxation"],"sources":["raw/badlands-news-brief-0cd.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/buddy-carter.md","filePath":"entities/buddy-carter.md","lastUpdated":null}');
const _sfc_main = { name: "entities/buddy-carter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="buddy-carter" tabindex="-1">Buddy Carter <a class="header-anchor" href="#buddy-carter" aria-label="Permalink to &quot;Buddy Carter&quot;">​</a></h1><p>Buddy Carter is a Republican member of the U.S. House of Representatives from Georgia and an advocate for replacing the federal income tax system with a national consumption tax.[1]</p><h2 id="fairtax-advocacy" tabindex="-1">FairTax advocacy <a class="header-anchor" href="#fairtax-advocacy" aria-label="Permalink to &quot;FairTax advocacy&quot;">​</a></h2><p>On April 16, 2024, Carter and fellow Georgia Republican <a href="/entities/andrew-clyde">Andrew Clyde</a> introduced a resolution that would declare April 16 — the day after Tax Day — as &quot;FairTax Day,&quot; as part of the broader <a href="/concepts/fairtax-act">FairTax Act</a> (H.R. 25).[1] The bill would replace the current tax code with a national consumption tax and eliminate both the <a href="/entities/internal-revenue-service">Internal Revenue Service</a> and Tax Day itself.[1]</p><p>Speaking to The Daily Caller before introducing the resolution, Carter said that &quot;Americans spend over six billion hours per year filing their taxes&quot; and that the FairTax &quot;allows you to keep 100% of your paycheck and choose how much you pay in taxes every year.&quot;[1] He characterized the existing system as one that &quot;punishes success and puts unelected bureaucrats in charge of your paycheck,&quot; and urged that April 15, 2024, be the last Tax Day ever.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Media — &quot;Badlands News Brief: Based Bodegas, Limp Sanctions &amp; Scared Bankers&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-0cd" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-0cd</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/buddy-carter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const buddyCarter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  buddyCarter as default
};
