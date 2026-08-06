import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"COMELEC (Commission on Elections, Philippines)","description":"","frontmatter":{"title":"COMELEC (Commission on Elections, Philippines)","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["philippines","elections","corruption","smartmatic"],"sources":["raw/badlands-news-brief-153.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/comelec.md","filePath":"entities/comelec.md","lastUpdated":null}');
const _sfc_main = { name: "entities/comelec.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="comelec" tabindex="-1">COMELEC <a class="header-anchor" href="#comelec" aria-label="Permalink to &quot;COMELEC&quot;">​</a></h1><p>The <strong>Commission on Elections (COMELEC)</strong> is the Philippine government body responsible for administering national elections. It is central to the U.S. federal bribery and money laundering case against voting technology company <a href="/entities/smartmatic">Smartmatic</a>.[1]</p><h2 id="role-in-the-smartmatic-bribery-case" tabindex="-1">Role in the Smartmatic bribery case <a class="header-anchor" href="#role-in-the-smartmatic-bribery-case" aria-label="Permalink to &quot;Role in the Smartmatic bribery case&quot;">​</a></h2><p>Federal prosecutors allege that Smartmatic executives Roger Alejandro Piñate Martinez and Jorge Miguel Vasquez orchestrated over $1 million in bribes to <strong>Juan Andres Donato Bautista</strong>, the former Chairman of COMELEC.[1] The payments, said to have taken place between 2015 and 2018, were intended to secure and maintain contracts for SGO Corporation Limited, including favorable VAT reimbursements and other government payments, as Smartmatic sought a deal to assist in administering the Philippines&#39; 2016 presidential election and to ensure prompt payment for its services.[1]</p><p>According to a superseding indictment filed in Miami federal court, the scheme was funded by inflating the cost of voting machines for the 2016 Philippine elections, with the bribes concealed using coded language, fake contracts and loan agreements, and funds routed through bank accounts in Asia, Europe, and the Southern District of Florida.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Very Productive Phone Calls &amp; Presidential Memorandums&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-153" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-153</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/comelec.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const comelec = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  comelec as default
};
