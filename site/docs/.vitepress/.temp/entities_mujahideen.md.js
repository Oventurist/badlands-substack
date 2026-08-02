import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Mujahideen","description":"","frontmatter":{"title":"Mujahideen","created":"2026-08-01T00:00:00.000Z","updated":"2026-08-01T00:00:00.000Z","type":"entity","tags":["afghanistan","cia","al-qaeda","soviet-union"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"medium","contested":true},"headers":[],"relativePath":"entities/mujahideen.md","filePath":"entities/mujahideen.md","lastUpdated":null}');
const _sfc_main = { name: "entities/mujahideen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="mujahideen" tabindex="-1">Mujahideen <a class="header-anchor" href="#mujahideen" aria-label="Permalink to &quot;Mujahideen&quot;">​</a></h1><p>The Mujahideen were Afghan guerrilla fighters who resisted the Soviet invasion of Afghanistan from 1979 to 1989. In the Badlands Media article &quot;A Conflict of Interest,&quot; the Mujahideen are cited as the foundation of the covert network that later produced <a href="/entities/al-qaeda">Al-Qaeda</a> and the <a href="/entities/libyan-islamic-fighting-group">Libyan Islamic Fighting Group</a>.</p><p>According to the article, the <a href="/entities/cia">CIA</a> created and funded the Mujahideen to protect its &quot;heroin trade&quot; in Afghanistan. The source claims that <a href="/entities/abdelhakim-belhaj">Abdelhakim Belhaj</a> fought in Afghanistan for the Mujahideen against the Soviets in the 1980s, which was where he first met <a href="/entities/osama-bin-laden">Osama Bin Laden</a>. The article asserts that the CIA&#39;s support for the Mujahideen laid the groundwork for the emergence of Al-Qaeda and affiliated groups, creating a self-perpetuating cycle in which the U.S. government trained and armed fighters who would later become its declared enemies.</p><p>The source frames the Mujahideen as a &quot;private army&quot; controlled by the CIA, whose purpose was not only to defeat the Soviet Union but also to establish a covert infrastructure for drug trafficking and perpetual warfare. It uses this historical example to support its broader thesis that the &quot;war on terror&quot; was by design a never-ending conflict whose primary beneficiaries were the hidden networks of power inside the U.S. government.</p><h2 id="sources" tabindex="-1">Sources <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;Sources&quot;">​</a></h2><p><a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">Original article</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/mujahideen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mujahideen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  mujahideen as default
};
