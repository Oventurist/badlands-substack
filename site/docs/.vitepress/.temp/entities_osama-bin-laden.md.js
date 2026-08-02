import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Osama bin Laden","description":"","frontmatter":{"title":"Osama bin Laden","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["al-qaeda","afghanistan","terrorism"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/osama-bin-laden.md","filePath":"entities/osama-bin-laden.md","lastUpdated":null}');
const _sfc_main = { name: "entities/osama-bin-laden.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="osama-bin-laden" tabindex="-1">Osama bin Laden <a class="header-anchor" href="#osama-bin-laden" aria-label="Permalink to &quot;Osama bin Laden&quot;">​</a></h1><p>Osama bin Laden (1957–2011) was the founder of <a href="/entities/al-qaeda">Al-Qaeda</a>, the militant Islamist organization responsible for the September 11, 2001 attacks on the United States. In the Badlands Media article &quot;A Conflict of Interest,&quot; bin Laden is cited as a key figure in the early history of the <a href="/entities/libyan-islamic-fighting-group">Libyan Islamic Fighting Group</a> and its leader <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a>.</p><p>According to the article, Belhaj first met Osama Bin Laden while fighting in Afghanistan against the Soviet Union in the 1980s. The source claims Belhaj went to Sudan after Bin Laden moved his operations there, and then followed Bin Laden back to Afghanistan after he was kicked out of Sudan. It further asserts that Belhaj was running Al-Qaeda training camps in Afghanistan and was &quot;a close associate of Osama Bin Laden and one of Al-Qaeda&#39;s most important leaders,&quot; which is why he went into hiding immediately after 9/11 and was arrested in Malaysia.</p><p>The article connects Bin Laden to the broader narrative of covert U.S. foreign policy, noting that the <a href="/entities/mujahideen">Mujahideen</a>—including fighters who later joined Al-Qaeda and LIFG—were created and funded by the <a href="/entities/cia">CIA</a> during the Soviet-Afghan War. The source uses this historical connection to argue that the U.S. government has consistently armed and trained the very terrorists it later claims to be at war with, creating a self-perpetuating cycle of conflict designed to justify continued military spending and taxpayer theft.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/osama-bin-laden.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const osamaBinLaden = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  osamaBinLaden as default
};
