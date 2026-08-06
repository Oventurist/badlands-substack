import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Zhaoyan Wang","description":"","frontmatter":{"title":"Zhaoyan Wang","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["biolab","china","fraud","fugitive"],"sources":["raw/badlands-brief-2c5.md"],"confidence":"low"},"headers":[],"relativePath":"entities/zhaoyan-wang.md","filePath":"entities/zhaoyan-wang.md","lastUpdated":null}');
const _sfc_main = { name: "entities/zhaoyan-wang.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="zhaoyan-wang" tabindex="-1">Zhaoyan Wang <a class="header-anchor" href="#zhaoyan-wang" aria-label="Permalink to &quot;Zhaoyan Wang&quot;">​</a></h1><p>Zhaoyan Wang was the business partner of Chinese national <a href="/entities/jia-bei-zhu">Jia Bei Zhu</a> in the <a href="/entities/universal-meditech">Universal Meditech</a> operation prosecuted in California.[1]</p><p>Wang was indicted for his role in a scheme that fraudulently sold more than a million faulty COVID-19 tests imported from China for nearly $4 million between 2020 and 2023.[1] Trial evidence showed that Zhu and Wang deliberately hired inexperienced employees — cellphone salespeople, supermarket workers and childcare workers — who &quot;would not ask any questions,&quot; with some recruited through the Fresno County Economic Development Corporation.[1]</p><p>Wang fled to China and remains a fugitive from the United States.[1] Badlands commentary cited his flight as an aggravating circumstance in the decision by a federal magistrate to release <a href="/entities/ori-solomon">Ori Solomon</a>, the manager of Zhu&#39;s <a href="/concepts/las-vegas-biolab">Las Vegas</a> property, pending trial.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Bioweapons Sneak Into the News Cycle as Israeli Shenanigans Ensue&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-2c5" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-2c5</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/zhaoyan-wang.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const zhaoyanWang = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  zhaoyanWang as default
};
