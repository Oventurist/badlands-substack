import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Jeddah","description":"","frontmatter":{"title":"Jeddah","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["saudi-arabia","jeddah","geography"],"sources":["raw/a-conflict-of-interest.md"],"confidence":"low"},"headers":[],"relativePath":"entities/jeddah.md","filePath":"entities/jeddah.md","lastUpdated":null}');
const _sfc_main = { name: "entities/jeddah.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="jeddah" tabindex="-1">Jeddah <a class="header-anchor" href="#jeddah" aria-label="Permalink to &quot;Jeddah&quot;">​</a></h1><p>Jeddah is the Saudi Arabian city identified in the article as the birthplace of <a href="/entities/prince-alwaleed-bin-talal">Prince Alwaleed</a> and flagged as a recurring node in the series&#39; account of the network.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a></p><p>The author instructs readers to &quot;remember that very important data point,&quot; adding that &quot;a lot of roads lead to Jeddah.&quot;<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a> The city&#39;s significance in the article derives from the convergence it represents between Saudi royal wealth and Lebanese lineage — Alwaleed&#39;s father was the Saudi royal Talal bin Abdulaziz Al Saud and his mother Mona El Solh was the daughter of Riad El Solh, the first Prime Minister of Lebanon.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a> The same Saudi-birth and Lebanese-descent combination attaches to &quot;Basel,&quot; the <a href="/entities/coalition-provisional-authority">CPA</a> official who received $40 billion in cash in Baghdad, which the article treats as more than coincidence.<a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">[1]</a></p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;A Conflict of Interest&quot;, URL: <a href="https://badlands.substack.com/p/a-conflict-of-interest" target="_blank" rel="noreferrer">https://badlands.substack.com/p/a-conflict-of-interest</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/jeddah.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const jeddah = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  jeddah as default
};
