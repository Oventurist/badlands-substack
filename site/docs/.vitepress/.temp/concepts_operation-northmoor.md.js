import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Operation Northmoor","description":"","frontmatter":{"title":"Operation Northmoor","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"concept","tags":["uk","war-crimes","afghanistan","investigation"],"sources":["raw/badlands-brief-707.md"],"confidence":"medium"},"headers":[],"relativePath":"concepts/operation-northmoor.md","filePath":"concepts/operation-northmoor.md","lastUpdated":null}');
const _sfc_main = { name: "concepts/operation-northmoor.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="operation-northmoor" tabindex="-1">Operation Northmoor <a class="header-anchor" href="#operation-northmoor" aria-label="Permalink to &quot;Operation Northmoor&quot;">​</a></h1><p>Operation Northmoor was the principal British military investigation, running from 2014 to 2019, into alleged war crimes committed by UK forces — including the <a href="/entities/special-air-service">Special Air Service</a> — during operations in Afghanistan.[1]</p><p>The probe was later found to have been closed &quot;inappropriately and prematurely&quot; despite serious outstanding concerns, according to testimony before a public inquiry.[1] That same inquiry heard that the director of UK Special Forces made a &quot;conscious decision&quot; to conceal potential wrongdoing.[1] The collapse of Northmoor is cited as a reason the allegations resurfaced through a 2022 BBC Panorama investigation and the subsequent human rights inquiry that triggered mass resignations from 22 SAS in April 2026.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;TACO Tuesday Reigns Supreme as the Age of Accountability Nears&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-707" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-707</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("concepts/operation-northmoor.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const operationNorthmoor = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  operationNorthmoor as default
};
