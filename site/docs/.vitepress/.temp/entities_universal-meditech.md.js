import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Universal Meditech Inc.","description":"","frontmatter":{"title":"Universal Meditech Inc.","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["biolab","medical-devices","fraud","california","covid-tests"],"sources":["raw/badlands-brief-2c5.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/universal-meditech.md","filePath":"entities/universal-meditech.md","lastUpdated":null}');
const _sfc_main = { name: "entities/universal-meditech.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="universal-meditech-inc" tabindex="-1">Universal Meditech Inc. <a class="header-anchor" href="#universal-meditech-inc" aria-label="Permalink to &quot;Universal Meditech Inc.&quot;">​</a></h1><p>Universal Meditech Inc., later operating as Prestige Biotech, was a medical-device company run by Chinese national <a href="/entities/jia-bei-zhu">Jia Bei Zhu</a> in the Fresno/Reedley area of California.[1]</p><p>Zhu was convicted in federal court for operating the company, on charges of conspiracy to commit wire fraud, multiple counts of wire fraud, distributing adulterated and misbranded medical devices, and making a false statement to the <a href="/entities/food-and-drug-administration">FDA</a>.[1] The firm fraudulently sold more than one million faulty COVID-19 tests imported from China for nearly $4 million between 2020 and 2023.[1]</p><p>An associated warehouse laboratory discovered in Reedley in 2022 held vials labeled as pathogens including &quot;HIV,&quot; &quot;tuberculosis,&quot; &quot;malaria,&quot; &quot;hepatitis,&quot; and &quot;Ebola,&quot; according to a report by the <a href="/entities/select-committee-on-the-chinese-communist-party">Select Committee on the Chinese Communist Party</a>.[1] Staffing was drawn from inexperienced workers who &quot;would not ask any questions,&quot; some hired via the Fresno County Economic Development Corporation.[1] Materials later found in the garage of Zhu&#39;s <a href="/concepts/las-vegas-biolab">Las Vegas</a> rental property may have been connected to the company&#39;s California operations.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bioweapons Sneak Into the News Cycle as Israeli Shenanigans Ensue&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2c5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2c5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/universal-meditech.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const universalMeditech = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  universalMeditech as default
};
