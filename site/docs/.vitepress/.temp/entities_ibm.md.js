import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"IBM","description":"","frontmatter":{"title":"IBM","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["technology","digital-assets","blockchain","stablecoin","tokenization"],"sources":["raw/badlands-news-brief-545.md"],"confidence":"high"},"headers":[],"relativePath":"entities/ibm.md","filePath":"entities/ibm.md","lastUpdated":null}');
const _sfc_main = { name: "entities/ibm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ibm" tabindex="-1">IBM <a class="header-anchor" href="#ibm" aria-label="Permalink to &quot;IBM&quot;">​</a></h1><p>IBM is a global technology provider that in October 2025 moved deeper into crypto and digital-asset infrastructure with the launch of a platform aimed at banks, governments, and large corporations.[1]</p><h2 id="digital-asset-haven" tabindex="-1">Digital Asset Haven <a class="header-anchor" href="#digital-asset-haven" aria-label="Permalink to &quot;Digital Asset Haven&quot;">​</a></h2><p>On Monday, October 27, 2025, IBM announced the <a href="/concepts/ibm-digital-asset-haven">IBM Digital Asset Haven</a>, a platform designed to let institutions manage digital assets securely across multiple blockchains.[1] The platform offers custody, transaction routing, and settlement across more than 40 public and private chains, together with compliance tooling such as identity verification and anti-money-laundering checks delivered through APIs and developer tools.[1]</p><p>A software-as-a-service version of the platform was expected to go live in the final quarter of 2025, with broader support planned for the second quarter of 2026.[1] The launch was reported against a backdrop of growing institutional interest in <a href="/concepts/stablecoin">stablecoins</a> and tokenized real-world assets as cheaper, faster cross-border alternatives to traditional banking rails.[1]</p><p>Badlands commentary treated the announcement as confirmation that &quot;nothing can stop what is coming&quot; is more than a slogan.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Badlands News Brief: Shutdown Consequences, Canadian Propaganda, &amp; Console War Conclusions&quot;, URL: <a href="https://badlands.substack.com/p/badlands-news-brief-545" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-news-brief-545</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/ibm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ibm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  ibm as default
};
