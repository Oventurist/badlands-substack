import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"SavePulse","description":"","frontmatter":{"title":"SavePulse","created":"2026-08-06T00:00:00.000Z","updated":"2026-08-06T00:00:00.000Z","type":"entity","tags":["sponsor","pharmacy","badlands-media"],"sources":["raw/badlands-brief-e3f.md"],"confidence":"medium"},"headers":[],"relativePath":"entities/savepulse.md","filePath":"entities/savepulse.md","lastUpdated":null}');
const _sfc_main = { name: "entities/savepulse.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="savepulse" tabindex="-1">SavePulse <a class="header-anchor" href="#savepulse" aria-label="Permalink to &quot;SavePulse&quot;">​</a></h1><p>SavePulse is an online pharmacy that sponsors the <a href="/concepts/badlands-brief">Badlands Brief</a>, promoted to readers through the badlandsmedia.tv/meds link.[1] The company describes itself as more than a pharmacy, offering affordable, high-quality medications focused on customer well-being.[1]</p><h2 id="products" tabindex="-1">Products <a class="header-anchor" href="#products" aria-label="Permalink to &quot;Products&quot;">​</a></h2><p>SavePulse advertises access to treatments including ivermectin, hydroxychloroquine, azithromycin, cephalexin, fluvoxamine, amoxicillin, sildenafil and fenbendazole.[1] In April 2026 it also began offering Medical Emergency Kits containing eight medications, marketed on the premise that customers should have them ready before they are needed, with a limited-time discount code offering 20 percent off.[1]</p><h2 id="references" tabindex="-1">References <a class="header-anchor" href="#references" aria-label="Permalink to &quot;References&quot;">​</a></h2><ol><li>Badlands Brief — &quot;Blondie&#39;s Ouster, Peters Sentence, &amp; Several Foreign Ops&quot;, URL: <a href="https://badlands.substack.com/p/badlands-brief-e3f" target="_blank" rel="noreferrer">https://badlands.substack.com/p/badlands-brief-e3f</a></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("entities/savepulse.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const savepulse = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  savepulse as default
};
